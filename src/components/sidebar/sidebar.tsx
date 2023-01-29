import C from './sidebar.module.scss'
import { ReactSVG } from 'react-svg'

const menu = [
	{svg:'local-pin', text:'Где'},
	{svg:'calendar', text:'Когда'},
	{svg:'right-user', text:'Кому'},
	{svg:'view-list', text:'Описание'},
	{svg:'list-checkbox', text:'Что делать'},
	{svg:'checklist', text:'Условия'},
	{svg:'writing-fluently', text:'Последние штрихи'},
	{svg:'back', text:'Назад'},
]

const MenuItem = (item: { svg: string; text: string; active: boolean }) => {
	return (
		<button className={item.active ? C.active: ''}>
			<ReactSVG src={"media/"+item.svg+".svg"}></ReactSVG>
			<span>{item.text}</span>
		</button>
	)
}

export function Sidebar() {

	return (
		<aside>
			<div className={C.map}>
				{menu.map((item, index) => <MenuItem svg={item.svg} text={item.text} active={(index === 0) ? true : false} key={'menuItem'+item.text} />)}
			</div>
			
			<div className={C.support}>
				<img src="media/support-kristina.png" alt="Помощник Кристина" />
				<span className={C.name}>Кристина</span>
				<span className={C.text}>Ваш персональный помощник по работе с системой</span>
				<button>Написать</button>
				<span className={C.mail}>E-mail <a href="mailto:support@goodsurfing.org">support@goodsurfing.org</a></span>
			</div>
		</aside>
	)
}