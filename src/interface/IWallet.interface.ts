export type IName = 'Naira' | 'Ethereum' | 'Bitcoin' | 'Steller'

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

type TCurrency = 'NGN' | 'ETH' | 'BTC' | 'XLM';

export interface IColor { name: TCurrency, color: string }

export interface ICustomize extends IColor { icon: string }