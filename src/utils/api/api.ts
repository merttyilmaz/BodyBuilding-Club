import axios from "axios";

export const api = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/exercises",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});

export const getBodyParts = () =>
  api.get("/bodyPartList").then((res) => res.data);
