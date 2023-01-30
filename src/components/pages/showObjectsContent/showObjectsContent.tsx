import useShowObjectsContent from "./showObjectsContent.service";
import C from './showObjectsContent.module.scss'
import MapBlock from './components/mapBlock';

export function ShowObjectsContent() {
	const [state, api] = useShowObjectsContent() 

	console.log(state)

	return (
		<main  className={C.fullwidth}>
			<div className={C.filter}>

			</div>
			
			<MapBlock objects={state.objects}  />

		</main>		
	)
}