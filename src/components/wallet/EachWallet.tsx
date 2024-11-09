import ArrowRight from '../../assets/arrowRight.svg';
import { IWallet } from '../../interface/IWallet.interface';
import Wallet from '../../utlis/wallet.class';
function EachWallet ({account}: {account: IWallet}) {
  const data = new Wallet(account);
    return (
        <div className="each-wallet">
          <div className="heading">
            <div className='flex-2'>
            <div style={{ backgroundColor: data?.custom?.color }}  className='avatar-2' >
            <img src={data?.custom?.icon || account?.imgURL} alt="logo" />
              </div>
            <h4>
            {account?.name}
            </h4>
            </div>
          </div>
            <p>
              {account?.type === 'fiat' && (
                <img src={data?.custom?.icon} alt="logo" />
              )}
              {' '}
              {/* Formatted amount is somehow not expected in test */}
              <span>{data?.value}</span>
              {' '}
              {account?.type === 'digital' && account?.currency}
              </p>
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