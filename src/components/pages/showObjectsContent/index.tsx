import {observer, inject} from "mobx-react";
import {ShowObjectsContent} from "./showObjectsContent";

export default
	inject('storeShowObjectsContent')
	(observer(ShowObjectsContent));

export type { StateType, ApiType, UseShowObjectsContent, Objects, ObjectsItem } from './showObjectsContent.props'