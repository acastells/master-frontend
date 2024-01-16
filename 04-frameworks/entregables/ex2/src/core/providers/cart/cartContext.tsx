import { PictureInfo } from "@/vm/vm";
import React, { PropsWithChildren, createContext } from "react";

interface CartContextEntity {
	cart: Array<PictureInfo>;
	addImageToCart: (image: PictureInfo) => void;
	removeImageFromCart: (image: PictureInfo) => void;
	isInCart: (image: PictureInfo) => boolean;
	emptyCart: () => void;
}

export const CartContext = createContext<CartContextEntity>({} as CartContextEntity);

export const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [cart, setCart] = React.useState<PictureInfo[]>([]);

	const addImageToCart = (image: PictureInfo) => {
		setCart([...cart, image]);
	};

	const removeImageFromCart = (image: PictureInfo) => {
		setCart(cart.filter((item) => item.id !== image.id));
	};

	const isInCart = (image: PictureInfo): boolean => {
		return cart.some((item) => item.id === image.id);
	};

	const emptyCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, addImageToCart, removeImageFromCart, isInCart, emptyCart }}>
			{children}
		</CartContext.Provider>
	);
};
