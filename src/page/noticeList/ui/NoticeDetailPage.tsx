import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { mockNotices } from '../mockData';
import type { Notice } from '../mockData';


export default function NoticeDetailPage() {
const { id } = useParams();
const navigate = useNavigate();

const [notice, setNotice] = useState<Notice | null>(null); 
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
const hasIncreased = useRef(false);

useEffect(() => {
if (hasIncreased.current) return;
hasIncreased.current = true;

const noticeId = Number(id);
const found = mockNotices.find((n) => n.id === noticeId);

if (found) {
    found.views += 1;
    const updated: Notice = { ...found };
    setNotice(updated);
} else {
    setError('해당 공지를 찾을 수 없습니다.');
}

setLoading(false);
}, [id]);

if (loading) return <p>불러오는 중...</p>;
if (error) return <p>{error}</p>;

return (
    <div style={{ padding: '32px' }}>
    <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        ← 뒤로가기
    </button>
    <h2>{notice?.title}</h2>
    <p><strong>작성자:</strong> {notice?.writer}</p>
    <p><strong>작성일:</strong> {notice?.date}</p>
    <p><strong>조회수:</strong> {notice?.views}</p>
    <hr />
    <p>{notice?.content}</p>
    </div>
);
}