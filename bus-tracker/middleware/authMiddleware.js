// middleware/authMiddleware.js

module.exports = (req, res, next) => {
    // Example middleware logic (you can replace this with your authentication logic)
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(403).json({ message: 'Forbidden' });
    }
  
    // Assuming some logic to verify the token
    if (token === 'your-secret-token') {
      next(); // Allow the request to proceed
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
  