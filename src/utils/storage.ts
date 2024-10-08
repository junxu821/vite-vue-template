/**
 * 系统常量
 */
export enum SystemConstant {
  Token = "token"
}
/**
 * 设置jwt
 * @param data
 */
export const setToken = (data: string): void => {
  localStorage.setItem(SystemConstant.Token, data);
};
/**
 * 获取jwt
 * @returns
 */
export const getToken = (): string => {
  const token = localStorage.getItem(SystemConstant.Token) || "";
  return token;
};
/**
 * 删除jwt
 */
export const removeToken = (): void => {
  localStorage.removeItem(SystemConstant.Token);
};

/**
 * 清空缓存
 */
export const clearStorage = (): void => {
  localStorage.clear();
};
