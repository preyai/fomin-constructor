import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { DoctorType, RadioType, VariantType } from '../types'

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

export type ResultType = VariantType | RadioType | DoctorType | undefined
// Define a type for the slice state
interface StepsState {
    step: number,
    result: ResultType[]
}

// Define the initial state using that type
const initialState: StepsState = {
    step: 0,
    result: Array(10)
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        },
        setResult: (state, action: PayloadAction<ResultType[]>) => {
            state.result = action.payload
        }
    },
})

export const { setStep, setResult } = stepsSlice.actions

export const selectStep = (state: RootState) => state.steps.step

export default stepsSlice