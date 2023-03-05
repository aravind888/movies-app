import { configureStore } from '@reduxjs/toolkit'
import flimsSlice from './FlimsList/flimsSlice'
import movieSlice from './Movie/movieSlice'
// import movieCharactersSlice from './Movie/movieCharactersSlice'

export const store = configureStore({
  reducer: {
    allFlims: flimsSlice,
    movie: movieSlice,
    // movieCharacters: movieCharactersSlice
  },
})