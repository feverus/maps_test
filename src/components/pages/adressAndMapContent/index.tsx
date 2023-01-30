import {observer, inject} from "mobx-react";
import {AdressAndMapContent} from "./adressAndMapContent";

export default
	inject('storeAdressAndMap')
	(observer(AdressAndMapContent));

export type { StateType, ApiType, UseAdressAndMapContent } from './adressAndMapContent.props'