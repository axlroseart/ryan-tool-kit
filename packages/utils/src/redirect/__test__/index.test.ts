/**
 * @jest-environment jsdom
 */
import { DccRedirect } from '../index';
import { loginUrlMapPro, loginUrlMapTest } from '../../constants/redirect';

describe('dcc redirect class test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
      },
    });
  });
  /**
   * 真实域名、登录跳转域名测试
   * @param originUrl 测试源地址
   * @param targetUrl 过滤操作后的真实地址
   * @param env 执行环境
   * @param type 环境类型
   * @param sub 路由
   */
  function doLoginTest(originUrl:string, targetUrl:string, env:string, type:string, sub?:string) {
    const dr = new DccRedirect(originUrl, env);
    const realUrl = dr._getRealUrl();
    // 真实域名
    expect(realUrl).toEqual(targetUrl);
    const envType = !env ? 'pro' : env;
    // 登录跳转域名
    it(`FUNC: doLogin, ENV: [${envType}], EXPECT: ${originUrl} => ${targetUrl}`, () => {
      let receivedUrl:string;
      dr.doLogin();
      if (!env) {
        receivedUrl = loginUrlMapPro[type];
      } else {
        receivedUrl = loginUrlMapTest[type];
      }
      const expectUrl = dr._targetUrl.split('/')[0];
      expect(expectUrl).toEqual(receivedUrl);
    });
  }
  /**
   * 真实域名、重定向跳转域名测试
   * @param originUrl 测试源地址
   * @param targetUrl 过滤操作后的真实地址
   * @param gotoUrl 要跳转的地址
   * @param env 执行环境
   * @param sub 路由
   */
  function goToTest(originUrl:string, targetUrl:string, gotoUrl:string, env:string, sub:string) {
    const dr = new DccRedirect(originUrl, env);
    const realUrl = dr._getRealUrl();
    const envType = !env ? 'pro' : env;
    // 登录跳转域名
    it(`FUNC: goToTest, ENV: [${envType}], EXPECT: ${originUrl} => ${gotoUrl}`, () => {
      // 真实域名
      expect(realUrl).toEqual(targetUrl);
      dr.goTo(sub);
      // 真实域名
      const expectUrl = dr._targetUrl.split('/')[0];
      expect(expectUrl).toEqual(gotoUrl);
    });
  }
  // TODO - 利用工厂函数生成测试方法
  // ---------------- dologin test ----------------
  // 谷雨
  doLoginTest('guyu.codemao.cn', 'guyu.codemao.cn', undefined, 'guyu');
  doLoginTest('guyu-school.codemao.cn', 'guyu-school.codemao.cn', undefined, 'guyu');
  doLoginTest('test-guyu.codemao.cn', 'guyu.codemao.cn', 'test', 'guyu');
  doLoginTest('test-guyu-school.codemao.cn', 'guyu-school.codemao.cn', 'test', 'guyu');
  // 点程云
  doLoginTest('dianchengyun.com', 'dianchengyun.com', undefined, 'saas');
  doLoginTest('school.dianchengyun.com', 'school.dianchengyun.com', undefined, 'saas');
  doLoginTest('test.dianchengyun.com', 'dianchengyun.com', 'test', 'saas');
  doLoginTest('test-school.dianchengyun.com', 'school.dianchengyun.com', 'test', 'saas');
  // 点程云 - 学大
  doLoginTest('xueda.dianchengyun.com', 'xueda.dianchengyun.com', undefined, 'xueda');
  doLoginTest('xueda-school.dianchengyun.com', 'xueda-school.dianchengyun.com', undefined, 'xueda');
  doLoginTest('test-xueda.dianchengyun.com', 'xueda.dianchengyun.com', 'test', 'xueda');
  doLoginTest('test-xueda-school.dianchengyun.com', 'xueda-school.dianchengyun.com', 'test', 'xueda');
  // ---------------- redirect test ----------------
  // 谷雨
  goToTest('guyu.codemao.cn', 'guyu.codemao.cn', 'guyu-student.codemao.cn', undefined, 'student');
  goToTest('guyu-student.codemao.cn', 'guyu-student.codemao.cn', 'guyu-school.codemao.cn', undefined, 'school');
  goToTest('test-guyu.codemao.cn', 'guyu.codemao.cn', 'test-guyu-student.codemao.cn', 'test', 'student');
  goToTest('test-guyu-student.codemao.cn', 'guyu-student.codemao.cn', 'test-guyu-manager.codemao.cn', 'test', 'manager');
  // 点程云
  goToTest('dianchengyun.com', 'dianchengyun.com', 'student.dianchengyun.com', undefined, 'student');
  goToTest('school.dianchengyun.com', 'school.dianchengyun.com', 'student.dianchengyun.com', undefined, 'student');
  goToTest('test.dianchengyun.com', 'dianchengyun.com', 'test-student.dianchengyun.com', 'test', 'student');
  goToTest('test-school.dianchengyun.com', 'school.dianchengyun.com', 'test-student.dianchengyun.com', 'test', 'student');
  // 点程云 - 学大
  goToTest('xueda.dianchengyun.com', 'xueda.dianchengyun.com', 'xueda-student.dianchengyun.com', undefined, 'student');
  goToTest('xueda-school.dianchengyun.com', 'xueda-school.dianchengyun.com', 'xueda-student.dianchengyun.com', undefined, 'student');
  goToTest('test-xueda.dianchengyun.com', 'xueda.dianchengyun.com', 'test-xueda-student.dianchengyun.com', 'test', 'student');
  goToTest('test-school.dianchengyun.com', 'school.dianchengyun.com', 'test-student.dianchengyun.com', 'test', 'student');
});
