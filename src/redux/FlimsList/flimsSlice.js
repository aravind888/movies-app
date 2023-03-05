import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const flims = createAsyncThunk('flims/getFlims', async () => {
    return axios.get("https://swapi.dev/api/films/").then(res => {
        return res.data
    })
})

const flimsSlice = createSlice({
    name: "flims",
    initialState: {
        flimsList: [],
        loading: false
    },
    extraReducers: {
        [flims.pending] : (state) => {
            state.loading= true
        },
        [flims.fulfilled]: (state, action) => {
            state.loading= false
            state.flimsList= action.payload

        },
        [flims.rejected]: (state) => {
            state.loading= false
        }
    }
})

export default flimsSlice.reducer