import { Checkbox, FormControlLabel, ImageList, ImageListItem } from "@mui/material";
import { LayoutWithCart } from "../layout/layoutWithCart.layout";

export const AlpacasScene: React.FC = () => {
	return (
		<LayoutWithCart>
			<ImageList cols={4}>
				{itemData.map((item) => (
					<ImageListItem key={item.img} sx={{p:4}}>
						<img
							srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
						/>
						<p>{item.title}</p>
						<FormControlLabel control={<Checkbox />} label="Buy" />
					</ImageListItem>
				))}
			</ImageList>
		</LayoutWithCart>
	);
};

const itemData = [
	{
		img: "/src/assets/alpacas1.jpg",
		title: "Alpacas 1",
	},
	{
		img: "/src/assets/alpacas2.jpg",
		title: "Alpacas 2",
	},
	{
		img: "/src/assets/alpacas3.jpg",
		title: "Alpacas 3",
	},
	{
		img: "/src/assets/alpacas4.jpg",
		title: "Alpacas 4",
	},
];
