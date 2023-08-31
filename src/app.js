const renderTableRowData = (page = 1) => {
	dataContainer.innerHTML = "";

	let counter = 0;

	const arr = data.slice((page - 1) * PER_PAGE_DATA, page * PER_PAGE_DATA);

	for (let i = 0; i < arr.length; i++, counter++) {
		if (counter >= PER_PAGE_DATA) {
			counter = 0;
			break;
		}
		dataContainer.innerHTML += TableRowData({ ...arr[i] });
	}
};

const renderPaginationButton = () => {
	pagePaginationPageContainer.innerHTML = "";

	for (let i = 0; i < TOTAL_PAGE; i++) {
		pagePaginationPageContainer.innerHTML += PaginationButton(i + 1);
	}
};

renderTableRowData();
renderPaginationButton();
