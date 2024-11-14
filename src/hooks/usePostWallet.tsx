import { useState } from "react";
import { baseUrl } from "../utlis/constant";
import { IWallet } from "../interface/IWallet.interface";

const usePostWallet = (onClose: () => void, dispatch: any) => {
    const [isPosError, setIsError ] = useState<boolean>(false);
    const [isPosLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IWallet>();
    const [isSuccess, setIsSuccess] = useState(false);

    const formatNewWallet = (data: IWallet) => {
      return {
        id: data?.id,
        currency: data?.currency,
        balance: 0,
        name: data?.name,
        type: data?.type
      }
    }
  
  const postWallet = async () => {
    if (!data) return;
    setIsLoading(true);
    setIsSuccess(false);
    const url = baseUrl+'/wallets'
    const newWallet = JSON.stringify({currency: data.currency})
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: newWallet
    })
    .then((response) => {
        if (!response.ok){
           setIsError(true);
        } 
         if (response.ok){
           setIsSuccess(true);
           onClose();
         }
        
    })
    .catch(() => {
        setIsError(true);
    })
    .finally(() => {
      setIsLoading(false)
      const newWallet = formatNewWallet(data)
      dispatch({newWallet})
      onClose();
    })
  }

  return {
    isPosError,
    isPosLoading,
    isSuccess,
    postWallet,
    setData,
    data,
  }
}

export default usePostWallet;