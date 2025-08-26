import { useState } from 'react'
import { useBookList } from '../hook/useBookList'
import type { Book } from '../types'
import BookCard from './BookCard'
import style from './BookList.module.css'
import { Search } from '../../../shared/components/search'

function BookList() {
    const { list, loading, error } = useBookList()
    const [keyword, setKeyword] = useState('') // 검색어 상태 관리

    const handleSearch = (value: string) => {
        setKeyword(value) // 검색어 업데이트
    }

    if (loading) return <div>불러오는 중...</div>
    if (error) return <div>에러 발생: {error.message}</div>
    if (!list) return <div>책이 없습니다.</div>

    // 검색어 필터링
    const filteredList = list.filter((book: Book) => book.title.toLowerCase().includes(keyword.toLowerCase()))

    return (
        <div className={style.container}>
            <div className={style.top}>
                <Search onSearch={handleSearch} placeholder="책 제목을 검색하세요." />
            </div>
            <ul>
                {filteredList.length > 0 ? (
                    filteredList.map((book: Book) => (
                        <li key={book.id}>
                            <BookCard {...book} />
                        </li>
                    ))
                ) : (
                    <li>검색 결과가 없습니다.</li>
                )}
            </ul>
        </div>
    )
}

export default BookList
