export default function Footer () {
    return <>
    <footer className="container">
    <div className="company">
        <h2>Company</h2>
        <ul>
            <li><span className="link">Contact Us</span></li>
            <li><span className="link">About Us</span></li>
            <li><span className="link">FAQ</span></li>
        </ul>
    </div>
    <div className="legal">
        <h2>Legal</h2>
        <ul>
            <li><span className="link">Imprint</span></li>
            <li><span className="link">Privacy Policy</span></li>
            <li><span className="link">Cookie Policy</span></li>
        </ul>
    </div>
    <div className="responsibility">
        <h2>Responsibility</h2>
        <ul>
            <li><span className="link">COVID-19</span></li>
            <li><span className="link">Nutrition Facts</span></li>
        </ul>
    </div>
</footer>
<div className="social container">
    <img src="./img/youtube.jpg" alt="Youtube" />
    <img src="./img/facebook.png" alt="Facebook" />
    <img src="./img/instagram.png" alt="Instagram" />
    <img src="./img/linked.jpg" alt="LinkedIn" />
    <img src="./img/pinterest.png" alt="Pinterest" />
</div>
</>
}