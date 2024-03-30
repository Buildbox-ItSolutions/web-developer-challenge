import { useState } from 'react';
import { DataServicesIBGETypes } from '../types';

const useApiIBGE = () => {
  const [result, setResult] = useState<DataServicesIBGETypes>();
  const getApiIBGE = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return { result, getApiIBGE };
};
export default useApiIBGE;
