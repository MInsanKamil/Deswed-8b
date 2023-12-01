import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncGames = createAsyncThunk('games/fetch', async(page = 1) => {
    const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&page=${page}`);
    return data;
});

export const fetchAsyncGameDetails = createAsyncThunk('game/details/fetch', async(id) => {
    const { data } = await axios.get(`${apiURL.gamesURL}/${id}?${API_KEY}`);
    return data;
});

export const fetchAsyncRecommendedGames = createAsyncThunk('games/recommended/fetch', async () => {
      try {
        // Mengambil semua game untuk mendapatkan data tanggal rilis
        const { data: allGames } = await axios.get(`${apiURL.gamesURL}?${API_KEY}`);
        
        // Mengurutkan game berdasarkan tanggal rilis, dari yang terbaru
        const sortedGames = allGames.results.sort((a, b) => new Date(b.released) - new Date(a.released));
  
        // Mengambil 6 game terbaru sebagai rekomendasi
        const recommendedGames = sortedGames.slice(0, 6);
  
        return recommendedGames;
      } catch (error) {
        // Tangani kesalahan jika terjadi
        throw error;
      }
});