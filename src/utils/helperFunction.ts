export const conversionDate = (date: string) => {
    const convertDate = new Date(date)
    return `${correctFormat(convertDate.getDate())}.${correctFormat(convertDate.getMonth() + 1)}.${convertDate.getFullYear()}`
}

const correctFormat = (x: number) => {
    return  (x < 10) ? `0${x}` : x
}