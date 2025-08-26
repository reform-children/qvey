export interface FilterOption {
    label: string
    value: string
}

export interface FilterProps {
    options: FilterOption[]
    mode?: 'single' | 'multi'
    onFilterChange: (selected: string[]) => void
}
