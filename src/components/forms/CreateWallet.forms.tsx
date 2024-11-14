import Loading from "../common/Loading";
import NetworkToaster from "../common/Network";
import NetworkError from "../common/NetworkError";
import CancelIcon from '../../assets/icons/cancel.svg';
import useGetWallet from "../../hooks/useGetWallet";
import Button from "../common/Button";
import usePostWallet from "../../hooks/usePostWallet";
import { IWallet } from "../../interface/IWallet.interface";

function CreateWalletForm ({onClose, accounts, dispatch}: {onClose: () => void, dispatch: any, accounts: IWallet[]}) {
    const { data, isError, isLoading, walletApi } = useGetWallet();
    const { data: isWallet, postWallet, setData, ...rest } = usePostWallet(onClose, dispatch);

    const handleSelect = (currency: string) => {
        if (!data) return;
        const isWallet = data.find((e) => e.currency === currency);
        setData(isWallet)
        return;
    }

    
    if (isLoading) return (
    <div style={{ padding: '2em' }}>
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <button aria-label="close button" onClick={onClose}>
             <img src={CancelIcon} width="15em" alt="cancel" />
            </button>
        </div>
        <Loading />
    </div>
    )

    if (isError) return (
        <div style={{ padding: '2em' }}>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <button aria-label="close button" onClick={onClose}>
             <img src={CancelIcon} width="15em" alt="cancel" />
            </button>
        </div>
        <NetworkError cta={walletApi} />
    </div>)

    return (
        <div style={{ padding: '2em' }}>
        <div>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <h2>Add new wallet</h2>
            <button onClick={onClose}>
            <img src={CancelIcon} width="15em" alt="cancel" />
            </button>
            </div>
            <p>The crypto wallet will be created instantly and be available in your list of wallets.</p>
        <form>
            <select value={isWallet?.currency} onChange={(e) => handleSelect(e.target.value)} style={{ marginBottom: '2em', width: '100%', padding: '1em' }}>
            <option>Select wallet</option>
            {data
                ?.filter((e) => !accounts.find((acc) => acc.currency === e.currency))
                ?.map((each, index) => (
                  <option 
                    key={index} 
                    value={each.currency}
                >
                    {each.name}
                </option>
            ))}
            </select>
            <Button 
                isDisable={!isWallet?.currency} 
                handleOnClick={postWallet}
                >
                 {rest.isPosLoading ? (<span aria-label="Loading...">Loading...</span>): 'Create Wallet'}
                </Button>
        </form>
        {rest.isPosError && (<NetworkToaster />)}
        </div>
    </div>
    )
}

export default CreateWalletForm;