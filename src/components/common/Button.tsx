import { IButton } from "../../interface/IButton.interface";

function Button ({children, handleOnClick, isDisable = false, isLoading = false,}: IButton) {
 return (
    <button type='button' disabled={isDisable}  className="brand-button" onClick={handleOnClick}>
        {isLoading? 'Loading...' : children}
    </button>
 )
};

export default Button;