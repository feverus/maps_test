import {makeAutoObservable, observable, action} from 'mobx';
import {geoObject} from './storeInterfaces'
import { Objects } from '../components/pages/showObjectsContent'
import {objects, categorys} from './objects'

export class StoreShowObjectsContent {
    arrayOfObjects: Objects = objects
    defaultArrayOfObjects: Objects = objects
    categorys = categorys
    selectedCategorys:string[] = []

    constructor() {
        makeAutoObservable(this, {
            arrayOfObjects: observable,
            defaultArrayOfObjects: observable,
            categorys: observable,
            selectedCategorys: observable,
            setArrayOfObjects: action
        }, { deep: true })
    }
    
    setArrayOfObjects(newData:Objects) {
        this.arrayOfObjects = newData
    }
    setArrayOfObjectsToDefault() {
        this.arrayOfObjects = this.defaultArrayOfObjects
    }
    setSelectedCategorys(newData:string[]) {
        this.selectedCategorys = newData
    }
}

const storeShowObjectsContent = new StoreShowObjectsContent()
export default storeShowObjectsContent