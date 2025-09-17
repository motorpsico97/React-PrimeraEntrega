import cart from '../assets/cart.png';
import '../styles/CartWidget.css';  

export const CartWidget = () => (
    <div className='cartWidget'>
        <img src={cart} className='cartImg' alt="shopping cart" />
    </div>
);  