import {observer, inject} from "mobx-react";
import {Sidebar} from './sidebar'

export default
	inject('storeAdressAndMap')
	(observer(Sidebar));