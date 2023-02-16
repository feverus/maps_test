export type StateType = {
    variantov: string,
    checkPickerData: Array<{"label": string, "value": string}>,
    activePage: number,
    objectCount: number,

};

export type ApiType = {
    handleShowPast: (cheked:boolean) => void,
    handleNewFirst: (e:string|null) => void,
    setActivePage: (page: number) => void
};

export type UseObjectList = () => [
    state: StateType,
    api: ApiType
];