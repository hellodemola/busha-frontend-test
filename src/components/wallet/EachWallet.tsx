import ArrowRight from '../../assets/arrowRight.svg';
import NairaIcon from '../../assets/icons/naira.svg';
import { IWallet } from '../../interface/IWallet.interface';
function EachWallet () {
    return (
        <div className="each-wallet">
          <div className="heading">
            <div className='flex-2'>
            <div  className='avatar-2' >
            <img src={NairaIcon} alt="logo" />
              </div>
            <h4>
            Naira
            </h4>
            </div>
          </div>
            <p>N 105,160,076.51</p>
            <div className="body">
              
            </div>
            <div className="footer">
              <div className="circle" >
              <img src={ArrowRight} alt="arrowRight" />
              </div>
            </div>
          </div>
    )
};

export default EachWallet;