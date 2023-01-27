import * as I from '../../store/storeInterfaces';

export type StateType = {
    adress: string;
    nearCity: string;
};

export type ApiType = {
    changeAdress: (value:string) => void;
    changeNearCity: (value:string) => void;
};

export type UseAdressAndMapContent = () => [
    state: StateType,
    api: ApiType
];