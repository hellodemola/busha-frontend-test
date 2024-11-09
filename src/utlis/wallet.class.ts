import { ICustomize, IWallet } from "../interface/IWallet.interface";
import walletIcons from "./walletIcons";

class Wallet {
    wallet: IWallet;
    private customize: ICustomize [] = [
        {name: 'NGN', color: '#05A357', icon: walletIcons.Naira },
        { name: 'ETH', color: '#FF9900', icon: walletIcons.Bitcoin },
        { name: 'BTC', color: '#627EEA', icon: walletIcons.Ethereum },
        { name: 'XLM', color: '#00aeef', icon: walletIcons.Litcoin }
    ];

    constructor (wallet: IWallet) {
        this.wallet = wallet
    }

    get custom () {
        return this.customize.find((e) => e.name === this.wallet.currency);
    }


    get value () {
        return new Intl.NumberFormat().format(this.wallet.balance);
    }
};


export default Wallet;