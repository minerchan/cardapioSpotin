import './Header.scss';
import logo from '../../asset/logo.png';

function Header() {
  return (
    <nav className='Header'>
        <h1 className='BeersOnTap'>Beers On Tap</h1>
        <img className='logo' src={logo} alt='logo' />
        <div className='flexTamanhos'>
            <h2>Tamanhos</h2>
            <p>300ml / 500ml</p>
        </div>
    </nav>
  )
}

export default Header