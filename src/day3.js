import React from "react";

function Category(props){
    return(
        <div>
            <p>{props.name} - Rs.{props.price}</p>
        </div>
    )
}

const tea=10;
const milk=60;
const coffee=20;
const custard=150;
const cake=70;
const pie=200;


function Day3(){
    const [count,setCount]=React.useState(0);
    const [price,setPrice]=React.useState(0);
   const Coffee=()=>{
     setCount(count+1);
     setPrice(price+coffee);
   }
   const milkshake=()=>{
    setCount(count+1)
    setPrice(price+milk)
  }
  const Tea=()=>{
    setCount(count+1)
    setPrice(price+tea)
  }
  const Apple=()=>{
    setCount(count+1)
    setPrice(price+pie)
  }
  const cakes=()=>{
    setCount(count+1)
    setPrice(price+cake)
  }
  const caramel=()=>{
    setCount(count+1)
    setPrice(price+custard)
  }
    return(
       
            <div>
            <center>
            <h1 id="heading">AANANDHAS</h1>
            <hr/>
            <div>
           
            <header>
            <a href="#">Home&nbsp; &nbsp;</a>
            <a href="#">Menu&nbsp; &nbsp;</a>
            <a href="#">About&nbsp; &nbsp;</a>
            <a href="#">My Orders&nbsp; &nbsp;</a>
            </header>
            </div>
            <hr/>
            <div className="section">
                <div>
                <h2><em>Beverages</em></h2>
                <Category name = "Coffee" price = {coffee} />
                <button onClick={Coffee}>Add to cart</button>
                <Category name = "Tea" price = {tea} />
                <button onClick={Tea}>Add to cart</button>
                <Category name = "Milkshake" price = {milk} />
                <button onClick={milkshake}>Add to cart</button>
                </div>
                <div>
                <h2><em>Pastries</em></h2>
                <Category name = "Apple pie" price = {pie} />
                <button onClick={Apple}>Add to cart</button>
                <Category name = "Cake" price = {cake}/>
                <button onClick={cakes}>Add to cart</button>
                <Category name = "Caramel custard" price = {custard}/>
                <button onClick={caramel}>Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <h4>Total = {count}</h4>
                <h4>Price={price}</h4>
            </div>
            </center>
            </div>
        )
    
}
export default Day3;