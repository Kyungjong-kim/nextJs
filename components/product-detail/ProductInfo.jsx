import Image from 'next/image';
import React from 'react';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { id, name, price, imageUrl } = productDetail;
	const addCart = async () => {
		// 장바구니에 아이템을 담는 api
		// 장바구니 페이지 이동
		await createCartItem({ id, name, imageUrl, price })
			.then(router.push('/cart'))
			.catch(err => console.error(err));
	};
	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} alt={name} width={300} height={250} />
			</div>
			<div className={styles.detail}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>장바구니 담기</button>
			</div>
		</div>
	);
}

export default ProductInfo;
