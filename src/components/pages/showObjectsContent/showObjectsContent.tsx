import { DatePicker, CheckPicker } from 'rsuite'
import "rsuite/dist/rsuite.css"

import C from './showObjectsContent.module.scss'
import MapBlock from './components/mapBlock'
import ObjectList from './components/objectList'
import storeShowObjectsContent from "../../../store/storeShowObjectsContent"

const handleActivityDirection = (e: string[])=>storeShowObjectsContent.setSelectedCategorys(e)

const checkPickerData = storeShowObjectsContent.categorys.map(
	item => ({ label: item, value: item })
)

export function ShowObjectsContent() {
	return (
		<main className={C.fullwidth}>
			<div className={C.filter}>
    			<DatePicker placeholder="Не задано" className={C.dataPicker} />
				<DatePicker placeholder="Не задано" className={C.dataPicker} />	
				<CheckPicker
					placeholder="Направление деятельности"
					searchable={false}
					value={storeShowObjectsContent.selectedCategorys} 
					onChange={handleActivityDirection} 
					data={checkPickerData} 
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