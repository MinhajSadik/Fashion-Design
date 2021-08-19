import React from 'react';
import Products from '../Components/Products/Products';
import data from '../data';

const HomeScreen = () => {
    return (
        <div className="row center">
      {
        data.products.map((product)=> (
          <Products key={product._id} product={product}/>
        ))
      }
    </div>
    );
};

export default HomeScreen;