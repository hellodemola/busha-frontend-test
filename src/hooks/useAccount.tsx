import { useEffect, useState } from "react";
import { IWallet } from "../interface/IWallet.interface";

const useAccount = () => {
    const [isError, setIsError ] = useState<boolean>();
    const [data, setData ] = useState<IWallet[]>();
    const [isLoading, setIsLoading] = useState<boolean>();
  
    const accountApi = async (isMounted = true) => {
      try {
        const url = 'http://localhost:3090/accounts'
        const response = await fetch(url);
        if (!response.ok){
          setIsError(true);
          setIsLoading(false);
        }
        if (isMounted){
          const json = await response.json();
          setData(json);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    
  
    useEffect(() => {
      let isMounted = true;
      accountApi(isMounted)
      return () => {
        isMounted = false; // Cleanup function to set `isMounted` to false
      };
    }, [])

    return { isError, data, isLoading, accountApi  }
}

export default useAccount;