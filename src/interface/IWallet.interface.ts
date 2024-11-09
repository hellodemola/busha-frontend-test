export type IName = 'Naira' | 'Ethereum' | 'Bitcoin' | 'Steller' | 'Litecoin' | 'SureRemit' | 'Tether' | 'Ripple' | 'Dogecoin' | 'TRON'
type TCurrency = 'NGN' | 'ETH' | 'BTC' | 'XLM' | 'LTC' | 'RMT' | 'USDT' | 'DOGE' | 'TRX' | 'XRP';

export interface IWallet {
    id: string,
    currency: TCurrency,
    hold: string,
    pending_balance: number,
    balance: number,
    name: IName
    type: 'fiat' | 'digital',
    payout: boolean,
    imgURL: string,
}


export interface IColor { name: TCurrency, color: string }

export interface ICustomize extends IColor { icon: string }