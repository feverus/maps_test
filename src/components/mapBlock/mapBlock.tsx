import storeAdressAndMap from '../../store/storeAdressAndMap'
import useMapBlock from "./mapBlock.service";
import C from './content.module.scss'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export function MapBlock() {
	const [state, api] = useMapBlock() 
	
	console.log(state)
	return (
		<YMaps
			query={{
				apikey: '7131662f-c959-4da1-a84e-85a3dfa69567',
			}}
		>
			<Map 
				state={state.mapState}
				modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode']}
				width= {833}
				height= {171}
				onLoad={(el) => (api.initYmaps(el))}
			>
				{state.coord.map((pos, n)=>
					<Placemark 
						geometry={pos}
						key={'point_'+n}
					/>)
				}
				
			</Map>
		</YMaps>		
	)
}