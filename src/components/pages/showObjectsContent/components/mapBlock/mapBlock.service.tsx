import { useState, useEffect, useMemo } from 'react'
import { Objects, ObjectsItem } from '../../showObjectsContent.props'
import * as I from '../../../../../store/storeInterfaces'
import storeShowObjectsContent from '../../../../../store/storeShowObjectsContent'
import { UseMapBlock, typeofYmaps, findedType } from './mapBlock.props'


const useMapBlock:UseMapBlock = (objects:Objects) => {   	
    const [Ymaps, setYmaps] = useState<typeofYmaps|null>(null)

	const [coord, setCoord] = useState<Array<number[] | undefined>>([undefined, undefined])	
    const [center, setCenter] = useState<number[]>([59.938955, 30.315644])
    const [bounds, setBounds] = useState<Array<number[]> | undefined>(undefined)
    const [zoom, setZoom] = useState(6)

	const mapState = {
		center: center,
		zoom: zoom,
		controls: ['zoomControl', 'fullscreenControl'],
        bounds:	bounds,
	}

    const initYmaps = (el: typeofYmaps) => {
        setYmaps(el)
    }
  
    const arrayOfObjects = storeShowObjectsContent.arrayOfObjects

    useEffect(() => {        
        let c:number[][] = arrayOfObjects.map(el => el.coord)
        let min = [1000, 1000], max = [0, 0]
        c.forEach(coord => {
            if (coord[0] < min[0]) min[0] = coord[0]
            if (coord[1] < min[1]) min[1] = coord[1]
            if (coord[0] > max[0]) max[0] = coord[0]
            if (coord[1] > max[1]) max[1] = coord[1]
        })             
        
        setBounds([min, max])
    }, [arrayOfObjects])  

    const state = {
        Ymaps: Ymaps,
        mapState: mapState,
        arrayOfObjects: arrayOfObjects,
    }

    const api = {
        initYmaps:initYmaps,
    }

    return (
        [state, api]
    )
}
export default useMapBlock