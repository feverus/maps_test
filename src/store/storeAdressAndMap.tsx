import {makeAutoObservable, observable, action} from 'mobx';
import {geoObject} from './storeInterfaces'

export class StoreAdressAndMap {
    adress:string = ''
    nearCity:string = ''
    lastFieldChanged:number = 0

    dataFromApi: geoObject | undefined = undefined

    constructor() {
        makeAutoObservable(this, {
            adress: observable,
            nearCity: observable,
            lastFieldChanged: observable,
            dataFromApi: observable,
            setAdress: action
        }, { deep: true })
    }
    
    setAdress(newData:string) {
        this.adress = newData
        this.lastFieldChanged = 0
    }
    setNearCity(newData:string) {
        this.nearCity = newData
        this.lastFieldChanged = 1
    }
    setDataFromApi(newData:geoObject | undefined) {
        if (newData!==undefined)
            this.dataFromApi = JSON.parse(JSON.stringify(newData))
    }
}

const storeAdressAndMap = new StoreAdressAndMap()
export default storeAdressAndMap