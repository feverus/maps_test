import storeShowObjectsContent from "../../../../../store/storeShowObjectsContent";
import useObjectList from "./objectList.service"
import { ObjectCard } from "./objectCard"
import { Toggle, SelectPicker, Pagination } from 'rsuite';
import C from './objectList.module.scss'
import { useState, useEffect } from "react";

export function ObjectList() {
	const [state, api] = useObjectList()

	console.log(state)

	let variantov = 'вариантов'
	const objectCount = storeShowObjectsContent.arrayOfObjects.length
	const len = objectCount.toString()
	const s = len[len.length-1]

	if (s==='1') variantov = 'вариант'
	if ((s==='2') || (s==='3') || (s==='4')) variantov = 'варианта'

	const checkPickerData = [{ label: 'Сначала новые', value: 'newFirst' },
		{ label: 'Сначала старые', value: 'oldFirst' }]

	const [activePage, setActivePage] = useState(1)

	useEffect(
		()=>setActivePage(1),
		[storeShowObjectsContent.arrayOfObjects]
	)

	return (
		<>
		<div className={C.header}>
			<p>{storeShowObjectsContent.arrayOfObjects.length + ' ' + variantov}</p>
			<Toggle  size="md"/>
			<p className={C.textShow}>Показать прошедшие</p>
			<SelectPicker
				value={'newFirst'}
				searchable={false}
				data={checkPickerData} 
				className={C.checkFirst}
			/>
			<button className={C.expand}></button>
		</div>

		<div className={C.cardList}>
			{storeShowObjectsContent.arrayOfObjects.map((o, index) => {
				return (index >= (activePage-1)*10) && (index < (activePage*10)) && <ObjectCard object={o} key={o.id} />
				}			
			)}
		</div>

		<Pagination
			ellipsis
			last
			first
			boundaryLinks
			size="lg"
			total={objectCount}
			limit={10}
			activePage={activePage}
			onChangePage={setActivePage}
			maxButtons={3}
			className={C.pagination}
		/>
		</>
	)
}