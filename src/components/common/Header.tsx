import Logo from '../../assets/logo.svg';
import Avatar from './Avatar';

function Header () {
 return (
    <header>
        <div className="wrapper">
          <div className="flex">
          <img src={Logo} alt="logo" />
           <Avatar />
          </div>
        </div>
      </header>
 )
}

export default Header