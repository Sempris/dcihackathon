import { useState, useEffect } from "react";
import './CheckoutPage.scss';
import credit from '../images/credit.jpg'

export default function CheckoutPage(props) {
    const handleClose = () => props.setShow(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);
    const cart = props.cart;

    useEffect(() => {
        let total = 0;
        Object.entries(cart).forEach(([key, object]) => {
            total = total + parseFloat(object.price) * parseFloat(object.quantity);
        })
        setOrderTotal(total);
    }, [cart]);

    function placeOrder(e) {
        e.preventDefault();
        props.setClientName(firstName);
        console.log(lastName, email, address, phone, message, paymentMethod);
        handleClose();
        localStorage.clear();
        props.setCart({});
        props.setShowThanks(true);
    }

    return <div className="position-fixed bg-light" id="checkout-modal">
        <div className="d-flex justify-content-end">
            <h2 className="flex-grow-1">Checkout From</h2>
            <button className="btn btn-warning indifferenceFontClose" onClick={handleClose}>
                X
            </button>
        </div>
        <form onSubmit={placeOrder}>
            <div className="names">
                <div className="formItem">
                    <label className="d-block" for="fName">First name:</label>
                    <input
                        type="text" id="fName" placeholder="first name" minLength={3} required
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="formItem">
                    <label className="d-block" for="lName">Last name:</label>
                    <input
                        type="text" id="lName" placeholder="last name" minLength={3} required
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div className="contacts">
                <div className="formItem">
                    <label className="d-block" for="email">Email:</label>
                    <input
                        type="email" id="email" placeholder="email@example.com" required
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="formItem">
                    <label className="d-block" for="phone">Phone Number:</label>
                    <input type="tel" id="phone" required minLength={8}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
            </div>
            <div className="formItem">
                <label className="d-block" for="address">Address:</label>
                <input type="text" id="address" required minLength={5}
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            <div className="order-view">
                <h3>Overview:</h3>
                <ul>
                    {Object.entries(cart).map(([key, object]) => (
                        <li>
                            <span className="left"> {object.title} </span>
                            <span className="middle"> {object.quantity} </span>
                            <span className="right">
                                € {(parseFloat(object.price) * parseFloat(object.quantity)).toFixed(2)}
                            </span>
                        </li>
                    )
                    )}
                </ul>
                <div className="d-flex justify-content-around w-80 total">
                    <div className="left"> Order Total</div>
                    <div className="right">€ {orderTotal.toFixed(2)}</div>
                </div>
            </div>
            <div className="formItem">
                <label className="d-block" for="message">Special requests:</label>
                <textarea
                    cols={60} rows={10} minLength={10}
                    onChange={e => setMessage(e.target.value)}
                />
            </div>
            <h3>Payment Method:</h3>
            <div className="payments">
                <div>
                    <label htmlFor="delivery">Pay on delivery</label>
                    <input
                        type="radio" name="action" id="delivery" value={0}
                        onChange={e => setPaymentMethod(e.target.value)}
                    />
                </div>
                <div>
                    <label className="grey" htmlFor="credit">Credit Card <img className="avatar" src={credit} alt="creditCard" /></label>
                    <input
                        type="radio" name="action" id="credit" value={1} disabled
                        onChange={e => setPaymentMethod(e.target.value)}
                    />
                </div>
                <div>
                    <label className="grey" htmlFor="paypal">Pay with <span className="pay">Pay</span><span className="pal">Pal</span></label>
                    <input
                        type="radio" name="action" id="paypal" value={2} disabled
                        onChange={e => setPaymentMethod(e.target.value)}
                    />
                </div>
            </div>
            <button className="btn btn-danger" type="submit">
                Place Order
            </button>
        </form>   
    </div>

}