import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const movie = createAsyncThunk('movie/getmovie', async (id) => {
    // console.log("https://swapi.dev/api/films/"+id, "idid")
    return axios.get("https://swapi.dev/api/films/"+id).then(res => {
        return res.data
    })
})

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movie: [],
        loading: false
    },
    extraReducers: {
        [movie.pending] : (state) => {
            state.loading= true
        },
        [movie.fulfilled]: (state, action) => {
            state.loading= false
            state.movie= action.payload

        },
        [movie.rejected]: (state) => {
            state.loading= false
        }
    }
})

export default movieSlice.reducer