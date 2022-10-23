import React from 'react';
import ProductItem from '../components/ProductItem';
import GetProducts from '../hooks/useGetProducts';
import '../assets/styles/components/ProductsList.scss';

const API = 'https://fakestoreapi.com/products';

const ProductsList = () => {
	const products = GetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductsList;
