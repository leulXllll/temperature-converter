const Converter = ({Num,setNum,From_Unit,setFrom_Unit,To_Unit,setToUnit,convert}) => {

    
    return ( 
        <div>
            <h1>Temprature Converter</h1>
            <p>Enter the temprature ,select units and submits</p>
            <input value={Num} onChange={(e)=>setNum(e.target.value)} type="number" autoFocus></input>
            <select name="fromUnit" id="fromUnit" value={From_Unit} onChange={(e)=>setFrom_Unit(e.target.value)}>
                <option value=''>From Unit</option>
                <option value='Fahrenite'>Fahrenite</option>
                <option value='Celseus'>Celsues</option>
                <option value='Kelvin'>Kelvin</option>
            </select>
            <select name="toUnit" id="toUnit" value={To_Unit} onChange={(e)=>setToUnit(e.target.value)}>
                <option value=''>To Unit</option>
                <option value='Fahrenite'>Fahrenite</option>
                <option value='Celseus'>Celsues</option>
                <option value='Kelvin'>Kelvin</option>
            </select>
        </div>
     );
}
 
export default Converter;