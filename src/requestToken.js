const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const client_id = '9f3e21502b5b49c4a5d4bf6e9ba88d5e';
const client_secret = '2d1878706dcb4fd29b02989550ec7a7d';

let spotifyToken = null;
let tokenExpiresAt = 0;

const getSpotifyToken = async () => {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const response = await axios.post(tokenUrl, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
        },
    });

    return response.data.access_token;
};
