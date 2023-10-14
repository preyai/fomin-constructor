import { setResult } from "../redux/stepsSlice"
import { useAppDispatch, useAppSelector } from "../store"
import { ResultType } from "../types"

const useStep = (variant: ResultType) => {
    const { result, step } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    if (step === undefined || variant === undefined)
        return { active: false, handler: () => undefined }

    const active = variant.id === result[step]?.id

    const handler = () => {
        const _result = [...result]
        _result[step] = variant
        dispatch(setResult(_result))
    }

    return { active, handler }
}

export default useStep