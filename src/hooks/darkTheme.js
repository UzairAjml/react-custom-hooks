import { useEffect } from 'react';
import useStorage from '../hooks/localStorage';

function useDarkTheme() {
  const [theme, setTheme] = useStorage('theme', '');

  const toogleTheme = (newTheme) => {
    const tableTag = document.querySelector('.table');
    theme && tableTag.classList.remove(theme);
    newTheme && tableTag.classList.add(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const tab = document.querySelector('.table');
    if (theme === 'dark') {
      tab && tab.classList.add('light');
    }
  }, []);

  return [theme, toogleTheme];
}
export default useDarkTheme;
