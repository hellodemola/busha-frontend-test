import MenuIcon from '../../assets/hambuger.svg';
import CancelIcon from '../../assets/close.svg';

interface INav {
    isOpen: boolean,
    handleModel: () => void
}

function Nav ({handleModel, isOpen}: INav ) {
    return (
        <button onClick={handleModel} className="mobile">
        <img src={isOpen ? CancelIcon : MenuIcon} width={isOpen ? "40em" : "52em"} alt="menuIcon" />
        </button>
    )
};

export default Nav;