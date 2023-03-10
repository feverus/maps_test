import { useState, useEffect, useMemo } from 'react'
import * as I from '../../../../../store/storeInterfaces'
import storeAdressAndMap, { StoreAdressAndMap } from '../../../../../store/storeAdressAndMap'
import {getApi} from '../../../../../api/getApi'
import {uploadApi} from '../../../../../api/uploadApi'
import {deleteApi} from '../../../../../api/deleteApi'
import { UseMapBlock, typeofYmaps, findedType } from './mapBlock.props'
import { cities, findCitiesCoord, findNearCity } from '../../../../../store/cities'

const useMapBlock:UseMapBlock = () => {   	
    const [Ymaps, setYmaps] = useState<typeofYmaps|null>(null)

	const [coord, setCoord] = useState<Array<number[] | undefined>>([undefined, undefined])	
	const [bounds, setBounds] = useState<Array<number[]> | undefined>(undefined)	
    const [center, setCenter] = useState<number[]>([59.938955, 30.315644])
    const [zoom, setZoom] = useState(4)

	const mapState = {
		center: center,
		zoom: zoom,
		controls: ['zoomControl', 'fullscreenControl'],	
        bounds:	bounds,
	}

    const PLacemarkColors = [
        '#40a020', '#992222'
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
                      storeAdressAndMap.setDataFromApi(finded.featureMember[0])
                }
            })
            .catch(()=>console.log('Ошибка обработки ответа от api'))
		} else {
            storeAdressAndMap.setDataFromApi(undefined)
        }
    }

    useEffect(() => {
        getNewGeoCode(storeAdressAndMap.adress, 0)
    }, [storeAdressAndMap.adress])

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
        const userInputCoord = geoObjectToCoord(storeAdressAndMap.dataFromApi)
        const nearCity = (userInputCoord!==undefined) ?
            findNearCity(userInputCoord) :
            undefined

		setCoord([
            userInputCoord, 
            (nearCity!==undefined) ? findCitiesCoord(nearCity) : undefined
        ])

        nearCity!==undefined && storeAdressAndMap.setNearCity(nearCity)
    }, [storeAdressAndMap.dataFromApi])

    useEffect(() => {        
        if (coord.every(c => c===undefined)) {
            setBounds(undefined)
            setZoom(4)
        } else {
            if (coord.every(c => c!==undefined)) {
                let c:number[][] = JSON.parse(JSON.stringify(coord as number[][]))
 
                c.sort(((a, b) => a[0]-b[0]))
                if (c[0][1] > c[1][1]) {
                    let temp = c[0][1]
                    c[0][1] = c[1][1]
                    c[1][1] = temp
                }                
                
                
                setBounds(c)
            } else {
                setBounds(undefined)
                if (coord[0]!==undefined) {
                    setZoom(16)
                    setCenter(coord[0])
                }
                   
                if (coord[1]!==undefined) {
                    setZoom(12)
                    setCenter(coord[1])
                }
            }
        }
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