import useAdressAndMapContent from "./adressAndMapContent.service";
import C from './adressAndMapContent.module.scss'
import MapBlock from './components/mapBlock';

export function AdressAndMapContent() {
	const [state, api] = useAdressAndMapContent() 

	return (
		<main>
			<h1>Где вы находитесь или будете принимать волонтёров</h1>

			<p>Адрес</p>
			<input type="text"
				value={state.adress}
				onChange={e=>api.changeAdress(e.target.value)} 
				id="adress" 
				className={C.adress}
			/>

			<p>Ближайший к месту город</p>
			<input type="text" 
				value={state.nearCity} 
				onChange={e=>api.changeNearCity(e.target.value)} 
				id="nearCity" 
				className={C.nearCity}
			/>

			<MapBlock />	

			<button onClick={api.clickForward} className={C.forward}>
				Дальше
			</button>	
		</main>		
	)
}