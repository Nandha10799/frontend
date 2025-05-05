import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
    id: string;
    name: string;
    email: string;
}

interface UserProfileState {
    profile: UserProfile | null;
}

const initialState: UserProfileState = {
    profile: null,
};

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<UserProfile>) => {
            state.profile = action.payload;
        },
        clearUserProfile: (state) => {
            state.profile = null;
        },
    },
});

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
