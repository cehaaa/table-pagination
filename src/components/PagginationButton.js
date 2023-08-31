let activePage = 1;

const paginationButtonClickHandler = number => {
	activePage = number;
	renderPaginationButton();
	renderTableRowData(activePage);
};

const PaginationButton = number => {
	return `
    <button class="h-10 w-10 flex items-center justify-center rounded-md cursor-pointer ${
			activePage === number
				? "bg-indigo-500 text-white"
				: "bg-indigo-500/20 text-indigo-500"
		}" onclick="paginationButtonClickHandler(${number})">
      ${number}
    </button>
  `;
};
