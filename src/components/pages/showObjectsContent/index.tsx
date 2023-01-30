import {observer, inject} from "mobx-react";
import {ShowObjectsContent} from "./showObjectsContent";

export default
	inject('storeAdressAndMap')
	(observer(ShowObjectsContent));

export type { StateType, ApiType, UseShowObjectsContent } from './showObjectsContent.props'