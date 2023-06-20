import { configureStore } from "@reduxjs/toolkit";
import nameTraine from "./slices/nameTrainer.slices";
export default configureStore({

    reducer:{
        nameTraine
    }
})