import C from './objectList.module.scss'
import { ObjectsItem } from '../../index'

export const ObjectCard = (props: { object: ObjectsItem; }) => {
	const o = props.object;
	return (
		<div className={C.card}>
			<img src={o.img} alt={o.name} />
			<div>
				<h2>{o.name}</h2>
				<h3>{o.adress}</h3><h3>{o.category}</h3>
				<div className={C.inlineInfo}>
					<p className={C.star}>{o.stars}</p>
					<p className={C.fav}>{o.likes}</p>
					<p className={C.feed}>Отзывов: {o.feed}</p>
					<p>Отправилось: {o.gone}</p>
				</div>
				<p className={C.description}>{o.description}</p>
			</div>
		</div>
	);
};
