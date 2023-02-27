export type UserDataType = {
	id: string;
	user_id: string;
	first_name: string;
	last_name: string;
	avatar_url?: string | undefined;
	provider: string;
	email: string;
	setAvailableProviders: string | undefined;
};

export type AuthValuesType = {
	user: UserDataType | undefined;
	loading: boolean;
	setLoading: (value: boolean) => void;
	setUser: (value: UserDataType | undefined) => void;
	setAvailableProviders: () => void;
};
