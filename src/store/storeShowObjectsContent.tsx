import {makeAutoObservable, observable, action, computed} from 'mobx';
import {Objects} from './storeInterfaces'
import {objects, categorys, colors} from './objects'

export class StoreShowObjectsContent {
    defaultArrayOfObjects: Objects = objects
    categorys = categorys
    colors = colors

    //фильтры
    start:number|undefined = undefined
    end:number|undefined = undefined
    selectedCategorys:string[] = []
    showPast:boolean = false
    newFirst:boolean = false

    constructor() {
        makeAutoObservable(this, {
            arrayOfObjects: computed,
            defaultArrayOfObjects: observable,
            categorys: observable,
            selectedCategorys: observable,
        }, { deep: true })
    }

    get arrayOfObjects() {
        let temp = this.defaultArrayOfObjects

        if (this.start !== undefined) {
            temp = temp.filter(
                ({date}) => (date > (this.start as number)))
        }

        if (this.end !== undefined) {
            temp = temp.filter(
                ({date}) => (date < (this.end as number)))
        }

        if (this.selectedCategorys.length > 0) {
            temp = temp.filter(
                ({category}) => (this.selectedCategorys.includes(category)===true))
        }

        if (!this.showPast) {
            const now = new Date().getTime()
            temp = temp.filter(
                ({date}) => (date > now))
        }

        if (this.newFirst) temp = temp.slice().sort((a,b) => b.date - a.date)
        else temp = temp.slice().sort((a,b) => a.date - b.date)

        return temp
    }
    

    setSelectedCategorys(newData:string[]) {
        this.selectedCategorys = newData
    }

    setStart(newData:Date|null) {
        if (newData!==null) this.start = newData.getTime()
        else this.start = undefined        
    }

    setEnd(newData:Date|null) {
        if (newData!==null) this.end = newData.getTime()
        else this.end = undefined        
    }

    setShowPast(newData:boolean) {
        this.showPast = newData
    }

    setNewFirst(newData:boolean) {
        this.newFirst = newData
    }
}

const storeShowObjectsContent = new StoreShowObjectsContent()
export default storeShowObjectsContent