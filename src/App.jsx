import { useState } from 'react'
import Converter from './Converter'
import './App.css'

function App() {
    const [f_unit,setFunit] = useState('');
    
    const [to_unit,setToUnit] = useState('');
    
    const [num,setNum] = useState(1.0);

      console.log(f_unit);
      console.log(to_unit);
  return (
    <>
      <Converter 
        From_Unit={f_unit} 
        setFrom_Unit={setFunit}
        To_Unit={to_unit}
        setToUnit={setToUnit}
        Num={num}
        setNum={setNum}
        />
    </>
  )
}

export default App
