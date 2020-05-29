const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, './public');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

getCurrentSong = async(token) => {
    return await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}

app.get('/current-song', async(req, res) => {
    try {
        const response = await getCurrentSong(req.query.token);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.log(error)
    }
})

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});