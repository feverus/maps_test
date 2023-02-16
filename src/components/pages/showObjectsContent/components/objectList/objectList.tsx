import storeShowObjectsContent from "../../../../../store/storeShowObjectsContent"
import { ObjectCard } from "./objectCard"
import { Toggle, SelectPicker, Pagination } from 'rsuite';
import C from './objectList.module.scss'
import useObjectList from './objectLIst.service'

export function ObjectList() {
	const [state, api] = useObjectList()

	return (
		<>
		<div className={C.header}>
			<p>{storeShowObjectsContent.arrayOfObjects.length + ' ' + state.variantov}</p>

			<span>
				<Toggle
					size="md"
					onChange={api.handleShowPast}
				/>
				<p className={C.textShow}>Показать прошедшие</p>
			</span>

			<SelectPicker
				defaultValue={'oldFirst'}
				searchable={false}
				data={state.checkPickerData} 
				className={C.checkFirst}
				onChange={api.handleNewFirst}
				cleanable={false}
			/>

			<button className={C.expand}></button>
		</div>

		<div className={C.cardList}>
			{storeShowObjectsContent.arrayOfObjects.map((o, index) => {
				return (index >= (state.activePage-1)*10) && (index < (state.activePage*10)) && <ObjectCard object={o} key={o.id} />
				}			
			)}
		</div>

		<Pagination
			ellipsis
			last
			first
			boundaryLinks
			size="lg"
			total={state.objectCount}
			limit={10}
			activePage={state.activePage}
			onChangePage={api.setActivePage}
			maxButtons={3}
			className={C.pagination}
		/>
		</>
	)
}