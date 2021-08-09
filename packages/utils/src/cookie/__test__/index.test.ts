import { COOKIE_COMMON_KEY, dccCookie, COOKIE_TRANS_KEY } from '../index';


describe('dccCookie test', () => {
  it('common cookie set', () => {
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 102);
    expect(dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)).toBe('102');
  });
  it('obj cookie set', () => {
    dccCookie.setTransCookie(COOKIE_TRANS_KEY.USER_INFO, { a: 1 });
    expect(dccCookie.getTransCookie(COOKIE_TRANS_KEY.USER_INFO)).toEqual({ a: 1 });
  });
  it('obj cookie remove', () => {
    dccCookie.setTransCookie(COOKIE_TRANS_KEY.USER_INFO, { a: 1 });
    dccCookie.removeCookie(COOKIE_TRANS_KEY.USER_INFO);
    expect(dccCookie.getTransCookie(COOKIE_TRANS_KEY.USER_INFO)).toBeFalsy();
  });
  it('common cookie remove', () => {
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 1);
    dccCookie.removeCookie(COOKIE_COMMON_KEY.IS_SAAS);
    expect(dccCookie.getTransCookie(COOKIE_TRANS_KEY.USER_INFO)).toBeFalsy();
  });
  it('cookie secure ', () => {
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 12);
    expect(dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)).toBe('12');
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 123, { secure: true });
    expect(dccCookie.removeCookie(COOKIE_COMMON_KEY.IS_SAAS)).not.toBe('123');
  });
  it('cookie secure expires', () => {
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 12);
    expect(dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)).toBe('12');
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 12, { expires: new Date(1970) });
    expect(dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)).not.toBe('12');
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 12, { expires: Infinity });
    expect(dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)).toBe('12');
  });
  it('cookie domain', () => {
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 11);
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 12, { domain: 'codemao.biz' });
    expect(dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)).not.toBe('12');
    dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, 12, { domain: 'localhost' });
    expect(dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)).toBe('12');
  });
  it('setCookie key undefined', (done) => {
    try {
      expect(dccCookie.setCookie(undefined, 11));
    } catch (error) {
      done();
    }
  });
  it('setTransCookie key undefined', (done) => {
    try {
      expect(dccCookie.setTransCookie(undefined, 11));
    } catch (error) {
      done();
    }
  });
  it('cookie key ', () => {
    expect(COOKIE_TRANS_KEY.USER_INFO).toBe('userInfo');
    expect(COOKIE_COMMON_KEY.AUTHORIZATION).toBe('cnr_token');
    expect(COOKIE_COMMON_KEY.IS_SAAS).toBe('isSaas');
  });
});
