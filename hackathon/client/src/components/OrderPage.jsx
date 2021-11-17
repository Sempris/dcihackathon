import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import objectSize from '../libs/objectSize';
import './OrderPage.scss';

export default function OrderPage(props) {
    const handleClose = () => props.setShow(false);
    const [orderTotal, setOrderTotal] = useState(0);
    const cart = props.cart;

    useEffect(() => {
        let total = 0;
        Object.entries(cart).forEach(([key, object]) => {
            total = total + parseFloat(object.price) * parseFloat(object.quantity);
        })
        setOrderTotal(total);
    }, [cart]);

    function clearCart(item) {
        let count = item.quantity;
        do {
            props.removeFromCart(item);
            count = count - 1;
        }
        while (count > 0);
        let total = 0;
        Object.entries(cart).forEach(([key, object]) => {
            total = total + parseFloat(object.price) * parseFloat(object.quantity);
        })
        setOrderTotal(total);
    }

    return (
        <div className="order position-fixed bg-light">
            <h1>Your choice:</h1>
            {objectSize(cart) !== 0 ? (<>
                <ul>
                    {Object.entries(cart).map(([key, object]) => (
                        <li>
                            <div className="insideLi">
                                <div className="leftSide">
                                    <span className="left"> {object.title} </span>
                                    <span className="middle"> {object.quantity} </span>
                                </div>
                                <div className="rightSide">
                                    <span className="right">
                                        € {(parseFloat(object.price) * parseFloat(object.quantity)).toFixed(2)}
                                    </span>
                                    <button className="iconTrash btn btn-danger" onClick={() => clearCart(object)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </div>
                        </li>
                    )
                    )}
                </ul>
                <div className="d-flex justify-content-around w-80 orderTotal">
                        <div className="left"> Order Total</div>
                        <div className="right">€ {orderTotal.toFixed(2)}</div>
                </div></>
            ) : (<div>There are no items in your cart.</div>)}
            <div className="buttons">
                <button className="btn btn-danger" onClick={handleClose}>
                    Continue Shopping
                </button>
                <button className="btn btn-danger" disabled={objectSize(cart) === 0} onClick={() => {
                    handleClose()
                    props.setShowCheckout(true);
                }}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
