import * as I from '../../store/storeInterfaces'
import ymaps from 'yandex-maps'

export type typeofYmaps = typeof ymaps

export type findedType = {
    featureMember: Array<ymaps.GeoObject>,
    metaDataProperty: {
        GeocoderResponseMetaData: any
    }
}

export type StateType = {
    Ymaps: typeof ymaps|null;
    mapState: ymaps.IMapState;
    coord: Array<number[] | undefined>;
};

export type ApiType = {
    initYmaps: (el: typeof ymaps) => void;
};

export type UseMapBlock = () => [
    state: StateType,
    api: ApiType
];