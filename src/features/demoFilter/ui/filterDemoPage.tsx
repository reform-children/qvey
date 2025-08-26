import { useBookList } from '@/features/book/hook/useBookList'
import type { Book } from '@/features/book/types'
import Filter from '@/shared/components/filter/Filter'

export default function FilterDemoPage() {
    const { list, loading, error } = useBookList()

    const handleFilterChange = (selected: string[]) => {
        console.log('선택된 필터:', selected)
    }

    if (loading) return <div>불러오는 중...</div>
    if (error) return <div>에러 발생: {error.message}</div>
    if (!list) return <div>책이 없습니다.</div>

    const options = list.map((book: Book) => ({
        label: book.title,
        value: book.id.toString(),
    }))

    return (
        <div style={{ padding: '20px' }}>
            <h2>Filter Demo Page</h2>
            <Filter options={options} mode="multi" onFilterChange={handleFilterChange} />
        </div>
    )
}
