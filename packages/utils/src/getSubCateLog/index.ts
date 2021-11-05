import { SessionStorageType, FILE_TYPE, ATTACH_TYPE_URL } from '@ryan-drx/constants';
import SessionStorage from '../sessionStorage';

// 根据fileType获得对应业务子目录
function getSubCataLog(fileType:FILE_TYPE) {
  // ---机构id
  const allianceid = SessionStorage.get(SessionStorageType.USER_ALLIANCEID);
  // ---新零售子目录
  const BaseUrl = '/cnr';
  // ---需要根据机构进行子目录划分的(机构相册\跟进记录附件\教师附件资料\课程方案封面\支付流水附件\课堂精采瞬间)
  if (
    [
      FILE_TYPE.ENUM_FILE_TYPE_ALLIANCE_ALBUM,
      FILE_TYPE.ENUM_FILE_TYPE_FOLLOW_ATTACH,
      FILE_TYPE.ENUM_FILE_TYPE_TEACHER_ATTACH,
      FILE_TYPE.ENUM_FILE_TYPE_SCHEME_COVER,
      FILE_TYPE.ENUM_FILE_TYPE_PAYMENT_ATTACH,
      FILE_TYPE.ENUM_FILE_TYPE_SCHEDULE_PHOTO,
    ].find((item) => item === fileType)
  ) {
    return `${BaseUrl + ATTACH_TYPE_URL[fileType as FILE_TYPE] + allianceid}/`;
  }

  // --其他常规
  return `${BaseUrl + ATTACH_TYPE_URL[fileType as FILE_TYPE]}`;
}

export default getSubCataLog;
