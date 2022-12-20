import fetch from "node-fetch";

export default async function handler(request, response) {
  const { title } = request.query;
  const res = await fetch(
    `${process.env.API_END_POINT}?apikey=${process.env.API_KEY}&s=${title}`
  );
  const data = await res.json();

  return response.status(200).json({ data });
}
