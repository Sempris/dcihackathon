import "./MenuItem.scss";

export default function MenuItem(props) {
	return <>
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-4 picture">
					{props.item.likes ? <div className="heartContainer"><div>{props.item.likes}</div></div> : null}
					<img className="w-100" src={`${props.item.img}`} alt={props.item.title} />
				</div>
				<div className="col-12 col-md-6 description">
					<h4>{props.item.title}</h4>
					<p>{props.item.subtitle ? props.item.subtitle + ' / ' : null} € {props.item.price}</p>
					<p className="desc">{props.item.description}</p>
				</div>
				<div className="col-12 col-md-2 buttons mx-0 my-2">
					<button className="btn minus-mobile" onClick={(e) => props.removeFromCart(props.item)}>&ndash;</button>
					<div className="m-0">
						<button className="btn plus" onClick={(e) => props.addToCart(props.item)}>+</button>
						<button className="btn minus" onClick={(e) => props.removeFromCart(props.item)}>&ndash;</button>
					</div>
					<div className="counter m-0">{props.cart[props.item.title] ? props.cart[props.item.title].quantity : 0}</div>
					<button className="btn plus-mobile" onClick={(e) => props.addToCart(props.item)}>+</button>
				</div>
			</div>
		</div>
	</>
}