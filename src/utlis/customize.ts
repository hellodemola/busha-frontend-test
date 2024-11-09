import { ICustomize } from "../interface/IWallet.interface";
import walletIcons from "./walletIcons";

const customize: ICustomize[] = [
    {name: 'NGN', color: '#05A357', icon: walletIcons.Naira },
    { name: 'ETH', color: '#FF9900', icon: walletIcons.Bitcoin },
    { name: 'BTC', color: '#627EEA', icon: walletIcons.Ethereum },
    { name: 'XLM', color: '#00aeef', icon: walletIcons.Litcoin },
    {name: 'DOGE', color: '#d5b0ac', icon: walletIcons.Bitcoin},
    {name: 'LTC', color: '#CEA0AE', icon: walletIcons.Bitcoin},
    {name: 'RMT', color: '#684551', icon: walletIcons.Bitcoin},
    {name: 'TRX', color: '#402E2A', icon: walletIcons.Bitcoin},
    {name: 'USDT', color: '#9CD08F', icon: walletIcons.Bitcoin},
    {name: 'XRP', color: '#402E2A', icon: walletIcons.Bitcoin},

];

export default customize;