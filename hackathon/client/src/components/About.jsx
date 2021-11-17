import './About.scss';

export default function About() {
    return <main>
        <h2>About Us</h2>
        <div className="container main">
            <div className="gif">
                <img src="./img/about-motion.gif" alt="gif" />
            </div>
            <div className="text">
                <p>We could write a whole story about how we started, but let's face it: our retro-futuristic burger speak for themselves. They are perfect for a night in with the family, celebrating the big game with friends and those special late night cravings.</p>
                <p>Our unique burgers are never frozen, always fresh and cooked to perfection every order. Our fries are freshly cut, and come with a perfect crisp.</p>
                <p>As we stand for transparency, all our burgers are made with the high quality ingredients and are fair produced:</p>
                <ul>
                    <li>Bread buns: carbohydrates.</li>
                    <li>Meat patty: protein, fats.</li>
                    <li>Cheese slice: calcium, vitamin D.</li>
                    <li>Lettuce: fiber, various vitamins.</li>
                    <li>Tomato: fiber, various vitamins, non-glucose sugars (such as natural sucrose).</li>
                </ul>
                <p><b>Gluten-free, peanut and nut-free!</b></p>
                <p>Allow our retro-futuristic burgers leave your hunger in the past</p>
            </div>
            <div className="picture">
                <img src="./img/about.jpg" alt="About" />
            </div>
        </div>
    </main>
}