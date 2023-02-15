import {Link} from 'react-router-dom'

import C from './header.module.scss'
import { Props } from './header.props'
import logoImage from './media/logo-image.png'
import { ReactSVG } from 'react-svg'
import { CustomSelect } from './components/customSelect'

export function Header(props:Props) {

	
	return (
		<header>
            <div className={C.logo}>
				<Link to={'/maps/'}><img src={logoImage} alt="Logo" className={C.image}/></Link>
				<CustomSelect dark={false} />
            </div>

            <nav className={C.menu}>
				{props.menuOptions.page==='add_offer' &&
				<p>
					<img src={props.menuOptions.pageLogo} alt="Лого заголовка страницы" />
					Природный парк "Вулканы камчатки"
				</p>
				}                
				{props.menuOptions.page==='offers' &&
				<p>
					<button className={C.allOrder}>Все предложения <ReactSVG src='media/searchGlass.svg' /></button>
					<button className={C.society}>Сообщество
					<ReactSVG src='media/rectangle.svg' /></button>
					<button className={C.aboutProject}>О проекте<ReactSVG src='media/rectangle.svg' /></button>
				</p>
				}                
            </nav>

			<div className={C.accountInfo}>
            {props.isLoggedIn ? (
                <>
				<ul>
					<li key={'nav2'}>
						<button className={C.fav} />
					</li>
					<li key={'nav3'}>
						<button className={C.message} />
					</li>
				</ul>
				<span>Владислав</span>	
				<img src={props.avatar} alt="Аватар пользователя"  className={C.avatar}/>				
				<button className={C.arrowDown}  />
				</>
            ) : (
				<>
                    <button className={C.auth}>Вход</button>
                    <button className={C.reg}>Регистрация</button>
				</>
            )}
			</div>
        </header>	
	)
}


