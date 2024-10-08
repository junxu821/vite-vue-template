interface Pagination {
  total: number;
  pageNo: number;
  pageSize: number;
}
interface PageVo<T> {
  rows: Array<T>;
  total: number;
}
type PageParams = Omit<Pagination, 'total'>