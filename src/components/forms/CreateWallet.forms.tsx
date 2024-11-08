import Loading from "../common/Loading";
import NetworkToaster from "../common/Network";
import NetworkError from "../common/NetworkError";

function CreateWalletForm () {
    return (
        <div style={{ padding: '2em' }}>
            <div>
            <Loading />
            </div>
            <NetworkError />
        <div>
            <h2>Add new wallet</h2>
            <p>The crypto wallet will be created instantly and be available in your list of wallets.</p>
        <form>
            <select style={{ marginBottom: '2em', width: '100%', padding: '1em' }}>
            <option>Ethereum</option>
            </select>
            <button>Create wallet</button>
        </form>
         <NetworkToaster />
        </div>
    </div>
    )
}

export default CreateWalletForm;