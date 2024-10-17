import './App.css';
import logo from '../src/images/Logo.svg'
import search from '../src/images/Search.svg'
import cart from '../src/images/Cart.svg'


function App() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo"></img>
        <p>Organik</p>
        <ul className='tab'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <div className="block_input">
          <input type="text" />
          <img src={search} alt='#' />
        </div>
        <div className="cart" >
        <img src={cart} alt='#' />
        <p>cart(0)</p>
      </div>
    </div >
  </>
  );
}

export default App;
