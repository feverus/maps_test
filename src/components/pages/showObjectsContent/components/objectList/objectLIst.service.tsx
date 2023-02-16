import { useState, useEffect } from 'react'
import { Objects } from '../../../../../store/storeInterfaces'
import storeShowObjectsContent from '../../../../../store/storeShowObjectsContent'
import { UseObjectList } from './objectList.props'

function declOfNum(n: number) {  
    let text_forms = ['вариант', 'варианта', 'вариантов']
    n = Math.abs(n) % 100
    let n1 = n % 10
    if (n > 10 && n < 20) { return text_forms[2] }
    if (n1 > 1 && n1 < 5) { return text_forms[1] }
    if (n1 === 1) { return text_forms[0] }
    return text_forms[2]
}

const useObjectList:UseObjectList = () => { 	
	const objectCount = storeShowObjectsContent.arrayOfObjects.length

    const checkPickerData = [{ label: 'Сначала новые', value: 'newFirst' },
    { label: 'Сначала старые', value: 'oldFirst' }]

    const [activePage, setActivePage] = useState(1)

	let variantov = declOfNum(storeShowObjectsContent.arrayOfObjects.length)

	useEffect(
		()=>setActivePage(1),
		[storeShowObjectsContent.arrayOfObjects]
	)

	const handleShowPast = ((cheked:boolean) => storeShowObjectsContent.setShowPast(cheked))

	const handleNewFirst = ((e:string|null) => 		
		storeShowObjectsContent.setNewFirst((e==='newFirst') ? true : false)
	)

    const state = {
        variantov: variantov,
        checkPickerData: checkPickerData,
        activePage: activePage,
        objectCount: objectCount,

    }

    const api = {
        handleShowPast: handleShowPast,
        handleNewFirst: handleNewFirst,
        setActivePage: setActivePage,
    }

    return (
        [state, api]
    )
}
export default useObjectList