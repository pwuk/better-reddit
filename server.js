const express = require("express");
const path = require('path');

const app = express();

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}
// Instruct the app
// to use the forceSSL
// middleware
// app.use(forceSSL());

app.use(express.static("./dist/betterReddit"));


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/betterReddit/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("Server listening on port: " + port);
