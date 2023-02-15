import ky from 'ky';
import urlApi  from './urlApi';

export const uploadApi = async (data:any): Promise<any|string> => {
	
	console.log('Отправка данных', data)
/*
	try {
		const json:any = await ky.post(urlApi+"", {
			json: data
		}).json()
		return json
	} catch (error) {
        return (error as Error).message
    }
*/
}