import {Link} from 'react-router-dom'

import C from './app.module.scss'
import AdressAndMapContent from '../pages/adressAndMapContent'
import ShowObjectsContent from '../pages/showObjectsContent'
import Header from '../header'
import Sidebar from '../sidebar'
import { Footer } from '../footer/footer'

export function App(props: {page:string}) {
	
	if (props.page==='/') return (
		<section className={C.main + ' ' + C.blueBackground}>
			<div className={C.testNavigation}>
				<Link to={'/maps/adress-and-map'}>1) Страница с адресом и картой</Link>
				<Link to={'/maps/show-objects-on-map'}>2) Отображение объектов на карте</Link>
			</div>
		</section>	
	)

	return (
		<section className={C.main}>
			<Header {...{menuOptions:{
							page: props.page, 
							pageLogo: 'media/menu-logo-vulkany-kamchatki.png'
						}, 
						isLoggedIn: (props.page==='add_offer'), 
						avatar:'media/avatar-vladislav.png'}}
			/>

			{props.page==='add_offer' && 
			<div className={C.withSidebar}>
				<Sidebar/><AdressAndMapContent />
			</div>}

			{props.page==='offers' && 
				<ShowObjectsContent />
			}

			<Footer />	

		</section>		
	)
}