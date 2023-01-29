import C from './header.module.scss'
import { Props } from './header.props'
import logoImage from './media/logo-image.svg'
import logoText from './media/logo-text.svg'

import { CustomSelect } from './components/customSelect'

export function Header(props:Props) {


	return (
		<header>
            <div className={C.logo}>
                <img src={logoImage} alt="Logo" className={C.image}/>
                <img src={logoText} alt="Logo text" className={C.text}/>
				<CustomSelect />
            </div>

            <nav className={C.menu}>
				{props.menuOptions.page==='add_offer' &&
				<p>
					<img src={props.menuOptions.pageLogo} alt="Лого заголовка страницы" />
					Природный парк "Вулканы камчатки"
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
                    <button>Вход</button>
                    <button>Регистрация</button>
				</>
            )}
			</div>
        </header>	
	)
}


