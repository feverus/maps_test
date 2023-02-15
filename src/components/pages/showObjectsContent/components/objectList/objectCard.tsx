import C from './objectList.module.scss'
import { ObjectsItem } from '../../../../../store/storeInterfaces'

export const ObjectCard = (props: { object: ObjectsItem; }) => {
	const o = props.object
	const date = new Date(o.date)
	return (
		<div className={C.card}>
			<img src={o.img} alt={o.name} />
			<div>						
				<h2>{o.name}</h2>{date.getFullYear() + '.' + Number(1+date.getMonth()) + '.' + date.getDate()}
				<div className={C.h}>
					<h3>{o.adress}</h3><h3>{o.category}</h3>
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
	);
};
