import { useState, useEffect, useMemo } from 'react'
import { Objects, ObjectsItem } from '../../showObjectsContent.props'
import * as I from '../../../../../store/storeInterfaces'
import storeAdressAndMap from '../../../../../store/storeAdressAndMap'
import { UseMapBlock, typeofYmaps, findedType } from './mapBlock.props'


const useMapBlock:UseMapBlock = (objects:Objects) => {   	
    const [Ymaps, setYmaps] = useState<typeofYmaps|null>(null)

	const [coord, setCoord] = useState<Array<number[] | undefined>>([undefined, undefined])	
    const [center, setCenter] = useState<number[]>([59.938955, 30.315644])
    const [zoom, setZoom] = useState(4)

	const mapState = {
		center: center,
		zoom: zoom,
		controls: ['zoomControl', 'fullscreenControl'],		
	}

    const initYmaps = (el: typeofYmaps) => {
        setYmaps(el)
    }
  
    let arrayOfObjects = objects


    const state = {
        Ymaps: Ymaps,
        mapState: mapState,
        arrayOfObjects: arrayOfObjects
    }

    const api = {
        initYmaps:initYmaps,
    }

    return (
        [state, api]
    )
}
export default useMapBlock