import { useEffect, useState } from 'react'
import Converter from './Converter'
import './App.css'
import './Converter.css'
function App() {

    const [f_unit,setFunit] = useState('');
    
    const [to_unit,setToUnit] = useState('');
    
    const [num,setNum] = useState('');
    
    const [answerBool,setAnswerBool] = useState(false);

    const [answer,setAnswer] = useState(null);
    

      const handleClick = ()=>{

            switch(f_unit){
              case 'Fahrenite':
                if(to_unit=='Celseus'){
                    let newValue = (Number(num)-32)*(5/9);

                  setAnswer(newValue);

                }else if(to_unit=='Kelvin'){
                    let newValue = (Number(num)-32)*(5/9)+273; 
                    setAnswer(newValue);
                }
                break;
              case 'Celseus':
                if(to_unit=='Fahrenite'){

                  let newValue = 32+(9/5)*Number(num);

                  setAnswer(newValue);

                }else if(to_unit=='Kelvin'){

                   let newValue = Number(num) + 273.15;

                    setAnswer(newValue);
                }
                break;
                case 'Kelvin':
                if(to_unit=='Fahrenite'){

                  let newValue = (Number(num)-273.15)*1.8+32;

                  setAnswer(newValue);

                }else if(to_unit=='Celseus'){
                  
                  let newValue = Number(num) - 273.15;

                    setAnswer(newValue);
                }
                break;
                
            }
          
        
      }
      useEffect(()=>{

        if(f_unit==''||to_unit=='' || num==''){

          setAnswer(num);
          
          setAnswerBool(false);
          
        }else{
          setAnswerBool(true)

          setAnswer(true);

          handleClick();
        }
      },[f_unit,to_unit,num]);
      useEffect(()=>{
        setAnswerBool(false);
      },[])
  return (
    <>
    <div  className="converter-cont">
      <Converter 
           From_Unit={f_unit} 
           setFrom_Unit={setFunit}
           To_Unit={to_unit}
           setToUnit={setToUnit}
           Num={num}
           setNum={setNum}
           />
          { answerBool && <p>{num} {f_unit} is {answer} {to_unit}</p>}
        </div>
    </>
  )
}

export default App
