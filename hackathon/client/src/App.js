import "./App.scss";
import React, { useEffect, useState } from "react";
import data from "./libs/menuItems.json";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderPage from "./components/OrderPage";
import CheckoutPage from "./components/CheckoutPage";
import objectSize from './libs/objectSize.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import logo from './images/logo.svg';
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";

function App() {
	const [showOrder, setShowOrder] = useState(false);
	const [showCheckout, setShowCheckout] = useState(false);
	const [showThanks, setShowThanks] = useState(false);
	const [clientName, setClientName] = useState("");
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
	const [cartItems, setCartItems] = useState(0);
	const [zero, setZero] = useState(false);
	const burgers = data.filter(item => item.type === "burger");
	const sides = data.filter(item => item.type === "side");
	const others = data.filter(item => item.type === "other");

	cart ? localStorage.setItem('cart', JSON.stringify(cart)) : setCart({});

	useEffect(() => {
		if (cart) {
			calculateItems(cart);
		}
	}, [cart, zero])

	const calculateItems = (cart) => {
		let total = 0;
        Object.entries(cart).forEach(([key, object]) => {
            total = total + parseFloat(object.quantity);
        })
        setCartItems(total);
	}

	const addToCart = (item) => {
		if (cart[item.title]) {
			// another item added
			item.quantity = cart[item.title].quantity + 1;
		} else {
			// first item added
			item.quantity = 1;
		}
		let newCart = { ...cart, [item.title]: item };
		setCart(newCart);
	};

	const removeFromCart = (item) => {
		let newCart = {};
		if (cart[item.title]) {
			if (cart[item.title].quantity > 1) {
				// more than one item
				item.quantity = cart[item.title].quantity - 1;
				newCart = { ...cart, [item.title]: item };
			} else if (cart[item.title].quantity === 1) {
				delete cart[item.title];
				newCart = cart;
				setZero(!zero);
			}
		} else {
			// no items left
			return;
		}
		setCart(newCart);
	};

	console.log(cart);
	console.log(objectSize(cart));

	return (
		<div className="App">
			<Header addToCart={addToCart} />
			{objectSize(cart) !== 0 ? <div className="position-fixed top-10 bg-light" id="shoppingBag" onClick={() => setShowOrder(true)}>
				<FontAwesomeIcon icon={faShoppingBag} />
				<div>{cartItems}</div>
			</div> : null}
			{showOrder ?
				<OrderPage setShow={setShowOrder} show={showOrder} cart={cart} removeFromCart={removeFromCart} setShowCheckout={setShowCheckout}/> :
				null
			}
			{showCheckout ?
				<CheckoutPage setShow={setShowCheckout} show={showCheckout} cart={cart} setCart={setCart} setClientName={setClientName} setShowThanks={setShowThanks}/> :
				null
			}
			{showThanks ?
				<Thanks setShow={setShowThanks} show={showThanks} clientName={clientName} /> :
				null
			}
			<Switch>
				<Route path="/menu">
					<div className="container-fluid header d-flex">
						<div className="w-50"></div>
						<div className="w-50">
							<img src={logo} alt="logo" />
							<a className="btn btn-danger m-3 color-gold bangers" href="#burgerSection">Order now!</a>
						</div>
					</div>
					<main>
						<div
							data-bs-toggle="collapse"
							href="#collapseExample"
							role="button"
							aria-expanded="false"
							aria-controls="collapseExample"
							id="burgerSection"
						>
							<div className="menuLeft container">
								<img src="./img/burger2.jpg" alt="Burgers" />
								<div>
									<h2>Burgers</h2>
									<h3>Authentic recipe</h3>
									<p>A wide selection of tasty burgers!</p>
								</div>
								<img src="./img/burger-header.jpg" alt="Burgers" />
							</div>
							<div className="menuRight"></div>
						</div>
						<div className="collapse" id="collapseExample">
							{burgers.map((item) => (
								<div>
									<MenuItem
										cart={cart}
										addToCart={addToCart}
										removeFromCart={removeFromCart}
										item={item}
									/>
								</div>
							))}
						</div>
						<div
							data-bs-toggle="collapse"
							href="#sidesCollapse"
							role="button"
							aria-expanded="false"
							aria-controls="sidesCollapse"
						>
							<div className="menuLeft container">
								<img src="./img/fries1.jpg" alt="Fries" />
								<div>
									<h2>Fries {`&`} Salads</h2>
									<h3>Authentic recipe</h3>
									<p>Fries or salads make your choice!</p>
								</div>
								<img src="./img/salad2.jpg" alt="Salad" />
							</div>
							<div className="menuRight"></div>
						</div>
						<div className="collapse" id="sidesCollapse">
							{sides.map((item) => (
								<div>
									<MenuItem
										cart={cart}
										addToCart={addToCart}
										removeFromCart={removeFromCart}
										item={item}
									/>
								</div>
							))}
						</div>
						<div
							data-bs-toggle="collapse"
							href="#othersCollapse"
							role="button"
							aria-expanded="false"
							aria-controls="othersCollapse"
						>
							<div className="menuLeft container">
								<img src="./img/cola.jpg" alt="Cola" className="max-two" />
								<div>
									<h2>Drinks {`&`} Desserts</h2>
									<h3>Authentic recipe</h3>
									<p>Quench your thirst or tame your appetite!</p>
								</div>
								<img src="./img/mshakesquare.png" alt="Dessert" className="max-two"/>
							</div>
							<div className="menuRight"></div>
						</div>
						<div className="collapse" id="othersCollapse">
							{others.map((item) => (
								<div>
									<MenuItem
										cart={cart}
										addToCart={addToCart}
										removeFromCart={removeFromCart}
										item={item}
									/>
								</div>
							))}
						</div>
					</main>
				</Route>
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path='/*'>
					<Redirect to="/menu" />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
