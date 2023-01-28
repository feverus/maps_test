import storeAdressAndMap from '../../store/storeAdressAndMap'
import useAdressAndMapContent from "./adressAndMapContent.service";
import C from './adressAndMapContent.module.scss'
import MapBlock from '../mapBlock';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState, useEffect } from 'react';

export function AdressAndMapContent() {
	const [state, api] = useAdressAndMapContent() 

	return (
		<main>
			<h1>Где вы находитесь или будете принимать волонтёров</h1>
			
			<input type="text" value={state.adress} onChange={e=>api.changeAdress(e.target.value)} />

			<input type="text" value={state.nearCity} onChange={e=>api.changeNearCity(e.target.value)} />

			<MapBlock />	

			<button onClick={api.clickForward} className={C.forward}>
				Дальше
			</button>	
		</main>		
	)
}