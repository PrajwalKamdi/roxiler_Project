import express from 'express'
import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'].split(" ")[1]
  console.log("token : ", token)
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        message: "Inavlid or expired token"
      })
    }
    req.user = user;
    next();
  })
}