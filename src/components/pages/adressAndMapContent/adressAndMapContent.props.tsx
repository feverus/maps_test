import * as I from '../../../store/storeInterfaces';

export type StateType = {
    adress: string;
    nearCity: string;
    showModal: boolean;
    dataForModal: string;
};

export type ApiType = {
    changeAdress: (value:string) => void;
    changeNearCity: (value:string) => void;
    clickForward: () => void;
    toggleModal: () => void;
};

export type UseAdressAndMapContent = () => [
    state: StateType,
    api: ApiType
];

export type DataToSend = {
    pos?: string;
    formatted?: string;
    postal_code?: string;
    CountryName?: string;
    AdministrativeAreaName?: string;
    SubAdministrativeAreaName?: string;
    ThoroughfareName?: string;    
}