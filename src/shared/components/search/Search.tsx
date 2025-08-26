import React, { useState } from 'react'
import styles from './search.module.css'
import type { KeyboardEvent, ChangeEvent } from 'react'
import { useDebounce } from '../../hook/useDebounce'
import type { SearchProps } from './types'

const Search: React.FC<SearchProps> = ({ placeholder = '검색어를 입력하세요...', onSearch, debounceDelay = 300 }) => {
    const [keyword, setKeyword] = useState('')

    // debounce 적용
    const debouncedKeyword = useDebounce(keyword, debounceDelay)

    // 검색어가 바뀔 때마다 debounce된 onSearch 실행
    React.useEffect(() => {
        onSearch(debouncedKeyword.trim())
    }, [debouncedKeyword, onSearch])

    // input 변경
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    // Enter 입력 시 검색
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(keyword.trim())
        }
    }

    // 검색 버튼 클릭
    const handleSearchClick = () => {
        onSearch(keyword.trim())
    }

    // Clear 버튼 클릭
    const handleClearClick = () => {
        setKeyword('')
        onSearch('')
    }

    return (
        <div className={styles.searchContainer}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder={placeholder}
                    value={keyword}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                {keyword && (
                    <button className={styles.clearButton} onClick={handleClearClick}>
                        ✕
                    </button>
                )}
            </div>
            <button className={styles.searchButton} onClick={handleSearchClick}>
                검색
            </button>
        </div>
    )
}

export default Search
