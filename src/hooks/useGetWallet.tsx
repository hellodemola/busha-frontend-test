import { useEffect, useState } from "react";
import { IWallet } from "../interface/IWallet.interface";

const useGetWallet = () => {
    const [isError, setIsError ] = useState<boolean>();
    const [data, setData ] = useState<IWallet[]>();
    const [isLoading, setIsLoading] = useState<boolean>();
  
    const walletApi = async (isMounted = false) => {
      setIsLoading(true);
      try {
        const url = 'http://localhost:3090/wallets'
        const response = await fetch(url);
        if (!response.ok && isMounted){
          setIsError(true);
        }
        if (isMounted && response.ok){
          const json = await response.json();
          console.log({json})
          setData(json);
        }
      } catch (error) {
        if (isMounted) setIsError(true);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    
  
    useEffect(() => {
      let isMounted = true
      isMounted && walletApi(isMounted)
      return () => {
        isMounted = false
      }
    }, [])


    return { isError, data, isLoading, walletApi  }
}

export default useGetWallet;