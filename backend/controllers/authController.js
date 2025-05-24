import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: `User with username ${email} NOT FOUND` });
    }
    const user = results[0];
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(401).json({ message: "Wrong Password!" });
    }
    const token = jwt.sign(
      { id: user.id, username: user.name, email:user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(200).json({
      message: "Login successful",
      token: token
    });
  });
};
function isValidPassword(password) {
  const lengthValid = password.length >= 8 && password.length <= 16;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  return lengthValid && hasUppercase && hasSpecialChar;
}

export const register = async (req, res) => {
  const { name, email, address, password, role } = req.body;
  if (name.length < 10 || name.length > 61) {
    return res.status(400).json({
      message: "username must be in between  10 to 60 characters."
    })
  }
  if (address.length > 401) {
    return res.status(400).json({
      message: "address not be more than 400 characters."
    })
  }
  if (password && isValidPassword(password)) {
    const query = "insert into users (name, email, address, password, role) values (?,?,?,?,?)";
    const Hashpassword = bcrypt.hashSync(password, 10)
    const data = db.query(query, [name, email, address, Hashpassword, role], (error, result) => {
      if (error) {
        return res.status(500).json({
          message: "Internal server eroor",
          error: error.message
        })
      }

      return res.status(201).json({
        message: "Registration successfull",
        data: result
      })
    })

  }
  else {
    return res.status(400).json({
      message: "password must follow, 8-16 characters, must include at least one uppercase letter and one special character.."
    })
  }
}



