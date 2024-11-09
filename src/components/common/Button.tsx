import { IButton } from "../../interface/IButton.interface";

function Button ({children, handleOnClick}: IButton) {
 return (
    <button className="brand-button" onClick={handleOnClick}>
        {children}
    </button>
 )
};

export default Button;