import axios from "axios";

export const api = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/exercises",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});

export const getExercise = (exercise: string) =>
  api.get(`/bodyParts/${exercise}`).then((res) => res.data);

export const getExercises = () => api.get("").then((res) => res.data);
