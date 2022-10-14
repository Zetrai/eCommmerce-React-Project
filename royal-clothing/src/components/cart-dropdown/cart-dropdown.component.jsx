import Button from '../button/component.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-itemss'></div>
      <Button>Go to CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
