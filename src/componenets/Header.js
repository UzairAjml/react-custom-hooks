import React from 'react';
import useStorage from '../hooks/localStorage';
import useDarkTheme from '../hooks/darkTheme';
import '../App.css';

const Header = () => {
  const [storedString, setStoredString] = useStorage('string', '');
  const [currentTheme, setCurrentTheme] = useDarkTheme('');
  const handler = () => {
    if (currentTheme !== 'dark') {
      setCurrentTheme('dark');
    } else if (currentTheme === 'dark') {
      setCurrentTheme('light');
    } else {
      setCurrentTheme('light');
    }
  };
  return (
    <div id='text-box'>
      <input
        id='input-box'
        type='text'
        value={storedString}
        onChange={(e) => {
          setStoredString(e.target.value);
        }}
      ></input>
      <button type='submit' id='btn' onClick={handler}>
        Change Theme
      </button>
    </div>
  );
};

export default Header;
