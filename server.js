const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, './public');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

authenticateSpotifyUser = async() => {
    return await axios.get('https://accounts.spotify.com/authorize', {
        params: {
            client_id: '0e02e28b4df649b294c8edcc010595dd',
            response_type: 'token',
            redirect_uri: 'https://localhost:3000'
        }
    });
}

app.get('/information', async(req, res) => {
    try {
        const response = await authenticateSpotifyUser();
        console.log(response.data)
        res.send(response.data);
    } catch (error) {
        res
            .status(500)
            .send({error: e.message})
    }
})

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});