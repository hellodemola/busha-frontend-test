import Loading from "../common/Loading"
import NetworkError from "../common/NetworkError"
import CreateWalletForm from "../forms/CreateWallet.forms"
import Modal from "../shared/Modal"
import EachWallet from "./EachWallet"

function Wallet () {

    return (
        <div>
        <div className="flex top align-between border-b">
        <h2>Wallets</h2>
        <p> + Add new wallet </p>
        </div>

        <div className="m-4">
        {/* <div id="wallet" className="grid-col-3">
          <EachWallet />
        </div> */}

        {/* <Loading /> */}
        <NetworkError />
        </div>

       

        <Modal isOpen={false}>
            <CreateWalletForm />
        </Modal>
      </div>
    )
}

export default Wallet