import C from './app.module.scss'
import AdressAndMapContent from '../pages/adressAndMapContent'
import ShowObjectsContent from '../pages/showObjectsContent'
import Header from '../header'
import Sidebar from '../sidebar'
import {Link} from 'react-router-dom'

export function App(props: {page:string}) {
	if (props.page==='/') return (
		<section className={C.main}>
			<div className={C.testNavigation}>
				<Link to={'adress-and-map'}>1) Страница с адресом и картой</Link>
				<Link to={'show-objects-on-map'}>2) Отображение объектов на карте</Link>
			</div>
		</section>	
	)

	return (
		<section className={C.main}>
			<Header {...{menuOptions:{
							page: props.page, 
							pageLogo: 'media/menu-logo-vulkany-kamchatki.png'
						}, 
						isLoggedIn: true, 
						avatar:'media/avatar-vladislav.png'}}
			/>
			
			{props.page==='add_offer' && <><Sidebar/><AdressAndMapContent /></>}

			{props.page==='offers' && <><ShowObjectsContent /></>}

		</section>		
	)
}