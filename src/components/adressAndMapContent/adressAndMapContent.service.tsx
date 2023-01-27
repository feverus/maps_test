import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import storeAdressAndMap, { StoreAdressAndMap } from '../../store/storeAdressAndMap'
import {getApi} from '../../api/getApi'
import {uploadApi} from '../../api/uploadApi'
import {deleteApi} from '../../api/deleteApi'
import { UseAdressAndMapContent } from './adressAndMapContent.props'
import { useDebouncedCallback } from 'use-debounce';

const useAdressAndMapContent:UseAdressAndMapContent = () => {    
    const [adress, setAdress] = useState('')
    const [nearCity, setNearCity] = useState('')

    const debouncedSetAdress = useDebouncedCallback(
        (value) => {storeAdressAndMap.setAdress(value)},    
        2000// delay in ms
    )
    const debouncedSetNearCity = useDebouncedCallback(
        (value) => {storeAdressAndMap.setNearCity(value)},    
        2000// delay in ms
    )

    const changeAdress = (value:string) => {
		setAdress(value)
        debouncedSetAdress(value)
	}
    const changeNearCity = (value:string) => {
        if (value[value.length-1].match(/[А-Я|а-я| |-]/)!==null) {
            if (value.length===1) value = (value[0]!==' ' && value[0]!=='-') ? value[0].toUpperCase() : ''
            setNearCity(value)
            debouncedSetNearCity(value)
        }
	}
    
    const state = {
        adress: adress,
        nearCity: nearCity,
    }

    const api = {
        changeAdress:changeAdress,
        changeNearCity:changeNearCity,
    }

    return (
        [state, api]
    )
}
export default useAdressAndMapContent