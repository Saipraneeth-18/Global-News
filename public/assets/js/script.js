// JavaScript to insert header and footer
const headerContent = `
<header>
    <h1>The Fury Of Global News</h1>
    <p>We Serve The Correct And Latest News Up To Date!</p>
</header>
<nav>
    <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./aboutus.html">About Us</a></li>
        <li><a href="./services.html">Services</a></li>
        <li><a href="./contact.html">Contact</a></li>
        <li><a href="./Register.html">Register</a></li>
    </ul>
</nav>
`;

const footerContent = `
<footer>
    <div class="footer-container">
        <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./aboutus.html">About Us</a></li>
                <li><a href="./services.html">Services</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li><a href="./Register.html">Register</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="footer-column newsletter">
            <h3>Login to Our Newsletter</h3>
            <p>Get the latest News and Stay informed up to date!</p>
            <form action="/login.html" method="post">
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
    <div class="copyright">
        <p>&copy; 2024 News Aggregator. All rights reserved.</p>
    </div>
</footer>
`;

document.getElementById('header').innerHTML = headerContent;
document.getElementById('footer').innerHTML = footerContent;
