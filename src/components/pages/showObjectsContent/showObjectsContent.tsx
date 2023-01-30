import useShowObjectsContent from "./showObjectsContent.service";
import C from './adressAndMapContent.module.scss'
import MapBlock from './components/mapBlock';

export function ShowObjectsContent() {
	const [state, api] = useShowObjectsContent() 

	return (
		<main>

			<MapBlock />

		</main>		
	)
}