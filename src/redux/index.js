import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies"
import isLoadingReducer from "./isLoading"
import pageReducer from "./page"
import doGenresVisibleReducer from "./doGenresVisible"
import movieInfoReducer from "./movieInfo"

export default configureStore({
    reducer: {
        movies: moviesReducer,
        isLoading: isLoadingReducer,
        chosenMovie: {},
        page:pageReducer,
        doGenresVisible:doGenresVisibleReducer,
        movieInfo:movieInfoReducer
    }
})