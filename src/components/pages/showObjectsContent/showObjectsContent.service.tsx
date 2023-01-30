import { useState } from 'react'
import storeAdressAndMap from '../../../store/storeAdressAndMap'
import { UseShowObjectsContent } from './showObjectsContent.props'
import { useDebouncedCallback } from 'use-debounce';
import {uploadApi} from '../../../api/uploadApi'

const useShowObjectsContent:UseShowObjectsContent = () => { 
    const objects = [
        {id: '',
         name: '',
         adress: '',
         coord: [59.938955, 30.315644],
         category: '',
         
        }
    ]


    const state = {

    }

    const api = {

    }

    return (
        [state, api]
    )
}
export default useShowObjectsContent