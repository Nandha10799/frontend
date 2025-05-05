import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActivePageState {
    current: string;
}

const initialState: ActivePageState = {
    current: "", 
};

const activePageSlice = createSlice({
    name: "activePage",
    initialState,
    reducers: {
        setActivePage: (state, action: PayloadAction<string>) => {
            state.current = action.payload;
        },
        resetActivePage: (state) => {
            state.current = "";
        },
    },
});

export const { setActivePage, resetActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
