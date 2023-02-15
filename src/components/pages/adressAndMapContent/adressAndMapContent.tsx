import useAdressAndMapContent from "./adressAndMapContent.service"
import C from './adressAndMapContent.module.scss'
import MapBlock from './components/mapBlock'
import Modal from 'react-modal'

Modal.setAppElement('#root');

export function AdressAndMapContent() {
	const [state, api] = useAdressAndMapContent() 

	const modalBody = (state.dataForModal!=='')? 
	<>
		<h3>Данные отправлены:</h3>				
		<div dangerouslySetInnerHTML={{__html:state.dataForModal}} />
	</>
	:
	<>
		<h3>Укажите адрес, чтобы перейти дальше</h3>
	</>

	return (
		<main>
			<h1>Где вы находитесь?</h1>

			<p>Адрес</p>
			<input type="text"
				value={state.adress}
				onChange={e=>api.changeAdress(e.target.value)} 
				id="adress" 
				className={C.adress}
			/>

			<p>Ближайший к вашему местоположению город</p>
			<input type="text" 
				value={state.nearCity} 
				onChange={e=>api.changeNearCity(e.target.value)} 
				id="nearCity" 
				className={C.nearCity}
				disabled
			/>

			<MapBlock />	

			<button onClick={api.clickForward} className={C.forward}>
				Дальше
			</button>	

			<Modal 
				isOpen={state.showModal}
				contentLabel="onRequestClose Example"
				onRequestClose={api.toggleModal}
				className={C.modal}
				overlayClassName={C.overlay}
				>
				{modalBody}

				<button onClick={api.toggleModal}>ОК</button>
				</Modal>
		</main>		

		
	)
}