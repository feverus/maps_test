import { DatePicker, CheckPicker } from 'rsuite'
import "rsuite/dist/rsuite.css"

import C from './showObjectsContent.module.scss'
import MapBlock from './components/mapBlock'
import ObjectList from './components/objectList'
import storeShowObjectsContent from "../../../store/storeShowObjectsContent"
import useShowObjectsContent from './showObjectsContent.service'


export function ShowObjectsContent() {
	const [state, api] = useShowObjectsContent()

	return (
		<main className={C.fullwidth}>
			<div className={C.filter}>
    			<DatePicker
					placeholder="Не задано"
					className={C.dataPicker}
					onChange={api.handleStart}
				/>
				<DatePicker 
					placeholder="Не задано" 
					className={C.dataPicker} 
					onChange={api.handleEnd}
				/>	
				<CheckPicker
					placeholder="Направление деятельности"
					searchable={false}
					value={state.selectedCategorys} 
					onChange={api.handleActivityDirection} 
					data={state.checkPickerData} 
					
					className={C.activityDirection}
				/>
				<CheckPicker
					placeholder="Срок участия"
					searchable={false}
					value={[]} 
					data={[]} 
					className={C.duration}
				/>
				<CheckPicker
					placeholder="Доп. фильтры"
					searchable={false}
					value={[]} 
					data={[]} 
					className={C.addFilters}
				/>
			</div>

			<div className={C.objectList}>
				<ObjectList />
			</div>
			
			<MapBlock objects={storeShowObjectsContent.arrayOfObjects}  />

		</main>		
	)
}