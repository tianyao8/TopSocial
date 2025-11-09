const handleErrors = function (err, req, res, next) {
    console.log('Error Middleware:', err);
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json(message)
}


module.exports = {handleErrors};