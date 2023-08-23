import React, { createContext, useEffect, useState } from 'react';
import { IChildren, INetInfoContext } from './types';
import NetInfo from '@react-native-community/netinfo';

const NetInfoContext = createContext<INetInfoContext>({} as INetInfoContext);

const NetInfoProvider: React.FC<IChildren> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => {
      // Unsubscribe
      unsubscribe();
    };
  }, []);

  return (
    <NetInfoContext.Provider
      value={{
        isConnected,
      }}>
      {children}
    </NetInfoContext.Provider>
  );
};

export { NetInfoProvider, NetInfoContext };
