import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';
import React from 'react';
function ProductPage() {
	return (
		<div>
			<ProductHeader title={'상품 목록 페이지'} />
			<ProductList></ProductList>
		</div>
	);
}

export default ProductPage;
