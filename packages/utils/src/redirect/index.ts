/**
 * 动态处理页面跳转逻辑
 * 暂时没对非常规domain做处理
 */
import { COOKIE_COMMON_KEY } from '@frontend/dcc-constants';
import dccCookie from '../dccCookie';
import getAllianceType from '../getAllianceType';
export class DccRedirect {
    _mainDomain:string;
    _specificKey:string[];
    _prefix:string;
    _hrefArray:string[]|undefined;
    _realUrl:string;
    _protocol:string;
    _prefixArray:string[];
    _domain:string;
    _targetUrl:string = '';
    _isNotPro:boolean;
    private _isThreeSections:() => boolean;
    private _isCustomization:() => boolean;
    private _domainSplitArray:() => any;
    private _doRedirect:(url:string, router?:string) => void;
    private _prefixTransfer:() => boolean;
    _getRealUrl:() => string;
    constructor(domain?:string, env?:string) {
      this._domain = domain || document.domain;
      // 主域名
      this._mainDomain = dccCookie.getSubDomain();
      if (!this._domain || !this._mainDomain) {
        console.warn('incorrect domain');
        return;
      }
      // 访问环境前缀
      this._prefix = env || (window as any).CODEMAOCONFIG?.env;
      // 不同运行环境的前缀
      this._prefixArray = [
        'dev',
        'test',
        'test01',
        'staging',
      ];
      // 定制域名的key合集
      this._specificKey = [
        'xueda',
        'guyu',
      ];
      // 请求协议
      this._protocol = 'https://';
      this._prefixTransfer = function() {
        return !!this._prefix;
      };
      // 获取当前是否是非生产环境
      this._isNotPro = this._prefixTransfer();
      // 域名分割
      this._hrefArray = this._domain.split('.');
      // URL解析处理，去掉环境变量前缀
      this._getRealUrl = function() {
        const mainDomain = this._mainDomain;
        const firstElement = this._hrefArray[0];
        const isNotPro = this._isNotPro;
        if (!isNotPro) {
          return this._hrefArray.length > 2 ? `${firstElement}.${mainDomain}` : `${mainDomain}`;
        }
        let realFirstElememt = firstElement;
        let target = '';
        if (realFirstElememt.includes('test01')) {
          target = 'test01';
        } else {
          target = this._prefixArray.find((item:string) => realFirstElememt.includes(item));
        }
        if (target) {
          realFirstElememt = firstElement.replace(target, '');
          // 正则匹配，去掉首字符中的'-'和'.'
          return `${realFirstElememt}.${mainDomain}`.replace(/^[\.\-]/, '');
        }
        return `${realFirstElememt}.${mainDomain}`;
      };
      // 处理完前缀的真实地址
      this._realUrl = this._getRealUrl();
      // 域名分割
      this._domainSplitArray = function() {
        return this._realUrl.split('.');
      };
      // 当前域名是否三段结构
      this._isThreeSections = function() {
        const sectionArray = this._domainSplitArray();
        const sectionLen = sectionArray.length;
        return sectionLen > 2;
      };
      // 是否定制域名（xueda这种）
      this._isCustomization = function() {
        const sectionArray = this._domainSplitArray();
        const key = sectionArray[0];
        const sub = key?.split('-');
        return sub.length > 1 || this._specificKey.includes(key);
      };
      // 通用跳转方法
      this._doRedirect = function(url:string, router?:string) {
        router = !router ? '' : router;
        const isNotPro = this._isNotPro;
        let targetUrl;
        // 先根据不同环境来拼接环境变量前缀
        if (!isNotPro) {
          targetUrl = `${url}/${router}`;
          this._targetUrl = targetUrl;
          // 如果是生产环境则直接跳转
          window.location.href = `https://${targetUrl}`;
          return;
        }
        const len = this._hrefArray.length;
        targetUrl = len > 2 ? `${this._prefix}-${url}/${router}` : `${this._prefix}.${url}/${router}`;
        targetUrl = targetUrl.includes('dianchengyun') ? targetUrl.replace('-dianchengyun', '.dianchengyun') : targetUrl.replace('-codemao', '.codemao');
        this._targetUrl = targetUrl;
        window.location.href = `https://${targetUrl}`;
      };
    }

    /**
     * 初始化，cookie值和访问域名校验
     * 如果cookie中的isSaas的值跟域名对应不上，则跳转访问域名的登录页
     */
    public init() {
      const targetValue = getAllianceType();
      const cookieSaasStatus = dccCookie.getCookie(COOKIE_COMMON_KEY['IS_SAAS']);
      if (!cookieSaasStatus || cookieSaasStatus !== targetValue) {
        this.doLogin();
        return;
      }
    }
    /**
     * 登录逻辑
     * @returns
     */
    public doLogin(router?:string) {
      const mainDomain = this._mainDomain;
      if (!mainDomain || mainDomain === 'localhost') {
        return;
      }
      let currentTargetUrl;
      if (this._isThreeSections()) {
        const sectionArray = this._domainSplitArray();
        const key = sectionArray[0];
        const sub = key.split('-')[0];
        if (this._isCustomization()) {
          currentTargetUrl = `${sub}.${mainDomain}`;
        } else {
          currentTargetUrl = !this._specificKey.includes(key) ? `${mainDomain}` : `${sub}.${mainDomain}`;
        }
      } else {
        currentTargetUrl = `${mainDomain}`;
      }
      this._doRedirect(currentTargetUrl, router);
    }
    /**
     * 通用跳转逻辑
     * @param sub 要跳转的域名地址
     */
    public goTo(sub:string, router?:string) {
      const mainDomain = this._mainDomain;
      if (!mainDomain || mainDomain === 'localhost') {
        return;
      }
      const sectionArray = this._domainSplitArray();
      let currentTargetUrl;
      if (this._isThreeSections()) {
        let key = sectionArray[0];
        if (!this._isCustomization()) {
          currentTargetUrl = `${sub}.${mainDomain}`;
        } else {
          key = this._specificKey.find((item:string) => key.includes(item));
          currentTargetUrl = `${key}-${sub}.${mainDomain}`;
        }
      } else {
        currentTargetUrl = `${sub}.${mainDomain}`;
      }
      this._doRedirect(currentTargetUrl, router);
    }
}


