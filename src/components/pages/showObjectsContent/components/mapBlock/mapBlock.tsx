import storeAdressAndMap from '../../../../../store/storeAdressAndMap'
import useMapBlock from "./mapBlock.service";
import C from './mapBlock.module.scss'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export function MapBlock() {
	const [state, api] = useMapBlock() 

	return (
		<YMaps
			query={{
				apikey: '7131662f-c959-4da1-a84e-85a3dfa69567',
			}}
		>
			<Map 
				state={state.mapState}
				modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode']}
				onLoad={(el) => (api.initYmaps(el))}
				className={C.map}
			>
				{state.coord.map((pos, index)=>
					pos && <Placemark 
						key={'point_' + index}
						geometry={pos}						
						options={{preset: 'islands#circleIcon', iconColor:state.PLacemarkColors[index]}}
					/>)
				}
				
			</Map>
		</YMaps>
	)
}