import '../styling/home.css';

function HomePage() {
    return (
        <div className="center">
            <div className="header">
                <h1>SIGN UP FOR ACCESS</h1>
            </div>
            <div className="input-container">
                <input type="email" placeholder="Enter your email"/>
                <button>JOIN</button>
            </div>
        </div>
    );
}

export default HomePage;