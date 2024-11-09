import useModel from "../../hooks/useModel"
import Loading from "../common/Loading"
import NetworkError from "../common/NetworkError"
import CreateWalletForm from "../forms/CreateWallet.forms"
import Modal from "../shared/Modal"
import EachWallet from "./EachWallet"
import useAccount from "../../hooks/useAccount"

function Wallet () {

  const { isOpen, handleModel } = useModel();
  const { data, isError, isLoading, accountApi } = useAccount();


    return (
        <div>
        <div className="flex top align-between border-b">
        <h2>Wallets</h2>
        <button onClick={handleModel}> + Add new wallet </button>
        </div>

        <div className="m-4">

        {data &&<div id="wallet" className="grid-col-3">
          {data.map((e, index) => (
          <EachWallet key={index} account={e} />
          ))}
        </div>}

        {isLoading && <Loading />}
        {isError && <NetworkError cta={accountApi} />}
        </div>

       

        <Modal isOpen={isOpen}>
            <CreateWalletForm onClose={handleModel} />
        </Modal>
      </div>
    )
}

export default Wallet