interface ResponseData<T> {
  code: number;
  data: T;
  msg: string;
}
// axios返回类型
type ApiRes<T=unknown> = Promise<ResponseData<T>>;

