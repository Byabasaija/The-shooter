const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'atJDLGSYqkHSdEO8DULP';

const sendScore = async (name, score) => {
  const response = await fetch(`${url}/games/${gameId}/scores`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score: Number(score) }),
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};

const getScores = async () => {
  const response = await fetch(`${url}/games/${gameId}/scores`, {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};


export { sendScore, getScores };