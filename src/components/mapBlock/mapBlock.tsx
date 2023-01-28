import storeAdressAndMap from '../../store/storeAdressAndMap'
import useMapBlock from "./mapBlock.service";
import C from './content.module.scss'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export function MapBlock() {
	const [state, api] = useMapBlock() 
	
	console.log(state)

	const handleGeocode = (result: any) => {
        let coordinates = result.geoObjects.get(0).geometry.getCoordinates()
		console.log('coordinates', coordinates)
    }


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
				{state.coord.map((pos, index)=>
					<Placemark 
						key={'point_' + index}
						geometry={pos}						
						options={{preset: 'islands#circleIcon', iconColor:state.PLacemarkColors[index]}}
					/>)
				}
				
			</Map>
		</YMaps>
	)
}