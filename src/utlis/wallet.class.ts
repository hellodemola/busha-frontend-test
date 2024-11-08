import { IColor, IWallet } from "../interface/IWallet.interface";

class Wallet {
    wallet: IWallet;
    private colors: IColor [] = [
        {name: 'Naira', color: '05A357'},
        { name: 'Bitcoin', color: 'FF9900' },
        { name: 'Ethereum', color: '627EEA' },
        { name: 'Steller', color: '00aeef' }
    ];

    constructor (wallet: IWallet) {
        this.wallet = wallet
    }

    get backgroundColor () {
        return this.colors.find((e) => e.color) || 'FF9900';
    }

    get value () {
        if (this.wallet.type === 'fiat'){
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: this.wallet.currency
            })
        }
        return this.wallet.balance + '' + this.wallet.currency;

    }
};


export default Wallet;