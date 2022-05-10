import {configureStore} from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";

export default configureStore({
    reducer: {
        quiz: quizSlice
    }
});