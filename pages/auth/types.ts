export type UserDataType = {
    id: string
    user_id: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    provider: string
    email: string
    setAvailableProviders: string | null
}

export type AuthValuesType = {
    user: UserDataType | null
    loading: boolean
    setLoading: (value: boolean) => void
    setUser: (value: UserDataType | null) => void
    setAvailableProviders: () => void
}