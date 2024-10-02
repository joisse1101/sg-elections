const day_ms = 24 * 60 * 60 * 1000
const month_ms = 30.437 * day_ms
const year_ms = 365.25 * day_ms

function timeDiff_ms(date_now: Date, date_past: Date) {
    return date_now.valueOf() - date_past.valueOf()
}

function year_diff(date_now: Date, date_past: Date) {
    return Math.floor(timeDiff_ms(date_now, date_past) / year_ms)
}
function month_diff(date_now: Date, date_past: Date) {
    return Math.floor(timeDiff_ms(date_now, date_past) / month_ms)
}
function day_diff(date_now: Date, date_past: Date) {
    return Math.floor(timeDiff_ms(date_now, date_past) / day_ms)
}

export function timeDiff_ymd(date_now: Date, date_past: Date) {
    const years = year_diff(date_now, date_past)
    date_past.setFullYear(date_past.getFullYear() + years)
    const months = month_diff(date_now, date_past)
    date_past.setMonth(date_past.getMonth() + months)
    const days = day_diff(date_now, date_past)

    return [years, months, days]
}