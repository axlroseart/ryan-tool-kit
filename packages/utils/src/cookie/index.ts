// --需要转化key
export enum COOKIE_TRANS_KEY {
  IS_SAAS = 'isSaas'
}
export enum COOKIE_COMMON_KEY {
  AUTHORIZATION = 'authorization' // 登录token
}
export const DccCookie = {
  // 序列化cookie
  serializeCookie: (name:string, val:string) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`,
  // 格式化cookie
  parseCookie() {
    const str = document.cookie;
    try {
      return str.split(';').map((v) => v.split('=')).reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});
    } catch (error) {
      return {};
    }
  },
  // 设置cookie
  setCookie(key:string, value:any, options?) {
    if (!key) {
      throw new Error('key is required');
    }
    let cookieVal = this.serializeCookie(key, value);
    if (options) {
      Object.keys(options).forEach((item) => {
        cookieVal += `;${item}=${options[item]}`;
      });
    }
    document.cookie = cookieVal;
  },
  // 设置需cookie
  setTransCookie(key:string, value:any, options?) {
    if (!key) {
      throw new Error('key is required');
    }
    let cookieVal = this.serializeCookie(key, JSON.stringify(value));
    if (options) {
      Object.keys(options).forEach((item) => {
        cookieVal += `;${item}=${options[item]}`;
      });
    }
    document.cookie = cookieVal;
  },
  // 获取cookie
  getCookie(key) {
    return this.parseCookie()[key] || '';
  },
  // 获取需解析Cookie
  getTransCookie(key) {
    const cookieVal = this.getCookie(key);
    return cookieVal ? JSON.parse(cookieVal) : '';
  },
};

