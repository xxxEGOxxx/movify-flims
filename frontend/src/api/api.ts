import api from "./axiosConfig";

export const getMovies = async () => {
  try {
    const response = await api.get("/movies");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error in Fetching Movies", err);
  }
};
