import {observer, inject} from "mobx-react";
import {Header} from './header'

export default
	inject('storeAdressAndMap')
	(observer(Header));

export type { Props } from './header.props'