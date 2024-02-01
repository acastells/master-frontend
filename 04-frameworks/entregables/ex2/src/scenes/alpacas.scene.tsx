import { PictureInfo } from "@/vm/vm";
import { Checkbox, FormControlLabel, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { CartContext } from "../core/providers/cart/cartContext";
import { LayoutWithCart } from "../layouts/CartLayout.layout";
import { getAlpacasInitialData } from "../vm/initialData";

export const AlpacasScene: React.FC = () => {
	const { cart, addImageToCart, removeImageFromCart, isInCart } = React.useContext(CartContext);
	const [products, setProducts] = React.useState<PictureInfo[]>(getAlpacasInitialData());

	React.useEffect(() => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				isInCart(product) ? { ...product, selected: true } : { ...product, selected: false }
			)
		);
	}, [cart, isInCart]);

	const handleCheckboxOnChange = (item: PictureInfo, checked: boolean) => {
		if (checked) {
			addImageToCart(item);
		} else {
			removeImageFromCart(item);
		}
	};

	return (
		<LayoutWithCart>
			<ImageList cols={4}>
				{products.map((item: PictureInfo) => (
					<ImageListItem key={item.id} sx={{ p: 4 }}>
						<img
							srcSet={`${item.picUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.picUrl}?w=164&h=164&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
						/>
						<p>{item.title}</p>
						<FormControlLabel
							control={
								<Checkbox
									checked={item.selected}
									onChange={(_e, checked) =>
										handleCheckboxOnChange(item, checked)
									}
								/>
							}
							label="Buy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</LayoutWithCart>
	);
};
