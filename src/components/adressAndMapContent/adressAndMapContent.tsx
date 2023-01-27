import storeAdressAndMap from '../../store/storeAdressAndMap'
import useAdressAndMapContent from "./adressAndMapContent.service";
import C from './content.module.scss'
import MapBlock from '../mapBlock';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState, useEffect } from 'react';

export function AdressAndMapContent() {
	const [state, api] = useAdressAndMapContent() 

	return (
		<>
			<input type="text" value={state.adress} onChange={e=>api.changeAdress(e.target.value)} />

			<input type="text" value={state.nearCity} onChange={e=>api.changeNearCity(e.target.value)} />

			<MapBlock />		
		</>

		
	)
}