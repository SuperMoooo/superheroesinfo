import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        data: [],
    },
    reducers: {
        setCharacters: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
