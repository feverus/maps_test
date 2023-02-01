import { Objects } from '../../../../../store/storeInterfaces'

import useMapBlock from "./mapBlock.service"
import C from './mapBlock.module.scss'
import './mapBlockStatic.scss'

import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';

export function MapBlock(props: {objects:Objects}) {
	const [state, api] = useMapBlock(props.objects) 

	console.log(state)

	const objects = state.arrayOfObjects

	return (
		<YMaps
			query={{
				apikey: '7131662f-c959-4da1-a84e-85a3dfa69567',
			}}
		>
			<Map 
				state={state.mapState}
				modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode', 'layout.PieChart', 'geoObject.addon.balloon', 'geoObject.addon.hint']}
				onLoad={(el) => (api.initYmaps(el))}
				className={C.map}
			>
					<Clusterer
						options={{
						clusterIconLayout: 'default#pieChart',
						groupByCoordinates: false,
						iconPieChartRadius: 18,
						iconPieChartCoreRadius: 14,
						iconPieChartCoreFillStyle: '#ffffff',
						iconPieChartStrokeStyle: '#ffffff10',
						iconPieChartStrokeWidth: 1,
						iconPieChartCaptionMaxWidth: 20
						}}
					>
						{objects.map(({coord, color, img, name}, index) =>
							coord && <Placemark 
								key={'point_' + index}
								geometry={coord}					
								options={{
									preset: 'islands#circleIcon',
									iconColor:color,
									hideIconOnBalloonOpen: false,
								}}
								properties={{
									iconContent: '',
									hintContent: '',
									balloonContent: `<div id="balloonContent" class="balloonContent">
														<img src="${img}" alt="${name}" />
														<p>${name}</p>
													</div>`,
								}}
							/>)
						}						
					</Clusterer>				
			</Map>						
		</YMaps>
	)
}