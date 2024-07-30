import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    },
})

export const { increment, decrement } = cardSlice.actions;
export const { reducer } = cardSlice;