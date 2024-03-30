import { createContext } from 'react';
import { DataServicesIBGETypes, ItemsTypes } from '../types';

type DataContextProps = {
  result: DataServicesIBGETypes | undefined;
  getApiIBGE: (url: string) => Promise<void>;
  toggleFavorite: (item: ItemsTypes) => void;
  favorites: ItemsTypes[];
  theme: boolean;
  changeTheme: () => void;
};

const DataContext = createContext({} as DataContextProps);
export default DataContext;
