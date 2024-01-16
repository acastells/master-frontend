import { Checkbox, FormControlLabel, ImageList, ImageListItem } from "@mui/material";
import { LayoutWithCart } from "../layout/layoutWithCart.layout";
import { PictureInfo } from "@/vm/vm";

export const AlpacasScene: React.FC = () => {
	const itemData: PictureInfo[] = [];
	for (let i = 1; i <= 4; i++) {
		const data = {
			id: `assets/alpacas${i}`,
			picUrl: `/src/assets/alpacas${i}.jpg`,
			title: `Alpacas ${i}`,
			selected: false
		};
		itemData.push(data);
	}

	return (
		<LayoutWithCart>
			<ImageList cols={4}>
				{itemData.map((item) => (
					<ImageListItem key={item.id} sx={{ p: 4 }}>
						<img
							srcSet={`${item.picUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.picUrl}?w=164&h=164&fit=crop&auto=format`}
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