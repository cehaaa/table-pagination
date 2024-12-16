import {
	PaginationProps,
	PaginationControlProps,
	TableRowProps,
} from "./types";

export class Pagination<T> {
	dataSource: T[];
	page: number;
	perPage: number;
	totalData: number;
	totalPages: number;
	dataContainer: HTMLElement;
	paginationContainer: HTMLElement;
	tableRow: ({ item, number }: TableRowProps<T>) => string;
	paginationControl: ({ page, isActive }: PaginationControlProps) => string;

	constructor({
		dataSource,
		perPage,
		dataContainer,
		paginationContainer,
		tableRow,
		paginationControl,
	}: PaginationProps<T>) {
		this.dataSource = dataSource;
		this.page = 0;
		this.perPage = perPage;
		this.totalData = dataSource.length;
		this.totalPages = Math.ceil(this.totalData / this.perPage);
		this.dataContainer = document.querySelector(dataContainer)!;
		this.paginationContainer = document.querySelector(paginationContainer)!;
		this.tableRow = tableRow;
		this.paginationControl = paginationControl;
	}
	renderData() {
		this.dataContainer.innerHTML = "";
		const dataElements = this.dataSource
			.slice(this.page * this.perPage, (this.page + 1) * this.perPage)
			.map((item, index) =>
				this.tableRow({ item, number: this.page * this.perPage + index + 1 })
			)
			.join("");
		this.dataContainer.innerHTML = dataElements;
	}
	renderPagination() {
		this.paginationContainer.innerHTML = "";
		const paginationControls = Array.from({ length: this.totalPages }, (_, i) =>
			this.paginationControl({ page: i + 1, isActive: i === this.page })
		).reduce((acc, item) => (acc += item), "");
		this.paginationContainer.innerHTML = paginationControls;
		this.applyPaginationEvent();
	}
	applyPaginationEvent() {
		const paginationControls = this.paginationContainer.childNodes;
		paginationControls.forEach(control => {
			control.addEventListener("click", () => {
				this.page = Number(control.textContent) - 1;
				this.renderData();
				this.renderPagination();
			});
		});
	}
	init() {
		this.renderData();
		this.renderPagination();
	}
}
