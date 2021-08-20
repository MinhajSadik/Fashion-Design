import React from 'react';
import data from '../data';

const ProductScreen = (props) => {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div> Products Not Found</div>;
    }
    return (
    <div>
        <div className="row">
            <div className="col-2">
                <img className="large" src={product.image} alt="{product.name}"></img>
            </div>
            <div className="col-1">
                
            </div>
            <div className="col-1">
                
            </div>
        </div>
    </div>
    );
};

export default ProductScreen;