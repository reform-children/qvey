import { useEffect, useState } from 'react'
import styles from './NoticeListPage.module.css'
import { Link } from 'react-router-dom'
import { mockNotices } from '../mockData'
import type { Notice } from '../mockData'

export default function NoticeListPage() {
    const [notices, setNotices] = useState<Notice[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    useEffect(() => {
        setNotices(mockNotices)
    }, [])

    const sortedNotices = [...notices].sort((a, b) => {
        const priority = { 필독: 2, 공지: 1, 일반: 0 }
        const priorityDiff = priority[b.type] - priority[a.type]
        if (priorityDiff !== 0) return priorityDiff
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedNotices = sortedNotices.slice(startIndex, endIndex)

    const totalPages = Math.ceil(notices.length / itemsPerPage)

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>공지사항</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>유형</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedNotices.map((notice) => (
                        <tr key={notice.id} className={notice.isImportant ? styles.important : ''}>
                            <td>{notice.type}</td>
                            <td className={styles.titleCell}>
                                <Link to={`/notice/${notice.id}`} className={styles.link}>
                                    {notice.title.length > 50 ? notice.title.slice(0, 50) + '...' : notice.title}
                                </Link>
                            </td>
                            <td>{notice.writer}</td>
                            <td>{notice.date}</td>
                            <td>{notice.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={currentPage === i + 1 ? styles.activePage : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
