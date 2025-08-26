export interface SearchProps {
    placeholder?: string
    onSearch: (keyword: string) => void
    debounceDelay?: number
}
