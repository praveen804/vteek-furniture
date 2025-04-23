import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address } from '@/src/types/addressType';

interface AddressFields {
	name: string;
	street: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
	mobile: string;
	addressType: string;
}

interface AddressState {
	addresses: Address | null;
	addressFields: AddressFields;
}

// Helper function to check if window is available
const isClient = typeof window !== 'undefined';

// Load saved address from localStorage
const loadAddressFromLocalStorage = (): Address | null => {
	if (!isClient) return null;

	try {
		const stored = localStorage.getItem('selectedAddress');
		return stored ? JSON.parse(stored) : null;
	} catch (error) {
		console.error('Failed to load address from localStorage', error);
		return null;
	}
};

// Save to localStorage
const saveAddressToLocalStorage = (address: Address) => {
	if (!isClient) return;

	try {
		localStorage.setItem('selectedAddress', JSON.stringify(address));
	} catch (error) {
		console.error('Failed to save address to localStorage', error);
	}
};

// Remove from localStorage
const removeAddressFromLocalStorage = () => {
	if (!isClient) return;

	try {
		localStorage.removeItem('selectedAddress');
	} catch (error) {
		console.error('Failed to remove address from localStorage', error);
	}
};

const initialState: AddressState = {
	addresses: isClient ? loadAddressFromLocalStorage() : null,
	addressFields: {
		name: '',
		street: '',
		city: '',
		state: '',
		postalCode: '',
		country: '',
		mobile: '',
		addressType: 'Home',
	},
};

const addressSlice = createSlice({
	name: 'address',
	initialState,
	reducers: {
		addAddress: (state, action: PayloadAction<Address>) => {
			state.addresses = action.payload;
			saveAddressToLocalStorage(action.payload);
		},
		removeAddress: (state) => {
			state.addresses = null;
			removeAddressFromLocalStorage();
		},
		setAddress: (state, action: PayloadAction<AddressFields>) => {
			state.addressFields = action.payload;
		},
		resetAddress: (state) => {
			state.addressFields = initialState.addressFields;
			state.addresses = null;
			removeAddressFromLocalStorage();
		},
	},
});

export const { addAddress, setAddress, resetAddress, removeAddress } =
	addressSlice.actions;

export default addressSlice.reducer;
