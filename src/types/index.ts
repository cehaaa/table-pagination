export interface TableRowProps<T> {
	item: T;
	number?: number;
}
export interface PaginationControlProps {
	page: number;
	isActive?: boolean;
}
export interface PaginationProps<T> {
	dataSource: T[];
	perPage: number;
	dataContainer: string;
	paginationContainer: string;
	tableRow: ({ item, number }: TableRowProps<T>) => string;
	paginationControl: ({ page, isActive }: PaginationControlProps) => string;
}
