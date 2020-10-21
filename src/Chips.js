import React ,{useState} from 'react'; 
import { NavLink , Link } from "react-router-dom";
import "./App.css"

function Chips({ chips, setCart }) {
    const [quantity, setQuantity] = useState('1');
    const [loadingIcon, setLoadingIcon] = useState(false);

    const handleClick = () => {
      setCart(cart => ({...cart, chips: quantity}));
    }

    return(
      <div>
        {chips.map ( chip => (
          <div> 
            <div> 
              <img className="chipsimg" src = {chip.src} /> 
            </div>
          <div> 
          <Link to={`/chips/${chip.name}`}>{chip.name} </ Link>
        </div>
        <div>  price : {chip.price} </div>
        <label>Qty</label>
        <select 
          onChange={(e) => setQuantity(e.target.value)}
          name="quantity">
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
          <option value="5">5 </option>
          <option value="6">6 </option>
        </select> 
        <div >
          <button onClick={handleClick}> +Add </button> 
        </div>
      </div>
    ))}
    </div>
   )
  }


export default Chips; 