import {useContext} from "react";
import {ConstApi} from "../context/context"
import {Button, Modal, Typography, Box} from "@mui/material";
//import {FaShoppingBasket} from "react-icons/fa";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Basket from "./basket";



function ModalPage() {
	const {total, open, handleOpen, style} = useContext(ConstApi)

	let sum = total
		.map((el) => el.price * el.count)
		.reduce((amount, item) => item + amount, 0)
		.toFixed(2);

	let nums = Number(sum);
	let tips = parseInt(sum * 0.3);
	let payment = (nums + tips).toFixed(2);

	return (
		<div>
			<Button onClick={handleOpen}>
				{/*<	FaShoppingBasket />*/}
				<FastfoodIcon fontSize="large" />
				<h3 className="order-text">${payment}</h3>
			</Button>
			<Modal
				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						<Basket />
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
export default ModalPage;
