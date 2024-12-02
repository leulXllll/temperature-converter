import { useState } from 'react'
import Converter from './Converter'
import './App.css'

function App() {
    const [f_unit,setFunit] = useState('');
    
    const [to_unit,setToUnit] = useState('');
    
    const [num,setNum] = useState(0);
    
    const [answer,setAnswer] = useState(null);
    

      const handleClick = ()=>{
          if(f_unit==to_unit){
            setAnswer(num);
          }else{
             
            switch(f_unit){
              case 'Fahrenite':
                if(to_unit=='Celseus'){
                    let newValue = (num-32)*(5/9);

                  setAnswer(newValue);

                }else if(to_unit=='Kelvin'){
                    let newValue = (num-32)*(5/9)+273; 
                    setAnswer(newValue);
                }
                break;
              case 'Celseus':
                if(to_unit=='Fahrenite'){

                  let newValue = 32+(9/5)*num;

                  setAnswer(newValue);

                }else if(to_unit=='Kelvin'){

                   let newValue = Number(num) + 273.15;

                    setAnswer(newValue);
                }
                break;
                case 'Kelvin':
                if(to_unit=='Fahrenite'){

                  let newValue = (num-273.15)*1.8+32;

                  setAnswer(newValue);

                }else if(to_unit=='Celseus'){
                  
                  let newValue = num - 273.15;

                    setAnswer(newValue);
                }
                break;
                
            }
          }
        
      }
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
      <button disabled={((f_unit=='')||(to_unit==''))?true:false} onClick={handleClick}>Convert</button>
       { answer && <p>{num} {f_unit} is {answer} {to_unit}</p>}
    </>
  )
}

export default App
