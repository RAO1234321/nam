import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) => {
      return res.json()
    }).then((data) => {
      setProduct(data)
    })
  }, []);



  return (
    <div className='container'>
      <div className='row'>
        {
          product.map((product) => {
            return (
              <div className='col-md-3'>
                <div className="card" >
                  <img className="card-img-top" src={product.image} alt="Card image cap" style={{ height: "150px", width: "100%" }} />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
