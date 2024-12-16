export interface Bank {
	bank: string;
	sustainability: Sustainability;
	customer: {
		name: string;
		image: string;
	};
	creditVolume: number;
	debitBalance: number;
}
export type Sustainability = "pairing" | "fragmentary" | "incompatibility";

export const data: Bank[] = [
	{
		bank: "ANZ Banking",
		sustainability: "pairing",
		customer: {
			name: "Michael Green",
			image:
				"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "ING Group",
		sustainability: "fragmentary",
		customer: {
			name: "Nicolas Johnson",
			image:
				"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Deutsche Bank",
		sustainability: "incompatibility",
		customer: {
			name: "David Hoffman",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Raiffeisen Bank",
		sustainability: "pairing",
		customer: {
			name: "Helen Howard",
			image:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Axis Bank",
		sustainability: "fragmentary",
		customer: {
			name: "Jocelyn Apple",
			image:
				"https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Bank of America",
		sustainability: "incompatibility",
		customer: {
			name: "Ella Smith",
			image:
				"https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "BNP Paribas",
		sustainability: "pairing",
		customer: {
			name: "Olivia Brown",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Citigroup",
		sustainability: "fragmentary",
		customer: {
			name: "Sophia White",
			image:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "HSBC Holdings",
		sustainability: "incompatibility",
		customer: {
			name: "Mia Black",
			image:
				"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "JPMorgan Chase",
		sustainability: "pairing",
		customer: {
			name: "Liam Green",
			image:
				"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Axis Bank",
		sustainability: "fragmentary",
		customer: {
			name: "Jocelyn Apple",
			image:
				"https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "ING Group",
		sustainability: "fragmentary",
		customer: {
			name: "Nicolas Johnson",
			image:
				"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "ANZ Banking",
		sustainability: "pairing",
		customer: {
			name: "Michael Green",
			image:
				"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Deutsche Bank",
		sustainability: "incompatibility",
		customer: {
			name: "David Hoffman",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
	{
		bank: "Deutsche Bank",
		sustainability: "incompatibility",
		customer: {
			name: "David Hoffman",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		creditVolume: 350_000,
		debitBalance: 350_000,
	},
];
