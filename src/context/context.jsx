import { createContext, useState } from "react";

export const ConstApi = createContext([]);

export const GeneralProvider = ({ children }) => {
	const [menuItems, setMenuItems] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [filteredFoodList, setFilteredFoodList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [total, setTotal] = useState([]);
	const [search, setSearch] = useState("");
	const [inputSearch, setInputSearch] = useState([]);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);

	const handleClose = () =>
		setTimeout(() => {
			setOpen(false);
		}, 500);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
	};
	let data = {
		menuItems: menuItems,
		setMenuItems: setMenuItems,
		selectedCategory: selectedCategory,
		setSelectedCategory: setSelectedCategory,
		filteredFoodList: filteredFoodList,
		setFilteredFoodList: setFilteredFoodList,
		isLoading: isLoading,
		setIsLoading: setIsLoading,
		order: order,
		setOrder: setOrder,
		total: total,
		setTotal: setTotal,
		search: search,
		setSearch: setSearch,
		inputSearch: inputSearch,
		setInputSearch: setInputSearch,
		open: open,
		setOpen: setOpen,
		handleOpen: handleOpen,
		handleClose: handleClose,
		style: style,
	};

	return <ConstApi.Provider value={data}>{children}</ConstApi.Provider>;
};
