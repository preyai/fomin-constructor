
export type InputType = 'SELECT' | 'CARD' | 'RADIO' | 'TABLE'
export type DataType = 'cityes' | 'trimesters' | 'doctors' | 'visits' | 'consultations' | 'analysises' | 'nipts' | 'psychologists' | 'uzis'

export type VariantType = {
    label?: string
    id: string
}

export type DoctorType = {
    id: string
    fio: string
    photo: string
    price: number
}

export type RadioType = {
    id: string
    label: string
    description?: string
    price: number
}

export type ResultType = VariantType | RadioType | DoctorType | undefined

export type StepType = {
    type: InputType
    data: DataType
    variants: VariantType[]
    label: string
    description: string
}