export type IName = 'Naira' | 'Ethereum' | 'Bitcoin' | 'Steller'

export interface IWallet {
    id: string,
    currency: 'NGN' | 'ETH' | 'BTC' | 'XLM',
    hold: string,
    pending_balance: number,
    balance: number,
    name: IName
    type: 'fiat' | 'digital',
    payout: boolean,
    imgURL: string,
}

export interface IColor { name: IName, color: string }