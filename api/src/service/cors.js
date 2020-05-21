const supportedMethods = [
    'GET',
    'PUT',
    'POST',
    'DELETE',
    'OPTIONS',
    'PATCH'
];
const supportedHeaders = [
    'Content-Type',
    'Authorization',
    'X-PINGOTHER',
    'X-File-Name',
    'X-Requested-With',
    'Cache-Control',
    'Accept',
    'Origin',
    'X-Session-ID'
];

exports = module.exports = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', supportedMethods.join(', '));
    res.setHeader('Access-Control-Allow-Headers', supportedHeaders.join(', '));

    res.setHeader('Access-Control-Allow-Origin', req.get('origin') || '*');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
};
