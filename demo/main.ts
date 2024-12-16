import "./style.css";
import {
	Pagination,
	PaginationControlProps,
	TableRowProps,
} from "../src/index";
import { data, type Bank, type Sustainability } from "./source";
import { thousandSeparator } from "./utils";

const paginationControl = ({ page, isActive }: PaginationControlProps) => {
	return `
		<button class="h-9 w-9 flex items-center justify-center rounded-md cursor-pointer text-sm ${
			isActive ? "bg-indigo-500 text-white" : "bg-indigo-500/20 text-indigo-500"
		}">
      ${page}
    </button>
	`;
};

const variants: Record<Sustainability, string> = {
	pairing: "text-green-500 bg-green-500/10",
	incompatibility: "text-rose-500 bg-rose-500/10",
	fragmentary: "text-blue-600 bg-blue-600/10",
};
const tableRow = ({ item, number }: TableRowProps<Bank>) => {
	return `
		<tr class="border-b hover:bg-blue-50 duration-100 last:border-b-none text-sm text-gray-500">
      <td class="font-medium whitespace-nowrap text-black">${number}</td>
      <td class="font-medium whitespace-nowrap text-black">${item.bank}</td>
      <td>
				<div
					class="rounded-md text-sm py-1 px-1.5 font-medium text-center w-fit ${
						variants[item.sustainability as Sustainability]
					} capitalize"
				>
					${item.sustainability}
				</div>
			</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="h-9 w-9 rounded-full bg-gray-200 overflow-hidden">
            <img src="${
							item.customer.image
						}" class="w-full h-full object-cover flex-none" />
          </div>
          <div class="whitespace-nowrap">${item.customer.name}</div>
        </div>
      </td>
      <td>${thousandSeparator(item.creditVolume)}</td>
      <td>${thousandSeparator(item.debitBalance)}</td>
    </tr>
	`;
};

const pagination = new Pagination<Bank>({
	dataSource: data,
	perPage: 5,
	dataContainer: "#data-container",
	paginationContainer: "#pagination-container",
	tableRow,
	paginationControl,
});
pagination.init();
