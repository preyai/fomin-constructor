import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ResultType, StepType } from '../types'


// export type StepNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

// type ResultType = {
//     city?: VariantType
//     trimester?: VariantType
//     doctor?: DoctorType
//     visits?: RadioType
//     consultations?: RadioType
//     analysis?: RadioType
//     nipt?: RadioType
//     psychologists?: RadioType
// }

// Define a type for the slice state
interface StepsState {
    step?: number,
    steps: StepType[],
    result: ResultType[]
}

// Define the initial state using that type
const initialState: StepsState = {
    steps: [],
    result: Array(10)
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            if (action.payload === 0 || state.result[action.payload - 1])
                state.step = action.payload
        },
        setSteps: (state, action: PayloadAction<StepType[]>) => {
            state.steps = action.payload
        },
        setResult: (state, action: PayloadAction<ResultType[]>) => {
            state.result = action.payload
        }
    },
})

export const { setStep, setSteps, setResult } = stepsSlice.actions

export const selectStep = (state: RootState) => state.steps.step

export default stepsSlice