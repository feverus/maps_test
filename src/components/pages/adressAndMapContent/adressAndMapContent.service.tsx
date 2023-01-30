import { useState } from 'react'
import storeAdressAndMap from '../../../store/storeAdressAndMap'
import { UseAdressAndMapContent, DataToSend } from './adressAndMapContent.props'
import { useDebouncedCallback } from 'use-debounce';
import {uploadApi} from '../../../api/uploadApi'

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
        const cleanedValue = value.split('')
            .reduce((accumulator, current) => {
                if (current.match(/[А-Яа-я -]/)!==null) {
                    if (accumulator.length===0) {
                        if (current!== ' ' && current!=='-') 
                            current = current.toUpperCase() 
                        else 
                            current = ''
                    }
                } else {current = ''}
                accumulator+=current
                return accumulator
            }, '')

        setNearCity(cleanedValue)
        debouncedSetNearCity(cleanedValue)
	}
    
    const clickForward = () => {
        let dataTosend:DataToSend[]=[]
        storeAdressAndMap.dataFromApi.forEach(geo => {
            if (geo!==undefined) {
                let temp:DataToSend = {}
                const geoM = JSON.parse(JSON.stringify(geo))

                //сбор нужных данных ждя отправки на бэкенд
                temp.pos = geoM.GeoObject.Point.pos
                temp.formatted = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.Address?.formatted                
                temp.postal_code = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.Address?.postal_code
                temp.CountryName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.CountryName
                temp.AdministrativeAreaName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.AdministrativeArea?.AdministrativeAreaName
                temp.SubAdministrativeAreaName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.AdministrativeArea?.SubAdministrativeArea?.SubAdministrativeAreaName
                temp.ThoroughfareName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.AdministrativeArea?.SubAdministrativeArea?.Locality?.DependentLocality?.DependentLocality?.Thoroughfare?.ThoroughfareName
                
                dataTosend.push(temp)
            }
        })          
        uploadApi(dataTosend)     
    }

    const state = {
        adress: adress,
        nearCity: nearCity,
    }

    const api = {
        changeAdress:changeAdress,
        changeNearCity:changeNearCity,
        clickForward:clickForward,
    }

    return (
        [state, api]
    )
}
export default useAdressAndMapContent