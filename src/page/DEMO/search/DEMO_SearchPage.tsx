import { useMemo, useState } from 'react'
import { Search } from '@/shared/components/search'

interface Book {
    id: number
    title: string
    description: string
}

const DATA: Book[] = [
    { id: 1, title: '정보처리기사 1회 실전 모의고사', description: '기출 및 모의고사 문제집' },
    { id: 2, title: 'CS 전공 시험 족보', description: '컴퓨터공학 전공 기초부터 심화까지' },
    { id: 3, title: '대학 수학 문제집', description: '단원별 수학 문제' },
    { id: 4, title: '영어 독해 문제집', description: '독해/문법 정리' },
    { id: 5, title: '파이썬 알고리즘', description: '코딩 인터뷰 대비' },
]

export default function DEMO_SearchComponentPage() {
    const [query, setQuery] = useState('')

    const results = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return DATA
        return DATA.filter((b) => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q))
    }, [query])

    return (
        <main style={{ padding: 16 }}>
            <h1>🔎 Search Component Demo</h1>

            <section style={{ margin: '12px 0 20px' }}>
                <Search
                    placeholder="제목/설명으로 검색"
                    debounceDelay={300}
                    onSearch={setQuery} // ✅ 여기만 주면 됨
                />
            </section>

            <section>
                <h2>결과 ({results.length}개)</h2>
                {!results.length && <div>검색 결과가 없습니다.</div>}
                <ul>
                    {results.map((b) => (
                        <li key={b.id} style={{ padding: '6px 0', borderBottom: '1px solid #eee' }}>
                            <strong>{b.title}</strong>
                            <div style={{ fontSize: 13, color: '#555' }}>{b.description}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
