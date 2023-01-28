import storeAdressAndMap from '../../store/storeAdressAndMap'
import useMain from "./main.service";
import C from './main.module.scss'
import AdressAndMapContent from '../adressAndMapContent'
import Header from '../header'
import Sidebar from '../sidebar'

export function Main() {
	return (
		<section className={C.main}>
			<Header {...{menuOptions:{
							page: 'add_offer', 
							pageLogo: 'media/menu-logo-vulkany-kamchatki.png'
						}, 
						isLoggedIn: true, 
						avatar:'media/avatar-vladislav.png'}}
			/>

			<Sidebar/>
			<AdressAndMapContent />		
		</section>		
	)
}