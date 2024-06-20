import Image from 'next/image';
import React from 'react';
import styles from './ProductInfo.module.css';

function ProductInfo({ productDetail }) {
	return (
		<div className={styles.container}>
			<div>
				<Image
					src={productDetail.imageUrl}
					alt={productDetail.name}
					width={300}
					height={250}
				/>
			</div>
			<div className={styles.detail}>
				<p>{productDetail.name}</p>
				<p>{productDetail.price}</p>
				<button>장바구니 담기</button>
			</div>
		</div>
	);
}

export default ProductInfo;
