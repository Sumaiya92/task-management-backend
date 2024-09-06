import jwt from 'jsonwebtoken';
const authenticate = (req, res, next) => {
    // Get the token from the headers
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // If no token is found, return an error
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Attach the decoded user data to the request
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();
    } catch (err) {
        // If token is invalid, return an error
        res.status(401).json({ message: 'Token is not valid' });
    }
};
export default authenticate