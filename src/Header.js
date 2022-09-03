import logo from './logo.svg';
import './App.css';

function Header() {
    return (
        <div className="App-header">
            <div className="Logo-content">
                <a href='/'><img src={logo} className="App-logo" alt="logo" /></a>
            </div>
            <div className="Links-content">
                <a href='/'>Inicio</a>
                <a>Servicios</a>
                <a>Contactame</a>
            </div>
            <button className='Btn'><i class="fa-sharp fa-solid fa-bars"></i></button>
        </div>
    )
}

export default Header;