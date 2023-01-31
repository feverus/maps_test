import {observer, inject} from "mobx-react";
import {MapBlock} from './mapBlock'

export default
	inject('storeShowObjectsContent')
	(observer(MapBlock));

export type { StateType, ApiType, UseMapBlock } from './mapBlock.props'