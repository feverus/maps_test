import { useState, useEffect } from 'react'
import storeAdressAndMap from '../../../store/storeAdressAndMap'
import { UseAdressAndMapContent, DataToSend } from './adressAndMapContent.props'
import { useDebouncedCallback } from 'use-debounce'
import {uploadApi} from '../../../api/uploadApi'
import { cities, findCitiesCoord } from '../../../store/cities'

const useAdressAndMapContent:UseAdressAndMapContent = () => {    
    const [adress, setAdress] = useState('')
    const [nearCity, setNearCity] = useState('')

    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }
    const [dataForModal, setDataForModal] = useState('')

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
        //старая функция позволяющая вводить только город
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
        const geo = storeAdressAndMap.dataFromApi

        if (geo!==undefined) {
            let temp:DataToSend = {}
            const geoM = JSON.parse(JSON.stringify(geo))

            //сбор нужных данных для отправки на бэкенд
            temp.pos = geoM.GeoObject.Point.pos
            temp.formatted = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.Address?.formatted                
            temp.postal_code = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.Address?.postal_code
            temp.CountryName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.CountryName
            temp.AdministrativeAreaName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.AdministrativeArea?.AdministrativeAreaName
            temp.SubAdministrativeAreaName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.AdministrativeArea?.SubAdministrativeArea?.SubAdministrativeAreaName
            temp.ThoroughfareName = geoM.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails?.Country?.AdministrativeArea?.SubAdministrativeArea?.Locality?.DependentLocality?.DependentLocality?.Thoroughfare?.ThoroughfareName
            
            dataTosend.push(temp)
        }

        if (storeAdressAndMap.nearCity!=='') {
            dataTosend.push({
                "pos": (findCitiesCoord(storeAdressAndMap.nearCity) as Array<number>).join(', '),
                "formatted": storeAdressAndMap.nearCity,
            })
        }
         
        if (dataTosend.length>0) {
            setDataForModal(JSON.stringify(dataTosend[0]).replaceAll('","', '"<br>"') + '<br><br>' + JSON.stringify(dataTosend[1]).replaceAll('","', '"<br>"'))
            toggleModal()
            uploadApi(dataTosend)  
        } else {
            toggleModal()
        }
    }

    
    useEffect(() => {
        setNearCity(storeAdressAndMap.nearCity)
    }, [storeAdressAndMap.nearCity])

    const state = {
        adress: adress,
        nearCity: nearCity,
        showModal: showModal,
        dataForModal: dataForModal,
    }

    const api = {
        changeAdress: changeAdress,
        changeNearCity: changeNearCity,
        clickForward: clickForward,
        toggleModal: clickForward,
    }

    return (
        [state, api]
    )
}
export default useAdressAndMapContent