import { DccCookie } from '../index';


describe('DccCookie test', () => {
  it('common cookie set', () => {
    DccCookie.setCookie('a', '1');
    expect(DccCookie.getCookie('a')).toBe('1');
  });
  it('obj cookie set', () => {
    DccCookie.setObjCookie('a', { a: 1 });
    expect(DccCookie.getObjCookie('a')).toEqual({ a: 1 });
  });
});
