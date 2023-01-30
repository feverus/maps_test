import { useState } from 'react'
import storeAdressAndMap from '../../../store/storeAdressAndMap'
import { UseShowObjectsContent } from './showObjectsContent.props'
import { useDebouncedCallback } from 'use-debounce';
import {uploadApi} from '../../../api/uploadApi'
import objects from './objects'

const useShowObjectsContent:UseShowObjectsContent = () => { 
    const state = {
        objects: objects
    }

    const api = {

    }

    return (
        [state, api]
    )
}
export default useShowObjectsContent