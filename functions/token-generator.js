const axios = require('axios');
require('dotenv').config()

/* 
Setup your enviornment variables on Netlify, under settings / deploy:  
https://app.netlify.com/sites/<your-app-name>/settings/deploys
to match CONSUMER_KEY, CONSUMER_SECRET
*/

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const credentials = new Buffer.from(
  CONSUMER_KEY + ':' + CONSUMER_SECRET
).toString('base64');
const url = 'https://session.voxeet.com/v1/oauth2/token';
const config = {
  headers: {
    Authorization: 'Basic ' + credentials,
  },
};

const data = { grant_type: 'client_credentials', expires_in: 3600 };

async function fetchToken() {
  try {
    const response = await axios.post(url, data, config);
    const { access_token, refresh_token, expires_in } = response.data;
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*', // NOTE this is to allow for CORS when testing locally
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body: JSON.stringify({ access_token, refresh_token, expires_in }),
    };
  } catch (error) {
    // handle error
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unexpected error' }),
    };
  }
}

exports.handler = async (event) => {
  let response = await fetchToken();
  return response;
};
