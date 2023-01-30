import {makeAutoObservable, observable, action} from 'mobx';
import {geoObject} from './storeInterfaces'

export class StoreAdressAndMap {
    adress:string = ''
    nearCity:string = ''
    lastFieldChanged:number = 0

    dataFromApi: Array<geoObject | undefined> = [undefined, undefined]

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
    setDataFromApi(newData:geoObject | undefined, field: number) {
        let copy = [...this.dataFromApi]
        copy[field] = newData
        this.dataFromApi = copy
    }
}

const storeAdressAndMap = new StoreAdressAndMap()
export default storeAdressAndMap