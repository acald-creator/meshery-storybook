import {type ReactNode, createContext, useState} from 'react';

import {type AuthValuesType, type UserDataType} from './types';

const defaultProvider: AuthValuesType = {
	user: undefined,
	loading: true,
	setUser: () => null,
	setLoading: () => Boolean,
	setAvailableProviders() {
		//
	},

};

const ProviderAuthContext = createContext(defaultProvider);

type ProviderProps = {
	children: ReactNode;
};

const AuthProvider = ({children}: ProviderProps) => {
	const [user, setUser] = useState<UserDataType | undefined>(defaultProvider.user);
	const [loading, setLoading] = useState<boolean>(defaultProvider.loading);
	const [availableProviders, setAvailableProviders] = useState(defaultProvider.setAvailableProviders);

	const values = {
		user,
		loading,
		availableProviders,
		setUser,
		setLoading,
		setAvailableProviders,
	};

	return <ProviderAuthContext.Provider value={values}>{children}</ProviderAuthContext.Provider>;
};

export {ProviderAuthContext, AuthProvider};
