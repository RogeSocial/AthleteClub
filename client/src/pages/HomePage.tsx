import '../styling/home.css';

function HomePage() {
    return (
        <div className="center">
            <div className="header">
                <h1>Sign up for access</h1>
            </div>
            <div className="input-container">
                <input type="email" placeholder="Enter your email"/>
                <button>Join</button>
            </div>
        </div>
    );
}

export default HomePage;