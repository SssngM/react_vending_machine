import React from 'react'; 
import { NavLinkm,Link } from "react-router-dom";
import "./App.css"

function Candy({chips,soda,candy}){
    return(
        <div className="candy">
            {candy.map ( candy1 => (
                <div>
                    <img className="candyimg" src = {candy1.src} alt = {candy1.name} />
                    <Link to={`/candy/${candy1.name}`}>{candy1.name}</Link>
                </div>
            ))}
        </div>
    )
    }
//         <div className="candy">
//                 <h1>Skittles  ChupaChups  Haribo KitKat </h1>
//             <div>
            
//                 <img className="candyimg" src="https://d2d8wwwkmhfcva.cloudfront.net/1200x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3b1ceb41-0a51-4f07-89ea-47c407fd2bb8.jpg"alt="Skittles"/>
//             </div>

//             <div>
         
//                 <img className="candyimg" src="https://images-na.ssl-images-amazon.com/images/I/41oH1OnM5yL._SX425_.jpg"alt="Chupa Chups"/>
//             </div>

//             <div>
             
//              <img className="candyimg" src="https://www.economycandy.com/wp-content/uploads/2019/07/products-German-Haribo-Goldbaren-Gummy-Bears-1.jpg"alt="Haribo"/>
//             </div>

//             <div>
   
//                 <img className="candyimg" src="https://d2d8wwwkmhfcva.cloudfront.net/1200x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_36b18b92-42b8-4950-abd8-80d261338eb6.jpeg"alt="Kit Kat"/>
//             </div>
//         </div>
//     ); 
// }


export default Candy; 