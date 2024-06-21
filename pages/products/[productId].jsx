import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';
import axios from 'axios';
import React from 'react';

const ProductDetail = ({ productDetail }) => {
	return (
		<div>
			<ProductHeader title={'상품 상세 정보 페이지'} />
			<ProductInfo productDetail={productDetail} />
		</div>
	);
};

export default ProductDetail;

export async function getServerSideProps(context) {
	const id = context.params.productId;
	const { data } = await fetchProductById(id);
	return {
		props: { productDetail: data },
	};
}
