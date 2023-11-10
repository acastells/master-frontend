function getAvg(scores) {
  return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores) {
  return scores.reduce((score, count) => score + count);
}

const average: number = 2;

// const API_BASE = "http://myapp.com";
// const API_BASE = "http://localhost:3000";

//   fetch(`${API_BASE}/api/users`);

console.log(`Api base: ${process.env.API_BASE}`);

export default getAvg;
