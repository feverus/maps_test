import { useState, useEffect, useMemo } from 'react'
import * as I from '../../store/storeInterfaces'
import storeAdressAndMap, { StoreAdressAndMap } from '../../store/storeAdressAndMap'
import {getApi} from '../../api/getApi'
import {uploadApi} from '../../api/uploadApi'
import {deleteApi} from '../../api/deleteApi'
import { UseMapBlock, typeofYmaps, findedType } from './mapBlock.props'

const useMapBlock:UseMapBlock = () => {   	
	const [coord, setCoord] = useState<Array<number[] | undefined>>([undefined, undefined])
	const [Ymaps, setYmaps] = useState<typeofYmaps|null>(null)
    const [center, setCenter] = useState<number[]>([65.751574, 37.573856])

	const mapState = {
		center: center,
		zoom: 4,
		controls: ['zoomControl', 'fullscreenControl'],		
	}

    const initYmaps = (el: typeofYmaps) => {
        setYmaps(el)
    }

    const getNewGeoCode = (search:string, index: number) => {
        console.log(`Геокодирование адреса ${index} в координаты`)
        if ((search.length>3) && (Ymaps)) {
            Ymaps.geocode(search, {json:true})
            .then((result) => {
                const finded:findedType = JSON.parse(JSON.stringify(result)).GeoObjectCollection    

                if (finded.metaDataProperty.GeocoderResponseMetaData.found as number>0) {
                      storeAdressAndMap.setDataFromApi(finded.featureMember[0], index)
                }
            })
            .catch(()=>console.log('Ошибка обработки ответа от api'))
		}
    }

    useEffect(() => {
        console.log('Геокодирование адреса 1 в координаты')
        if ((storeAdressAndMap.adress.length>3) && (Ymaps)) {
            Ymaps.geocode(storeAdressAndMap.adress, {json:true})
            .then((result) => {
                const finded:findedType = JSON.parse(JSON.stringify(result)).GeoObjectCollection    

                if (finded.metaDataProperty.GeocoderResponseMetaData.found as number>0) {
                      storeAdressAndMap.setDataFromApi(finded.featureMember[0], 0)
                }
            })
            .catch(()=>console.log('Ошибка обработки ответа от api'))
		}
    }, [storeAdressAndMap.adress])

    useEffect(() => {
        getNewGeoCode(storeAdressAndMap.adress, 1)
    }, [storeAdressAndMap.nearCity])

    const geoObjectToCoord = (geo: I.geoObject | undefined) => {
        if (geo!==undefined) {
            return (JSON.parse(JSON.stringify(geo)).GeoObject.Point.pos as string)
                .split(' ')
                .slice(0 , 2)
                .reverse()
                .map(s => Number(s))
        }
        return undefined
    }

    useEffect(() => {
		setCoord(storeAdressAndMap.dataFromApi.map(
            geo => geoObjectToCoord(geo)
        ))
    }, [storeAdressAndMap.dataFromApi])

    useEffect(() => {
        if (coord[0]!==undefined) setCenter(coord[0])
        else if (coord[1]!==undefined) setCenter(coord[1])
    }, [coord])    

    const state = {
        Ymaps: Ymaps,
        mapState: mapState,
        coord: coord
    }

    const api = {
        initYmaps:initYmaps,
    }

    return (
        [state, api]
    )
}
export default useMapBlock