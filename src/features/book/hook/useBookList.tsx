// features/book/hook/useBookList.ts
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchBooks } from '../api'
import type { Book } from '../types'

interface BookListResult {
    list: Book[] | undefined
    loading: boolean
    error: Error | null
    search: (keyword: string) => void
}

export const useBookList = (): BookListResult => {
    const [keyword, setKeyword] = useState('')

    const { data, isLoading, error } = useQuery<Book[], Error>({
        queryKey: ['books', keyword],
        queryFn: fetchBooks,
    })

    return {
        list: data,
        loading: isLoading,
        error,
        search: setKeyword, // keyword만 바꿔주면 자동으로 refetch됨
    }
}
