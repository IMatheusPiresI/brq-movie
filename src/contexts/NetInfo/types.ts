import { ReactNode } from 'react';

type IChildren = {
  children: ReactNode;
};

type INetInfoContext = {
  isConnected: boolean;
};

export type { IChildren, INetInfoContext };
