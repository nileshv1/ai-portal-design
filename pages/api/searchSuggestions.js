// import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { query } = req.query;

  const apiEndpoint = 'https://documentssearch-dt.search.windows.net/indexes/searchrelationindex/docs';
  const apiVersion = '2023-07-01-Preview';
  const apiKey = 'aWQwfnchgKpkixAP8psDz4OthP89VEDmRq34BHL3QBAzSeB25ZyP';
  const authToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mZWQ5NWU2OS04ZDczLTQzZmUtYWZmYi1hN2Q4NWVkZTM2ZmIvIiwiaWF0IjoxNjkzODk2NTExLCJuYmYiOjE2OTM4OTY1MTEsImV4cCI6MTY5MzkwMTg2NiwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQTh3Y2FjbkJ3SUZ2dVRDY1hMVU1SU0VKQm5sN24reERvRTA2YXozRVgrOW1hM0Zld0J3YTNMOUlvaERpSXExdUEiLCJhbXIiOlsicHdkIiwicnNhIl0sImFwcGlkIjoiYzQ0YjQwODMtM2JiMC00OWM1LWI0N2QtOTc0ZTUzY2JkZjNjIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiJhODc0NWJlYi1kMTU4LTRiMzEtYTgyNy02MGE1YWQ1OWFjY2UiLCJmYW1pbHlfbmFtZSI6IlNyaW5pdmFzYW4iLCJnaXZlbl9uYW1lIjoiQmFsYWppIiwiZ3JvdXBzIjpbImI1ODg4NTAwLWU0NGYtNDY4My04MTRmLTU3ZTJmNmEyNzlkMSIsImY1MWU5NDA5LTRhNTEtNDVkOS1iMTUxLTk1MjUwN2Y3Mjc1MSIsIjIyOTc4MzA2LWU5OGItNGJjZC1hYzIyLWE0MDI1OWVjMDIxYSIsImRmZjJiNzA3LWU2YTgtNDhlMS04OWJlLWE0ZDJlZmJlN2U0YyIsIjJiMWYyMDA4LTliZGUtNDc3My04NDY3LWI4NGQwYTBiOTVjOSIsImU1YjYwMDBiLWI0MTUtNGEzMy1iYjZjLWVjNjBjZWExMjhkNiIsIjU1ZjFlYjBmLThhN2QtNGIwYy05MGRlLTg5YWI1ZWI5MzE0NiIsImEyNGIyNzEwLWIxN2UtNDNlMS1iYWM4LTM5MmFkMWFlYThiOSIsIjhjNGY1ZDEwLWZkOGUtNDQzZi05ZjdhLTkxNzAxNGE3OGFhMSIsImRhNjNlZTEyLTc4NDQtNGZiYy05MGJjLWE0N2NjYmQ2OGI1ZCIsImUwODkzNzEzLTMzZGMtNDg2Yi1iM2NkLWIxY2Q4NjQ2ODQzNiIsImFjZDc1NTE0LWNjMmQtNDNmZC1hZWUwLTI5YzVhY2I0YzgzZiIsImY1NDNkMTIwLTVjMzItNDIwNC04ZTg4LTMzOGViM2FjMzg1YSIsIjc0ZDQ5NGNkLTk3OGYtNDkzZS1hODNmLTVhMzcyNzM0MTM0NiIsIjI4YjRhY2I0LWY1MGYtNDg0Zi1iNzgyLTkyNzQwNjAxNjUwOSIsIjM4ZjNiMDhiLWE3N2QtNDE2My05NzBmLWY0YTIzOTUyMzI0MSIsImVmNTk2YTk0LWM3N2QtNGYwZS05NzA1LTFmOTk4M2Y4YjMyNiIsIjI5MzRkNzk5LWIyZDAtNDI1Zi05NjQxLTU4ZDMyMzc5NGMxOCIsIjQ1Y2RfZmYyZjg3Mjg4ZGQwZjAwMjFmNjY5ODRkOWQ5OWE2ZjA3MzA0NzAzOGQ4YjRiZDcyNzc2MjRhMGEwZmI2Y2E4Zjk4YjQxMyIsIjEyNmU1YzUyLWE0ZTUtNDAwYS1hMTFlLTBmN2ExYTUwMzA4ZSIsIjE1NzVkZmU0LWFlZDYtNDRlNy04NTFlLTQwZjk2OTg4ZjQ4NyIsImYzZTBjNjA2LWY2ZjUtNDE0Yi05NGRmLTI0ZWI3ZTc0MzRjMyIsIjBiZDA4MTBlLWIwY2QtNGI0Yy1hY2EzLWYwYmM1MTdjMTE4MCIsIjBlNmIwMDlhLTI5MDQtNGI4Mi05MjI0LWZkMzIyMWQ2YzJhMSIsImZlNjNhMjRmLWIwNzEtNDViZi05ZDIwLWJmYjA0Mzg5Y2RjYyIsIjRhYzVkYzFiLTMxYzYtNDlhNC1iY2Y2LTNiYmMyZGZmNjFiOSIsIjBlYmUyZmIxLWIwMzUtNGZiZC1iYmQ1LWI0MzZlNTQ4NzI4YiIsIjA4YmFlMTQwLTczZDktNDE1ZS1hODBlLWYwMzBhMjIwMzNkZCIsImMxMzFiYTgwLWFmNDMtNDVlZS1iM2NkLWIxY2Q4NjQ2ODQzNiIsIjA4MmEzY2ZjLTZhN2QtNDMwYi05NmU2LTg2YTYxNjBmNzIyMCIsIjBjNWQ4MjYwLTAyZmYtNDJlNC1iMTI5LTg4Y2RlNDU2MzE1YiIsImJhZGFlMzAxLTVlZjEtNDgxYS1iNTMxLTkwNTc4ODFjZjYwMCIsImIwYzE5YTg5LWUwYmQtNDYxOS04ODlhLWJkZjI2NWE1NmM5NyIsImViMDNlNTg1LTkzNDUtNGE1Ny1hYTY0LWI0Mzg5NWYwMjM3ZiIsIjM0MmYxMzU3LTdmOTQtNDI4MC1iYzhlLWY3Yjk1Mjc0YTQ5YiIsIjUzOGIzYmEyLTc0YjEtNGVhNC1hZjBlLWEwZTcwMTEyNzNjOSJ9.ROzA9a-xmnZc7xEsAe7f4HsbE_MGduScHFBlMTCZi6rKzvANAlhLrYMc8-KBHEjA-OcBGiaxUg1FJvRY56OO6Hc2kEunqQPO1ZElZyCzCJ01KjltG-gqwTltwhfFyldv3bfmF6wwKJ5u5PK1-F5dD6Zry7gTHx2EeUpf31Gkph2DWy6mD7mD2aG6gk_ZzS-iBRbPE9VEv3ohILJNRAa47OpqZiLXupJz50PYh03MG3mRUTgDcDdQeg3kNv2N1lq-wVeFOqgJrCVZg1bwtt7vcyZefGWJJpQOinQ5--e-vNtrEhGt4T-o_6TCFve1RQkqMofEnHiRrRzVK-FmWg_6g'; // Replace with your actual token

  // Your search query
const searchQuery = 'Alexis*';

  const requestUrl = `${apiEndpoint}?api-version=${apiVersion}&search=${query}`;

  const headers = {
    'Content-Type': 'application/json',
    'api-key': apiKey,
    'Authorization': authToken,
  };

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseBody = await response.text(); // Read the response as text

    // Check if the response is empty
    if (!responseBody) {
      throw new Error('Empty response');
    }

    let data;
    try {
      data = JSON.parse(responseBody); // Try parsing JSON
    } catch (parseError) {
      throw new Error(`Failed to parse JSON: ${parseError.message}`);
    }

    // Assuming your API response contains suggestions in a 'suggestions' property
    const suggestions = data || [];

    res.status(200).json({ suggestions });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
