import { SessionStorageType } from '@frontend/dcc-constants';

/**
 * session storage control
 * cache some immutable reuse data
 */
class SessionStoragePuppet {
  public get(key:SessionStorageType) {
    return (
      sessionStorage.getItem(key) &&
            JSON.parse(sessionStorage.getItem(key) || '')
    );
  }

  public set(key:SessionStorageType, value:any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key:SessionStorageType){
    sessionStorage.removeItem(key);
  }
  public clear(){
    sessionStorage.clear();
  }
}
const SessionStorage = new SessionStoragePuppet();

export default SessionStorage;
