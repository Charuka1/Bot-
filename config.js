const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'T24A3SJI#BhengB7EwzUaZQaIwMhjatRmThFKjE9dA9_0pNxbIJU'
};
