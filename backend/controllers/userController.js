import db from '../config/db.js';
import bcrypt from 'bcryptjs';
export const getUsers = async (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json(
      {
        message: "Users fetched successfully",
        result: result.filter((item)=>item.role !== 'admin')
      }

    );
  });
}
export const getUsersAdmin = async (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json(
      {
        message: "Users fetched successfully",
        result: result.filter((item)=>item.role == 'admin')
      }

    );
  });
}
export const createUser = async (req, res) => {
  const { name, email, address, password, role } = req.body;
  const query = 'INSERT INTO users (name, email, address, password, role) VALUES (?, ?, ?, ?)';
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query(query, [name, email, address, hashedPassword, role], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json(
      {
        message: "User created successfully",
        result
      }
    );
  });
}
export const getUserById = async (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(
      {
        message: "User fetched successfully",
        result
      }
    );
  });
}