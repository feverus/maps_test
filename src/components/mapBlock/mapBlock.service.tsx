import { useState, useEffect, useMemo } from 'react'
import * as I from '../../store/storeInterfaces'
import storeAdressAndMap, { StoreAdressAndMap } from '../../store/storeAdressAndMap'
import {getApi} from '../../api/getApi'
import {uploadApi} from '../../api/uploadApi'
import {deleteApi} from '../../api/deleteApi'
import { UseMapBlock, typeofYmaps, findedType } from './mapBlock.props'

const useMapBlock:UseMapBlock = () => {   	
    const [Ymaps, setYmaps] = useState<typeofYmaps|null>(null)

	const [coord, setCoord] = useState<Array<number[] | undefined>>([undefined, undefined])	
    const [center, setCenter] = useState<number[]>([59.938955, 30.315644])

	const mapState = {
		center: center,
		zoom: 4,
		controls: ['zoomControl', 'fullscreenControl'],		
	}

    const PLacemarkColors = [
        '#206010', '#105060'
    ]

    const initYmaps = (el: typeofYmaps) => {
        setYmaps(el)
    }

    const getNewGeoCode = (search:string, index: number) => {        
        if ((search.length>2) && (Ymaps)) {
            console.log(`Геокодирование адреса ${index} в координаты`)
            Ymaps.geocode(search, {json:true})
            .then((result) => {
                const finded:findedType = JSON.parse(JSON.stringify(result)).GeoObjectCollection    

                if (finded.metaDataProperty.GeocoderResponseMetaData.found as number>0) {
                      storeAdressAndMap.setDataFromApi(finded.featureMember[0], index)
                }
            })
            .catch(()=>console.log('Ошибка обработки ответа от api'))
		} else {
            storeAdressAndMap.setDataFromApi(undefined, index)
        }
    }

    useEffect(() => {
        getNewGeoCode(storeAdressAndMap.adress, 0)
    }, [storeAdressAndMap.adress])

    useEffect(() => {
        getNewGeoCode(storeAdressAndMap.nearCity, 1)
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
        coord: coord,
        PLacemarkColors: PLacemarkColors,
    }

    const api = {
        initYmaps:initYmaps,
    }

    return (
        [state, api]
    )
}
export default useMapBlock