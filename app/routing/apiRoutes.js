
var friends = require('../data/friends.js');

module.exports = function (app) {
    // get api/friends route
    app.get('/api/friends', function (req, res) {
        return res.json(friends);
    });

    // post api/friends route
    app.post('/api/friends', function (req, res) {
        friends.push(req.body);
    });
};