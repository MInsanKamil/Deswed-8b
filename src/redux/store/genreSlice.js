import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGenresDetails,fetchAsyncGenres } from "../utils/genreUtils";

const initialState = {
    genres: [],
    genresStatus: STATUS.IDLE,
    genresSingle: {},
    genresSingleStatus: STATUS.IDLE,
}

const genreSlice = createSlice({
    name: "genre",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGenres.pending, (state) => {
            state.genresStatus = STATUS.LOADING
        })

        builder.addCase(fetchAsyncGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGenres.rejected, (state) => {
            state.genresStatus = STATUS.FAILED
        })

        builder.addCase(fetchAsyncGenresDetails.pending, (state) => {
            state.genresSingleStatus = STATUS.LOADING
        })

        builder.addCase(fetchAsyncGenresDetails.fulfilled, (state, action) => {
            state.genresSingle = action.payload;
            state.genresSingleStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGenresDetails.rejected, (state) => {
            state.genresSingleStatus = STATUS.FAILED
        })
    },
    reducers: {}
});

export const selectAllGenres = (state) => state.genre.genres.results;
export const selectAllGenresStatus = (state) => state.genre.genresStatus;
export const selectGenresNextPage = (state) => state.genre.genres.next;
export const selectGenresPrevPage = (state) => state.genre.genres.previous;
export const selectSingleGenre = (state) => state.genre.genresSingle;
export const selectSingleGenreStatus = (state) => state.genre.genresSingleStatus;

export default genreSlice.reducer;