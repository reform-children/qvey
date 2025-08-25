import { useState, useEffect } from 'react'

/**
 * useDebounce hook
 * 특정 값이 변경된 후 일정 시간동안 변경이 없으면 최종 값을 반환
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}
