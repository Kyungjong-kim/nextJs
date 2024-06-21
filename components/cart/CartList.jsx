import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';
const CartList = ({ carts }) => {
	const router = useRouter();
	const deleteCart = async id => {
		// 삭제 api 호출
		const { data } = await removeCartItem(id);
		console.log(`${data.name}이 삭제 되었습니다.`);
		// 페이지갱신
		router.replace(router.asPath);
	};
	const totalPrice = carts.reduce((acc, cur) => {
		// 현재의값을 더해서 기존값에 더한다
		return acc + parseFloat(cur.price);
	}, 0);
	return (
		<div>
			<div>
				<ul>
					{carts.map(cart => {
						return (
							<li key={`${cart.id}_key`} className={styles.item}>
								<div>
									<Image
										src={cart.imageUrl}
										alt={cart.name}
										width={75}
										height={75}
									/>
								</div>
								<div className={styles.description}>
									<div>{cart.name}</div>
									<div>{cart.price}</div>
									<button onClick={() => deleteCart(cart.id)}>
										장바구니에서 삭제
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>총 가격: {totalPrice}</p>
				<p>총 갯수: {carts.length}</p>
			</div>
		</div>
	);
};

export default CartList;
