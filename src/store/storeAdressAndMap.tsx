import {makeAutoObservable, observable, action} from 'mobx';
import {geoObject} from './storeInterfaces'

export class StoreAdressAndMap {
    adress:string = ''
    nearCity:string = ''

    dataFromApi: Array<geoObject | undefined> = [undefined, undefined]

    constructor() {
        makeAutoObservable(this, {
            adress: observable,
            nearCity: observable,
            dataFromApi: observable,
            setAdress: action
        }, { deep: true })
    }
    
    setAdress(newData:string) {
        this.adress = newData
    }
    setNearCity(newData:string) {
        this.nearCity = newData
    }
    setDataFromApi(newData:geoObject | undefined, field: number) {
        console.log(JSON.stringify(newData))
        let copy = [...this.dataFromApi]
        copy[field] = newData
        this.dataFromApi = copy
    }
}

const storeAdressAndMap = new StoreAdressAndMap()
export default storeAdressAndMap