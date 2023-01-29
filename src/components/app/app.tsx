import C from './app.module.scss'
import AdressAndMapContent from '../adressAndMapContent'
import Header from '../header'
import Sidebar from '../sidebar'

export function App() {
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