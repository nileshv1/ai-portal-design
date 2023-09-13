// import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { query } = req.query;
  const { method, body } = req;
  // console.log(body,"body")

  const apiEndpoint = process.env.API_ENDPOINT;
  const apiVersion = process.env.API_VERSION;
  const apiKey = process.env.API_KEY;
  const authToken = process.env.AUTH_TOKEN; // Replace with your actual token

  // Your search query
  const searchQuery = "Alexis*";

  const requestUrl = `${apiEndpoint}?api-version=${apiVersion}&search=${body}`;

  const headers = {
    "Content-Type": "application/json",
    "api-key": apiKey,
    Authorization: authToken,
  };
  let check = await fetch(requestUrl, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => error);
  res.status(200).json(check);
}
