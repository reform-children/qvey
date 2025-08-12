export interface Notice {
id: number;
type: '공지' | '필독' | '일반';
title: string;
writer: string;
date: string;
views: number;
isImportant?: boolean;
content?: string;
}

export const mockNotices: Notice[] = [
{
    id: 1,
    type: '필독',
    title: '필독! 가이드 규칙 (24-06-27)',
    writer: '운영자',
    date: '2024-06-27',
    views: 2103,
    isImportant: true,
    content: '가이드를 꼭 확인해주세요. 위반 시 제한될 수 있습니다.',
},
{
    id: 2,
    type: '공지',
    title: '신규 가입자 활동규칙 안내드립니다.',
    writer: '운영자',
    date: '2024-03-24',
    views: 336,
    isImportant: true,
    content: '신규 가입자는 첫 주차 활동 미제출 시 자동 탈락 처리됩니다.',
},
{
    id: 3,
    type: '일반',
    title: '첫날에 모든 주민과 인사하는 동선',
    writer: '채구동',
    date: '2025-07-22',
    views: 67,
    content: '첫날은 바쁘니까 이 경로대로 돌면 다 인사 가능해요.',
},
];