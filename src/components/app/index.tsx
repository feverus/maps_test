import {observer, inject} from "mobx-react";
import {App} from './app'

export default
	inject('storeAdressAndMap')
	(observer(App));