// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';

// export const movieCharacters = createAsyncThunk('movieCharacters/getmovieCharacters', async (id) => {
//     const url = "https://swapi.dev/api/films/"+id;
//     console.log(url, "character idid")
//     return (
//         axios.get("https://swapi.dev/api/films/"+id).then(res => {
//             return res.data
//         })
//     )
// })

// const movieCharactersSlice = createSlice({
//     name: "movieCharacters",
//     initialState: {
//         characters: [],
//         loading: false
//     },
//     extraReducers: {
//         [movieCharacters.pending] : (state) => {
//             state.loading= true
//         },
//         [movieCharacters.fulfilled]: (state, action) => {
//             state.loading= false
//             state.characters= action.payload

//         },
//         [movieCharacters.rejected]: (state) => {
//             state.loading= false
//         }
//     }
// })

// export default movieCharactersSlice.reducer