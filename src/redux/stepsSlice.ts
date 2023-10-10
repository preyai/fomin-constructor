import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// export type StepNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

// Define a type for the slice state
interface StepsState {
    value: number
}

// Define the initial state using that type
const initialState: StepsState = {
    value: 0,
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    },
})

export const { setValue } = stepsSlice.actions

export const selectStep = (state: RootState) => state.steps.value

export default stepsSlice