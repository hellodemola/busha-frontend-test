import { useEffect, useState } from "react";
import { IWallet } from "../interface/IWallet.interface";
import { baseUrl } from "../utlis/constant";

const useAccount = (isReady = false) => {
    const [isError, setIsError ] = useState<boolean>(false);
    const [data, setData ] = useState<IWallet[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const url = baseUrl+'/accounts'
  
    const accountApi = async (isMounted: boolean) => {
      setIsLoading(true);
      try {

        const response = await fetch(url);
        if (!response.ok && isMounted){
          setIsError(true);
        }
        if (isMounted){
          const json = await response.json();
          setData(json);
        }
      } catch (error) {
        if (isMounted) setIsError(true);
        
      } finally {
        if(isMounted) setIsLoading(false);
      }
    } 
    
  
    useEffect(() => {
      let isMounted = true;
      if (isMounted && !isReady) {
        accountApi(isMounted)
      }
      return () => {
        isMounted = false; // Cleanup function to set `isMounted` to false
      };
    }, [isReady])

    return { isError, data, isLoading, accountApi  }
}

export default useAccount;