import './Header.scss';
import logo from '../../assets/img/poll_ninja_logo.svg';

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
    </header>
  );
}

export default Header;
