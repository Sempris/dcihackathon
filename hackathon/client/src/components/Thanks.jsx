import { NavLink } from "react-router-dom";
import './Thanks.scss';

export default function Thanks (props) {

    return <div className="position-fixed bg-light" id="thanks-modal"><div id="thankyouWrapper">
        <h2>Thank You {props.clientName}!</h2>
        <p>Your order is being prepared and will be on your way soon!</p>
        <p>
            You have an exclusive <span className="bold">15% off</span> on your next order in any of our retro-futuristic burgers.
        </p>
        <NavLink to="menu" className="btn btn-danger" id="homepageBtn" onClick={() => props.setShow(false)}>
            Back to Homepage
        </NavLink>
    </div></div>
}