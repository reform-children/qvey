import React, { useState } from 'react'
import styles from './NoticeNewPage.module.css'

function NoticeNewPage() {
    const [isEditMode, setIsEditMode] = useState(true)

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>공지 등록</h1>

        <form className={styles.form}>

        <label className={styles.label}>제목</label>
        <input type="text" className={styles.input} />


        <label className={styles.label}>내용</label>
        <textarea className={styles.textarea} rows={6} />


        <label className={styles.label}>유형</label>
        <div className={styles.inline}>
            <label><input type="radio" name="type" value="N" /> 일반</label>
            <label><input type="radio" name="type" value="E" /> 이벤트</label>
        </div>

        <label className={styles.label}>
            <input type="checkbox" /> 상단 고정
        </label>

        <button>
            <label className = {styles.Edit}>등록</label>
        </button>

        {isEditMode && (
            <>
            <label className={styles.label}>상태</label>
            <div className={styles.inline}>
                <label><input type="radio" name="status" value="N" /> 노출</label>
                <label><input type="radio" name="status" value="D" /> 삭제</label>
                <label><input type="radio" name="status" value="H" /> 숨김</label>
            </div>
            </>
        )}
        </form>
    </div>
    )
}

export default NoticeNewPage
