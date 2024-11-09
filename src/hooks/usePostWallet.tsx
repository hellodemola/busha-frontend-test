import { useState } from "react";
import { baseUrl } from "../utlis/constant";

const usePostWallet = (onClose: () => void) => {
    const [isPosError, setIsError ] = useState<boolean>(false);
    const [isPosLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<string>();
    const [isSuccess, setIsSuccess] = useState(false);
  
  const postWallet = async () => {
    if (!data) return;
    setIsLoading(true);
    setIsSuccess(false);
    const url = baseUrl+'/wallets'
    const newWallet = JSON.stringify({currency: data})
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
    .finally(() => setIsLoading(false))
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