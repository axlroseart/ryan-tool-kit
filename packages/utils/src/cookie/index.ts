import { COOKIE_TRANS_KEY, COOKIE_COMMON_KEY } from '@frontend/dcc-constants';
/**
 * 公共KEY无前缀
 * 端口私有加对应端口前缀 school、student、curr、manager...
 */
interface ICookieOptions {
  path?:string;
  domain?:string;
  secure?:boolean;
  expires?:number | string | Date;
}
class DccCookie {
  constructor() {
    this.subDomain = this.getSubDomain();
  }
  subDomain = '' // 当前二级
  /**
 * 获取当前 URL 二级域名
 * 如果当前是 IP 地址，则直接返回 IP Address
 */
  getSubDomain = () => {
    try {
      let subdomain = '';
      const { domain } = document;
      const domainList = domain.split('.');
      const ipAddressReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      // 若为 IP 地址、localhost，则直接返回
      if (ipAddressReg.test(domain) || domain === 'localhost') {
        return domain;
      }
      const urlItems = [];
      urlItems.unshift(domainList.pop());
      urlItems.unshift(domainList.pop());
      subdomain = urlItems.join('.');
      return subdomain || document.domain;
    } catch (e) {
      return document.domain || 'localhost';
    }
  }

  /**
   * cookie-key-value转码
   * @param name
   * @param val
   */
  serializeCookie = (name:COOKIE_COMMON_KEY | COOKIE_TRANS_KEY, val:any) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`
  /**
   * 将cookie转为对象
   * @returns obj
   */
  parseCookie = () => {
    const str = document.cookie;
    try {
      return str.split(';').map((v) => v.split('=')).reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});
    } catch (error) {
      return {};
    }
  }
  /**
   * 设置cookie-domain\path\expires\secure
   * @param options:ICookieOptions
   */
  setOptions = (options:ICookieOptions) => {
    let cookieOptions = '';
    Object.keys(options).forEach((Ckey) => {
      const item = options[Ckey];
      if (Ckey === 'expires') {
        switch (item.constructor) {
          case Number:
            cookieOptions += item === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : `; max-age=${item}`;
            break;
          case String:
            cookieOptions += `; expires=${item}`;
            break;
          case Date:
            cookieOptions += `; expires=${item.toUTCString()}`;
            break;
        }
      } else if (Ckey === 'secure' && item) {
        cookieOptions += `; ${Ckey}`;
      } else {
        cookieOptions += `; ${Ckey}=${item}`;
      }
    });
    // 设置cookie域
    if (!cookieOptions.includes('domain')) {
      cookieOptions += `; domain=${this.subDomain}`;
    }
    return cookieOptions;
  }
  /**
   * 设置普通cookie
   * @param key
   * @param value
   * @param options
   */
  setCookie = (key:COOKIE_COMMON_KEY, value:any, options?:ICookieOptions) => {
    if (!key) {
      throw new Error('key is required');
    }
    let cookieVal = this.serializeCookie(key, value);
    cookieVal += this.setOptions(options || {});
    document.cookie = cookieVal;
  }
  /**
   * 设置像一些对象、数值等cookie
   * @param key
   * @param value
   * @param options
   */
  setTransCookie = (key:COOKIE_TRANS_KEY, value:any, options?:ICookieOptions) => {
    if (!key) {
      throw new Error('key is required');
    }
    let cookieVal = this.serializeCookie(key, JSON.stringify(value));
    // 设置配置项
    cookieVal += this.setOptions(options || {});
    document.cookie = cookieVal;
  }
  /**
   * 获取普通cookie
   * @param key
   */
  getCookie = (key:COOKIE_COMMON_KEY) => this.parseCookie()[key] || ''
  /**
   * 获取需转化cookie
   * @param key
   * @returns
   */
  getTransCookie = (key:COOKIE_TRANS_KEY) => {
    const cookieVal = this.parseCookie()[key] || '';
    return cookieVal ? JSON.parse(cookieVal) : '';
  }

  /**
   * 清除cookie
   * @param key
   * @returns
   */
  removeCookie = (key:COOKIE_TRANS_KEY|COOKIE_COMMON_KEY, options?:ICookieOptions) => {
    if (!key) return false;
    this.setCookie(key as COOKIE_COMMON_KEY, '', {
      ...options,
      expires: 'Thu, 01 Jan 1970 00:00:00 GMT',
    });
    return true;
  }
}

export default new DccCookie();
