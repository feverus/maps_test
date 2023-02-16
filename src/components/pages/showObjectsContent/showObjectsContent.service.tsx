import storeShowObjectsContent from '../../../store/storeShowObjectsContent'
import { UseShowObjectsContent } from './showObjectsContent.props'
import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react'

const useShowObjectsContent:UseShowObjectsContent = () => { 
    const [selectedCategorys, setSelectedCategorys] = useState(storeShowObjectsContent.selectedCategorys)

    const checkPickerData = storeShowObjectsContent.categorys.map(
        item => ({ label: item, value: item })
    )

    const debouncedSetSelectedCategorys = useDebouncedCallback(
        (e: string[]) => storeShowObjectsContent.setSelectedCategorys(e),    
        1000// delay in ms
    )

    const handleActivityDirection = (e: string[]) => {
        setSelectedCategorys(e)
        debouncedSetSelectedCategorys(e)
    }

    const handleStart = ((e:Date|null) => storeShowObjectsContent.setStart(e))
    
    const handleEnd = ((e:Date|null) => storeShowObjectsContent.setEnd(e))

    const state = {
        checkPickerData: checkPickerData,
        selectedCategorys: selectedCategorys,
    }

    const api = {
        handleStart: handleStart,
        handleEnd: handleEnd,
        handleActivityDirection: handleActivityDirection,
    }

    return (
        [state, api]
    )
}
export default useShowObjectsContent