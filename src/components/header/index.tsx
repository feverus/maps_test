import {observer, inject} from "mobx-react";
import {Header} from './header'

export { CustomSelect } from "./components/customSelect"

export default
	inject('storeAdressAndMap')
	(observer(Header));

export type { Props } from './header.props'