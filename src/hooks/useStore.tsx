import { useReducer } from "react"
import { IAction, IState } from "../interface/IAccount.interface"

function reducer (state: IState, action: IAction) {
    return {
      wallets:[...state.wallets, action.newWallet]
    }
  }

const useStore = () => {
    const [accounts, dispatch] = useReducer(reducer, { wallets: [] })

    return { accounts, dispatch }
}

export default useStore;