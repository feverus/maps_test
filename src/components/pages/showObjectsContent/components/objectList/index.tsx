import {observer, inject} from "mobx-react";
import {ObjectList} from './objectList'

export default
	inject('storeShowObjectsContent')
	(observer(ObjectList));

export type { StateType, ApiType, UseObjectList } from './objectList.props'