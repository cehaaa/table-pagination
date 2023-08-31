const TableRowData = ({
	bank,
	sustainability,
	customer,
	creditVolume,
	debitBalance,
}) => {
	return `
    <tr class="border-b hover:bg-blue-50 duration-100 last:border-b-none">
      <td class="font-medium">${bank}</td>
      <td>
        ${SustainabilityBadge(sustainability)}
      </td>
      <td>
        <div class="flex items-center space-x-1.5 text-sm">
          <div class="h-9 w-9 rounded-full bg-gray-200 overflow-hidden">
            <img src="${
							customer.image
						}" class="w-full h-full object-cover flex-none" />
          </div>
          <div class="text-gray-500">${customer.name}</div>
        </div>
      </td>
      <td class="text-gray-500 text-sm">${thousandSeparator(creditVolume)}</td>
      <td class="text-gray-500 text-sm">${thousandSeparator(debitBalance)}</td>
    </tr>
  `;
};
