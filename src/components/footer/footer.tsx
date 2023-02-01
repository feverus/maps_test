import C from './footer.module.scss'
import logo from './media/logo.svg'
import vk from './media/vk.svg'
import telegram from './media/telegram.svg'
import insta from './media/insta.svg'
import fb from './media/fb.svg'
import { CustomSelect } from '../header'

export function Footer() {
	return (
		<footer>
			<section className={C.all}>
				<div>
					<img src={logo} alt="Logo" className={C.image}/>
					<CustomSelect dark={true} />
					<div className={C.social}>
						<img src={insta} alt="insta" /><img src={telegram} alt={telegram} /><img src={vk} alt="vk" /><img src={fb} alt="fb" />
					</div>
					<div className={C.link}>
						<button>Напишите нам</button>
					</div>					
				</div>
				<nav>
					<div>
						<h2>Сообщество</h2>
						<ul>
							<li><button>Блог</button></li>
							<li><button>Видео</button></li>
							<li><button>Эксперы</button></li>
							<li><button>Амбассадоры</button></li>
							<li><button>Курсы</button></li>
							<li><button>Клубы</button></li>
							<li><button>Журнал</button></li>
						</ul>
					</div>
					<div>
						<h2>О проекте</h2>
						<ul>
							<li><button>О НКО</button></li>
							<li><button>Наша команда</button></li>
							<li><button>Как это работает</button></li>
							<li><button>Правила</button></li>
							<li><button>Политика конфиденциальности</button></li>
							<li><button>Новости</button></li>
						</ul>
					</div>
					<div>
						<h2>Для организаторов</h2>
						<ul>
							<li><button>Стать хостом</button></li>
							<li><button>Как это работает</button></li>
							<li><button>Правила</button></li>
							<li><button>Курсы для организаторов</button></li>
						</ul>
					</div>
				</nav>
			</section>
			<section className={C.copyright}>
				© GoodSurfing, 2017-2021
			</section>
        </footer>	
	)
}


