import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SheetData from './components/sheetData';
import SheetForm from './components/sheetForm';


function App() {
  const [sheetData, setSheetData] = useState([]);

  const getSheetData = () => {
    axios.get('https://sheet.best/api/sheets/f69efecb-b3f2-4cfd-865e-2141f1c43612')
      .then(res => {
        // console.log(res.data)
        setSheetData(res.data);
      }
      )
  }

  useEffect(getSheetData, [])

  return (
    <div className="App row">
      <h1 className='display-2 text-center '>Google Sheets Database</h1>
      <SheetData sheetData={sheetData} />
      <SheetForm getSheetData={getSheetData} />
    </div>
  );
}

export default App;
