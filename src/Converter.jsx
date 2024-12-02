const Converter = () => {
    return ( 
        <div>
            <h1>Temprature Converter</h1>
            <p>Enter the temprature ,select units and submits</p>
            <input type="number" autoFocus></input>
            <select name="fromUnit" id="fromUnit">
                <option value=''>From Unit</option>
                <option value='Fahrenite'>Fahrenite</option>
                <option value='Celsues'>Celsues</option>
                <option value='Kelvin'>Kelvin</option>
            </select>
            <select name="toUnit" id="toUnit">
                <option value=''>To Unit</option>
                <option value='Fahrenite'>Fahrenite</option>
                <option value='Celseus'>Celsues</option>
                <option value='Kelvin'>Kelvin</option>
            </select>
        </div>
     );
}
 
export default Converter;