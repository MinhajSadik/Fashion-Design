import React from 'react';
import Rating from '../Components/Rating/Rating';
import data from '../data';

const ProductScreen = (props) => {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div> Products Not Found</div>;
    }
    return (<div>
        <div className="row top">
            <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating
                            rating={product.rating} numReviews={product.numReviews}>
                        </Rating>
                    </li>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Description: {product.description}
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status:-</div>
                                <div>
                                    {product.countInStock > 0 ? 
                                    (<span className="success">In Stock</span>)
                                    :
                                    (<span className="error"> Unavailable</span>)}
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
};

export default ProductScreen;