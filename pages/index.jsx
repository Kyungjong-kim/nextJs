import ProductList from '@/components/ProductList';
import React, { useEffect, useState } from 'react';
function ProductPage() {
	return (
		<div>
			<h1>상품 목록 페이지</h1>
			<ProductList></ProductList>
		</div>
	);
}

export default ProductPage;
