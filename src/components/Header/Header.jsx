import './Header.scss';
import logo from '../../asset/logo.png';

function Header() {
  return (
    <nav className='Header'>
        <h1>Beers On Tap</h1>
        <img src={logo} alt='logo' />
        <div className='flexABV'>
            <h3 className='ABV'>ABV</h3>
            <p>Alcohol by Volume</p>
        </div>
        <div className='flexTamanhos'>
            <h2>Tamanhos</h2>
            <p>300ml / 500ml</p>
        </div>
    </nav>
  )
}

export default Header