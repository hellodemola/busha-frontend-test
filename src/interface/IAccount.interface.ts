import { IWallet } from "./IWallet.interface";

export interface IAction {
    newWallet: IWallet;
  }
  
export interface IState {
    wallets: IWallet []
}