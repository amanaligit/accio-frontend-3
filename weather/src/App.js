import './App.css';
import WeatherMain from './weather/weather-main';
import { useState, createContext } from 'react';
import { Switch } from 'antd';

const ThemeContext = createContext(false);

function App() {

  const [theme, setTheme] = useState(false);


  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme ? 'bg-dark text-light' : ''}>
        <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
          <Switch checked={theme} onChange={() => setTheme(t => !t)} />
          <label>Dark Mode</label>
        </div>
        <WeatherMain />
      </div >
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext }
