export const getData = async () => {
  const res = await fetch('http://localhost:3000/api/getData');
  const repo = await res.json()

  return repo;
}