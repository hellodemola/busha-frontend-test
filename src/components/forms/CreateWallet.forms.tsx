import Loading from "../common/Loading";
import NetworkToaster from "../common/Network";
import NetworkError from "../common/NetworkError";
import CancelIcon from '../../assets/icons/cancel.svg';
import useGetWallet from "../../hooks/useGetWallet";
import Button from "../common/Button";
import usePostWallet from "../../hooks/usePostWallet";

function CreateWalletForm ({onClose}: {onClose: () => void}) {
    const { data: currency, postWallet, setData, ...rest } = usePostWallet(onClose);
    const { data, isError, isLoading, walletApi } = useGetWallet();
    
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
            <select value={currency} onChange={(e) => setData(e.target.value)} style={{ marginBottom: '2em', width: '100%', padding: '1em' }}>
            <option>Select wallet</option>
            {data?.map((each, index) => (
                  <option 
                    key={index} 
                    value={each.currency}
                >
                    {each.name}
                </option>
            ))}
            </select>
            <Button 
                isDisable={!currency} 
                handleOnClick={postWallet}
                >
           
                 {rest.isPosLoading ? (<p aria-label="Loading...">Loading...</p>): 'Create Wallet'}
                
                </Button>
        </form>
        {rest.isPosError && (<NetworkToaster />)}
        </div>
    </div>
    )
}

export default CreateWalletForm;