import storeShowObjectsContent from "../../../../../store/storeShowObjectsContent"
import { ObjectCard } from "./objectCard"
import { Toggle, SelectPicker, Pagination } from 'rsuite';
import C from './objectList.module.scss'
import { useState, useEffect } from "react";

function declOfNum(n: number) {  
	let text_forms = ['вариант', 'варианта', 'вариантов']
    n = Math.abs(n) % 100
    let n1 = n % 10
    if (n > 10 && n < 20) { return text_forms[2] }
    if (n1 > 1 && n1 < 5) { return text_forms[1] }
    if (n1 === 1) { return text_forms[0] }
    return text_forms[2]
}

export function ObjectList() {
	
	const objectCount = storeShowObjectsContent.arrayOfObjects.length
	let variantov = declOfNum(storeShowObjectsContent.arrayOfObjects.length)

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

			<span>
				<Toggle  size="md"/>
				<p className={C.textShow}>Показать прошедшие</p>
			</span>

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