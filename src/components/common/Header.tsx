import Logo from '../../assets/logo.svg';
import useModel from '../../hooks/useModel';
import { menuData } from '../../utlis/menuData';
import Avatar from './Avatar';
import Nav from './Nav';

function Header () {
  const { handleModel, isOpen } = useModel();
 return (
    <header>
        <div className="wrapper">
          <div className="flex">
          <img src={Logo} alt="logo" />
           <div className='desktop'>
           <Avatar />
           </div>
           <Nav handleModel={handleModel} isOpen={isOpen} />
          </div>
        </div>
        <div>
        {isOpen && (
        <div className='mobile wrapper'>
            {menuData.map((each, index) => (
             <div key={index}  className="menu full">{each}</div>
            ))}
            <div style={{padding: '0 1em'}}>
            <Avatar />
            </div>
        </div>
        )}
        </div>
      </header>
 )
}

export default Header