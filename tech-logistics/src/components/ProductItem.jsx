import React from 'react';
import '../assets/styles/components/ProductItem.scss';
import addCart from '../assets/icons/addCart.svg';

const ProductItem = ({ product }) => {

	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} loading="lazy"/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure >
					<img src={addCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
