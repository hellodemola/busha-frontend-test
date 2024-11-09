import useModel from "../../hooks/useModel"
import Loading from "../common/Loading"
import NetworkError from "../common/NetworkError"
import CreateWalletForm from "../forms/CreateWallet.forms"
import Modal from "../shared/Modal"
import EachWallet from "./EachWallet"
import useAccount from "../../hooks/useAccount"

function Wallet () {

  const { isOpen, handleModel } = useModel();
  const { data, isError, isLoading, accountApi } = useAccount(isOpen);

    return (
        <div>
        <div className="flex top align-between border-b">
        <h2>Wallets</h2>
        <button onClick={handleModel}>
          <p style={{ fontWeight: 600 }}>
           + Add new wallet
          </p>
        </button>
        </div>

        <div className="m-4">
          {isLoading && <Loading />}

        {(data && data.length > 0) && <div id="wallet" className="grid-col-3">
          {data.map((e, index) => (
          <EachWallet key={index} account={e} />
          ))}
        </div>}

        {(isError && data.length < 1) && <NetworkError cta={() => accountApi(true)} />}
        </div>

        <Modal isOpen={isOpen}>
            <CreateWalletForm onClose={handleModel} />
        </Modal>
      </div>
    )
}

export default Wallet