import { useState } from 'react'
import storeShowObjectsContent from '../../../store/storeShowObjectsContent'
import { UseShowObjectsContent } from './showObjectsContent.props'
import { useDebouncedCallback } from 'use-debounce';
import {uploadApi} from '../../../api/uploadApi'

const useShowObjectsContent:UseShowObjectsContent = () => { 
    const state = {
    }

    const api = {
    }

    return (
        [state, api]
    )
}
export default useShowObjectsContent