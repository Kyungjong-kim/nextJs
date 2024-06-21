import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';
import React from 'react';

function CartPage({ carts }) {
	console.log(carts);
	return (
		<div>
			<CartHeader title={'장바구니 리스트'}></CartHeader>
			<CartList carts={carts}></CartList>
		</div>
	);
}

export async function getServerSideProps() {
	const { data } = await fetchCarts();
	return {
		props: {
			carts: data,
		},
	};
}

export default CartPage;
