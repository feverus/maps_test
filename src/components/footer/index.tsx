import {observer, inject} from "mobx-react";
import {Footer} from './footer'

export default
	inject('storeAdressAndMap')
	(observer(Footer));