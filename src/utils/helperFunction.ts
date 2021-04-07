export const conversionDate = (date: string) => {
    const convertDate = new Date(date)
    return `${correctFormat(convertDate.getDate())}.${correctFormat(convertDate.getMonth() + 1)}.${convertDate.getFullYear()}`
}

export const fulConversionDate =  (date: string) => {
    const convertDate = new Date(date)
return `${correctFormat(convertDate.getDate())}.${correctFormat(convertDate.getMonth() + 1)}.${convertDate.getFullYear()} 
 ${correctFormat(convertDate.getHours())}:${correctFormat(convertDate.getMinutes())}:${correctFormat(convertDate.getSeconds())}`
}

const correctFormat = (x: number) => {
    return  (x < 10) ? `0${x}` : x
}