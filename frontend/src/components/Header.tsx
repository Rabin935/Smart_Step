import '../assets/style.css';

const Header = () => {
    return (
        <div className="container">
        <header className='header'>
            <h1 className='logoname'><a href="#">Smart <span>Step</span></a></h1>
            <nav className='nav'>
                <a href="#home">Home</a>
                <a href="#product">Our Product</a>
                <a href="#team">Our Team</a>
                <a href="#review">Review</a>
            </nav>

            <a href="#" className='buy_btn'>Buy now</a>
        </header>
        </div>
    )
}

export default Header;