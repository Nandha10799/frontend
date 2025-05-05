import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./slice/activePageSlice";
import userProfileReducer from "./slice/userProfileSlice";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    userProfile: userProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
