export default function pagination(page:number, pageSize:number) {
    const pageStart:number = page * 10 + 1
    const pageEnd: number = pageSize * (page + 1)
    const info = {pageStart, pageEnd}
    console.log(pageStart)
    return info
}