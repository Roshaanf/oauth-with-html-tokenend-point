var express = require("express");

var port = process.env.PORT || 3000;
var app = express();



client_id = GOOGLE_CLIENT_ID & client_secret=GOOGLE_CLIENT_SECRET & grant_type=authorization_code & code=AUTHORIZATION_CODE
client_id = GOOGLE_CLIENT_ID & client_secret=GOOGLE_CLIENT_SECRET & grant_type=refresh_token & refresh_token=REFRESH_TOKEN

app.post("/token", function (req, res, next) {
    console.log("req.query: ", req.query);
    var client_id = req.query.client_id
    var client_secret = req.query.client_secret
    var grant_type = req.query.grant_type
    var ACCESS_TOKEN="bbcc"
    var REFRESH_TOKEN="refresh"
    var SECONDS_TO_EXPIRATION=30;
    var code;
    var refresh_token;

    if (grant_type == 'authorization_code') {
        code = req.query.code
       
        return res.json({
            token_type: "bearer",
            access_token: ACCESS_TOKEN,
            refresh_token: REFRESH_TOKEN,
            expires_in: SECONDS_TO_EXPIRATION
          });
    }
    else {
        refresh_token = req.query.refresh_token;

        return res.json({
        
                token_type: "bearer",
                access_token: ACCESS_TOKEN,
                expires_in: SECONDS_TO_EXPIRATION
              
        })
    }

    var YOUR_PROJECT_ID = 'agentproject-be016';
    var ACCESS_TOKEN = 'abcd';

    
});





app.listen(port, function () {
    console.log("listening on " + port);
})