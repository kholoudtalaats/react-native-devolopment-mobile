import {configureStore} from "@reduxjs/toolkit";
import users from "./users";
const Store= configureStore({
    reducer: {
        users,
    },
});
export default Store;