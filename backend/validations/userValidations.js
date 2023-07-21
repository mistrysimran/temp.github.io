const { body } = require('express-validator');

module.exports.registerValidations = [
    body('name').not().isEmpty().trim().escape().withMessage('name is required'),
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('email is required'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 char long')
]

module.exports.loginValidations = [
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('email is required'),
    body('password').not().isEmpty().withMessage('password is required')    
]