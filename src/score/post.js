const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'atJDLGSYqkHSdEO8DULP';

const postScore = async (name, score) => {
  const response = await fetch(`${url}/${gameId}/scores`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score: Number(score) }),
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error('Error!');
};

module.exports = postScore;