export type StateType = {
    checkPickerData: Array<{label: string, value: string}>,
    selectedCategorys: string[],
}

export type ApiType = {   
    handleStart: (e:Date|null) => void,
    handleEnd: (e:Date|null) => void,
    handleActivityDirection: (e: string[]) => void,
}

export type UseShowObjectsContent = () => [
    state: StateType,
    api: ApiType
]