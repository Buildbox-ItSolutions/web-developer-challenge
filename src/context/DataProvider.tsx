import { useState } from 'react';
import useApiIBGE from '../hooks/useApiIBGE';
import { ItemsTypes } from '../types';
import DataContext from './DataContext';

type DataProviderProps = {
  children: React.ReactNode;
};
function DataProvider({ children }: DataProviderProps) {
  const { result, getApiIBGE } = useApiIBGE();
  const [favorites, setFavorites] = useState<ItemsTypes[]>([]);
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  const toggleFavorite = (item: ItemsTypes) => {
    const isFavorite = favorites.includes(item);
    if (isFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const context = {
    result,
    getApiIBGE,
    toggleFavorite,
    favorites,
    theme,
    changeTheme,
  };
  return (
    <DataContext.Provider value={ context }>
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
