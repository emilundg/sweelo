export const spotifyConfig = {
    options: {
        endPoint: 'https://accounts.spotify.com/authorize',
        clientId: '0e02e28b4df649b294c8edcc010595dd',
        scope: 'user-read-currently-playing',
        redirectUri: 'http://localhost:8080/playback'
    }
}