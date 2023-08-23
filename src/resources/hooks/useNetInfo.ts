import { NetInfoContext } from '@src/contexts/NetInfo/netInfo';
import { useContext } from 'react';

export const useNetInfo = () => {
  const netInfo = useContext(NetInfoContext);

  return netInfo;
};
