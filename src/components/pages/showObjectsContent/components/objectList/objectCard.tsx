import C from './objectList.module.scss'
import { ObjectsItem } from '../../../../../store/storeInterfaces'

function oo(n: number): string {
	let oo = n.toString()
	if (oo.length === 1) oo = '0' + oo
	return oo
}

export const ObjectCard = (props: { object: ObjectsItem; }) => {
	const o = props.object
	const date = new Date(o.date)
	return (
		<div className={C.card}>
			<div><img src={o.img} alt={o.name} /></div>
			<div>						
				<h2>{o.name}</h2>
				<div className={C.h}>
					<h3>{o.adress}</h3><h3>{o.category}</h3><h3>{date.getFullYear() + '.' + oo(1+date.getMonth()) + '.' + oo(date.getDate())}</h3>
				</div>				
				<div className={C.inlineInfo}>
					<p className={C.star}>{o.stars}</p>
					<p className={C.fav}>{o.likes}</p>
					<p className={C.feed}>Отзывов: {o.feed}</p>
					<p className={C.gone}>Отправилось: {o.gone}</p>
				</div>
				<p className={C.description}>{o.description}</p>
			</div>
		</div>
	)
}