import * as I from '../../../../../store/storeInterfaces'
import ymaps from 'yandex-maps'
import { Objects } from '../../index'

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
    arrayOfObjects: Objects;
};

export type ApiType = {
    initYmaps: (el: typeof ymaps) => void;
};

export type UseMapBlock = (objects:Objects) => [
    state: StateType,
    api: ApiType
];