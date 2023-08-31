const SustainabilityBadge = sustainabilityStatus => {
	const variants = {
		pairing: "text-green-500 bg-green-500/10",
		incompatibility: "text-rose-500 bg-rose-500/10",
		fragmentary: "text-blue-600 bg-blue-600/10",
	};

	return `
    <div
      class="rounded-md text-sm py-1 px-1.5 font-medium text-center w-fit text-sm ${variants[sustainabilityStatus]} capitalize"
    >
      ${sustainabilityStatus}
    </div>
  `;
};
