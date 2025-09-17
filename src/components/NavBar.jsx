import logo from '../assets/logo.png';
import '../styles/NavBar.css';
import { CartWidget } from './CartWidget';

export const NavBar = () => (
    <div className='navBar'>
        <a href="/">
            <img src={logo} className='logoNav' alt="shoes store logo" />
        </a>
        <ul className='ulNav'>
            <li><a href="/">Inicio</a></li>
            <li><a href="/src/pages/hombres.html">Hombres</a></li>
            <li><a href="/src/pages/mujeres.html">Mujeres</a></li>
            <li><a href="/src/pages/contacto.html">Contacto</a></li>
        </ul>
        <CartWidget />
    </div>
);