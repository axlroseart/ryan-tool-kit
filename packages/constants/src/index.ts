// ---文件类型
export enum FILE_TYPE {
  ENUM_FILE_TYPE_ALLIANCE_ALBUM = 101, // 机构相册
  ENUM_FILE_TYPE_FOLLOW_ATTACH = 102, // 跟进记录附件
  ENUM_FILE_TYPE_TEACHER_ATTACH = 103, // 教师附件资料
  ENUM_FILE_TYPE_USER_PHOTO = 104, // 用户头像
  ENUM_FILE_TYPE_STUDENT_TEMPLATE = 105, // 学员导入模版
  ENUM_FILE_TYPE_ALLIANCE_CONTRACT = 106, // 机构合同附件
  ENUM_FILE_TYPE_OFFICIAL_WECHAT = 107, // 微官网附件
  ENUM_FILE_TYPE_REVIEW_ATTACH = 108, // 课后点评附件
  ENUM_FILE_TYPE_COURSEWARE = 201, // 课件
  ENUM_FILE_TYPE_SUBJECT_COVER = 202, // 科目封面
  ENUM_FILE_TYPE_CHAPTER_COVER = 203, // 章节封面
  ENUM_FILE_TYPE_COURSE_COVER = 204, // 课程封面
  ENUM_FILE_TYPE_COURSE_CARD = 205, // 课程勋章
  ENUM_FILE_TYPE_COURSE_TASK = 206, // 课堂任务工程包
  ENUM_FILE_TYPE_SCHEME_COVER = 301, // 课程方案封面
  ENUM_FILE_TYPE_PAYMENT_ATTACH = 302, // 支付流水附件
  ENUM_FILE_TYPE_REFUND = 303, // 退费附件
  ENUM_FILE_TYPE_SCHEDULE_PHOTO = 401, // 课堂精彩瞬间
  ENUM_FILE_TYPE_NOTICE_ATTACH = 501, // 公告通知附件
  ENUM_FILE_TYPE_DATUM = 502, // 资料库
  ENUM_FILE_TYPE_FEEDBACK_ATTACH = 503, // 建议反馈
  ENUM_FILE_TYPE_LECTURE_COVER = 601, // 培训课程封面
  ENUM_FILE_TYPE_LECTURE_SECTION = 602, // 培训课程选集
  ENUM_FILE_TYPE_LECTURER_PHOTO = 603, // 讲师头像
  ENUM_FILE_TYPE_MARKET_WECHAT = 701, // 微官网
}

// ---附件类型对应子目录
export const ATTACH_TYPE_URL = {
  [FILE_TYPE.ENUM_FILE_TYPE_ALLIANCE_ALBUM]: '/user/alliance/album/', // 机构相册
  [FILE_TYPE.ENUM_FILE_TYPE_FOLLOW_ATTACH]: '/user/student/follow/', // 跟进记录附件
  [FILE_TYPE.ENUM_FILE_TYPE_TEACHER_ATTACH]: '/user/teacher/', // 教师附件资料
  [FILE_TYPE.ENUM_FILE_TYPE_USER_PHOTO]: '/user/photo/', // 用户头像
  [FILE_TYPE.ENUM_FILE_TYPE_STUDENT_TEMPLATE]: '/user/student/template/', // 学员导入模版
  [FILE_TYPE.ENUM_FILE_TYPE_REVIEW_ATTACH]: '/user/student/review/', // 学员点评附件
  [FILE_TYPE.ENUM_FILE_TYPE_COURSEWARE]: '/curriculum/courseware/', // 课件
  [FILE_TYPE.ENUM_FILE_TYPE_SUBJECT_COVER]: '/curriculum/subject/cover/', // 科目封面
  [FILE_TYPE.ENUM_FILE_TYPE_CHAPTER_COVER]: '/curriculum/chapter/cover/', // 章节封面
  [FILE_TYPE.ENUM_FILE_TYPE_COURSE_COVER]: '/curriculum/course/cover/', // 课程封面
  [FILE_TYPE.ENUM_FILE_TYPE_COURSE_CARD]: '/curriculum/card/cover/', // 课程勋章
  [FILE_TYPE.ENUM_FILE_TYPE_SCHEME_COVER]: '/finance/scheme/', // 课程方案封面
  [FILE_TYPE.ENUM_FILE_TYPE_PAYMENT_ATTACH]: '/finance/payment/', // 支付流水附件
  [FILE_TYPE.ENUM_FILE_TYPE_REFUND]: '/finance/refund/', // 支付流水附件
  [FILE_TYPE.ENUM_FILE_TYPE_SCHEDULE_PHOTO]: '/study/schedule/', // 课堂精彩瞬间
  [FILE_TYPE.ENUM_FILE_TYPE_NOTICE_ATTACH]: '/assist/notice/', // 公告通知附件
  [FILE_TYPE.ENUM_FILE_TYPE_DATUM]: '/assist/datum/', // 资料库
  [FILE_TYPE.ENUM_FILE_TYPE_FEEDBACK_ATTACH]: '/assist/feedback/', // 建议反馈
  [FILE_TYPE.ENUM_FILE_TYPE_LECTURE_COVER]: '/university/lecture/cover/', // 培训课程封面
  [FILE_TYPE.ENUM_FILE_TYPE_LECTURE_SECTION]: '/university/lecture/section/', // 培训课程选集
  [FILE_TYPE.ENUM_FILE_TYPE_LECTURER_PHOTO]: '/university/lecture/photo/', // 讲师头像
  [FILE_TYPE.ENUM_FILE_TYPE_MARKET_WECHAT]: '/market/wechat/offical/', // 微官网
};

// --需要转化key
export enum COOKIE_TRANS_KEY {
  USER_INFO = 'userInfo', // 用户相关信息
}

// --普通key
export enum COOKIE_COMMON_KEY {
  AUTHORIZATION = 'cnr_token', // 登录token
  IS_SAAS = 'isSaas', //  标示当前用户所属机构类型
}

export enum SessionStorageType {
  USER_ALLIANCEID = 'USER_ALLIANCEID', // 机构id
  JEST_TEST = 'JEST_TEST'
}

export const PRIVATE_FILES = ['pdf', 'ppt', 'pptx', 'doc', 'docm', 'docx', 'xls', 'xlsm', 'xlsx'];
