import React from 'react'; 
import { NavLink, Link } from "react-router-dom";
import "./App.css"


function Drinks({chips,drinks,candy}){
    return(
        <div className="drinks">
            {drinks.map ( drink => (
                <div>
                    <img className="drinksimg" src = {drink.src} alt = {drink.name} />
                    <Link to={`/drinks/${drink.name}`}>{drink.name}</Link>
                </div>
            ))}
        </div>
    )
    }
//     return(
//         <div className="soda">
//             <h1>Coca-Cola Fanta Perrier Sprite</h1>
//             <div>
                
//                 <img className="sodaimg" src="http://mobileimages.lowes.com/product/converted/059586/059586509889.jpg?size=pdhi" alt="cocacola"/>
//             </div>

//             <div >
        
//                 <img className="sodaimg" src="http://cdn.shopify.com/s/files/1/0041/1520/2115/products/106142_1024x1024.jpg?v=1579187296" alt="fanta"/>
//             </div>

//             <div >
           
//                 <img className="sodaimg" src="https://cdn3.evostore.io/productimages/vow_premium/l/nl04919.jpg" alt="Perrier"/>
//             </div>
//             <div >
         
//                 <img className="sodaimg" src="https://sc01.alicdn.com/kf/UTB81sL6jSbIXKJkSaefxh5asXXaG.jpeg_350x350.jpeg" alt="Sprite"/>
//             </div>

//         </div>
//     ); 
// }


export default Drinks; 