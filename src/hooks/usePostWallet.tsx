import { useState } from "react";

const usePostWallet = (onClose: () => void) => {
    const [isPosError, setIsError ] = useState<boolean>(false);
    const [isPosLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<string>();
    const [isSuccess, setIsSuccess] = useState(false);
  
  const postWallet = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    const url = 'http://localhost:3090/accounts';
    const newWallet = JSON.stringify({currency: data})
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: newWallet
    })
    .then((response) => {
        console.log({response})
        if (!response.ok){
           setIsError(true);
        } else {
            setIsSuccess(true);
            onClose();
        }
    })
    .catch((err) => {
        setIsError(true);
        throw new Error(err);
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