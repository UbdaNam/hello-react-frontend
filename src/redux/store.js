import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messages/messagesSlice";

export const store = configureStore({
  reducer: {
    message: messagesReducer,
  },
});
