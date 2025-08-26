import React, { useState } from 'react'
import styles from './Filter.module.css'

export interface FilterOption {
    label: string
    value: string
}

interface FilterProps {
    options: FilterOption[]
    mode?: 'single' | 'multi'
    onFilterChange: (selected: string[]) => void
}

const Filter: React.FC<FilterProps> = ({ options, mode = 'multi', onFilterChange }) => {
    const [selected, setSelected] = useState<string[]>([])

    const handleSelect = (value: string) => {
        if (mode === 'single') {
            setSelected([value])
            onFilterChange([value])
        } else {
            let newSelected = [...selected]
            if (newSelected.includes(value)) {
                newSelected = newSelected.filter((v) => v !== value)
            } else {
                newSelected.push(value)
            }
            setSelected(newSelected)
            onFilterChange(newSelected)
        }
    }

    const handleClear = () => {
        setSelected([])
        onFilterChange([])
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>선택된 필터: {selected.length}개</span>
                <button onClick={handleClear} className={styles.clearButton}>
                    Clear All
                </button>
            </div>
            <div className={styles.options}>
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        className={`${styles.option} ${selected.includes(opt.value) ? styles.active : ''}`}
                        onClick={() => handleSelect(opt.value)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filter
