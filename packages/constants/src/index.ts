/** 文件类型 */
export enum FILE_TYPE {
  /** 机构相册 */
  ENUM_FILE_TYPE_ALLIANCE_ALBUM = 101, // 机构相册
  /** 跟进记录附件 */
  ENUM_FILE_TYPE_FOLLOW_ATTACH = 102, // 跟进记录附件
  /** 教师附件资料 */
  ENUM_FILE_TYPE_TEACHER_ATTACH = 103, // 教师附件资料
   /** 用户头像 */
  ENUM_FILE_TYPE_USER_PHOTO = 104, // 用户头像
  /** 学员导入模版 */
  ENUM_FILE_TYPE_STUDENT_TEMPLATE = 105, // 学员导入模版
  /** 机构合同附件 */
  ENUM_FILE_TYPE_ALLIANCE_CONTRACT = 106, // 机构合同附件
  /** 微官网附件 */
  ENUM_FILE_TYPE_OFFICIAL_WECHAT = 107, // 微官网附件
  /** 课后点评附件 */
  ENUM_FILE_TYPE_REVIEW_ATTACH = 108, // 课后点评附件
  /** 课件 */
  ENUM_FILE_TYPE_COURSEWARE = 201, // 课件
  /** 科目封面 */
  ENUM_FILE_TYPE_SUBJECT_COVER = 202, // 科目封面
  /** 章节封面 */
  ENUM_FILE_TYPE_CHAPTER_COVER = 203, // 章节封面
  /** 课程封面 */
  ENUM_FILE_TYPE_COURSE_COVER = 204, // 课程封面
  /** 课程勋章 */
  ENUM_FILE_TYPE_COURSE_CARD = 205, // 课程勋章
  /** 课堂任务工程包 */
  ENUM_FILE_TYPE_COURSE_TASK = 206, // 课堂任务工程包
  /** 课程方案封面 */
  ENUM_FILE_TYPE_SCHEME_COVER = 301, // 课程方案封面
  /** 支付流水附件 */
  ENUM_FILE_TYPE_PAYMENT_ATTACH = 302, // 支付流水附件
  /** 退费附件 */
  ENUM_FILE_TYPE_REFUND = 303, // 退费附件
  /** 课堂精彩瞬间 */
  ENUM_FILE_TYPE_SCHEDULE_PHOTO = 401, // 课堂精彩瞬间
  /** 公告通知附件 */
  ENUM_FILE_TYPE_NOTICE_ATTACH = 501, // 公告通知附件
  /** 资料库 */
  ENUM_FILE_TYPE_DATUM = 502, // 资料库
  /** 建议反馈 */
  ENUM_FILE_TYPE_FEEDBACK_ATTACH = 503, // 建议反馈
  /** 培训课程封面 */
  ENUM_FILE_TYPE_LECTURE_COVER = 601, // 培训课程封面
  /** 培训课程选集 */
  ENUM_FILE_TYPE_LECTURE_SECTION = 602, // 培训课程选集
  /** 讲师头像 */
  ENUM_FILE_TYPE_LECTURER_PHOTO = 603, // 讲师头像
  /** 微官网 */
  ENUM_FILE_TYPE_MARKET_WECHAT = 701, // 微官网
}

/** 附件类型对应子目录 */
export const ATTACH_TYPE_URL = {
  /** 机构相册 */
  [FILE_TYPE.ENUM_FILE_TYPE_ALLIANCE_ALBUM]: '/user/alliance/album/',
  /** 跟进记录附件 */
  [FILE_TYPE.ENUM_FILE_TYPE_FOLLOW_ATTACH]: '/user/student/follow/',
  /** 教师附件资料 */
  [FILE_TYPE.ENUM_FILE_TYPE_TEACHER_ATTACH]: '/user/teacher/',
  /** 用户头像 */
  [FILE_TYPE.ENUM_FILE_TYPE_USER_PHOTO]: '/user/photo/',
  /** 学员导入模版 */
  [FILE_TYPE.ENUM_FILE_TYPE_STUDENT_TEMPLATE]: '/user/student/template/',
  /** 学员点评附件 */
  [FILE_TYPE.ENUM_FILE_TYPE_REVIEW_ATTACH]: '/user/student/review/',
  /** 课件 */
  [FILE_TYPE.ENUM_FILE_TYPE_COURSEWARE]: '/curriculum/courseware/',
  /** 科目封面 */
  [FILE_TYPE.ENUM_FILE_TYPE_SUBJECT_COVER]: '/curriculum/subject/cover/',
  /** 科目封面 */
  [FILE_TYPE.ENUM_FILE_TYPE_CHAPTER_COVER]: '/curriculum/chapter/cover/',
  /** 课程封面 */
  [FILE_TYPE.ENUM_FILE_TYPE_COURSE_COVER]: '/curriculum/course/cover/',
  /** 课程勋章 */
  [FILE_TYPE.ENUM_FILE_TYPE_COURSE_CARD]: '/curriculum/card/cover/', // 课程勋章
  /** 课程方案封面 */
  [FILE_TYPE.ENUM_FILE_TYPE_SCHEME_COVER]: '/finance/scheme/', // 课程方案封面
  /** 支付流水附件 */
  [FILE_TYPE.ENUM_FILE_TYPE_PAYMENT_ATTACH]: '/finance/payment/', // 支付流水附件
  /** 支付流水附件 */
  [FILE_TYPE.ENUM_FILE_TYPE_REFUND]: '/finance/refund/', // 支付流水附件
  /** 课堂精彩瞬间 */
  [FILE_TYPE.ENUM_FILE_TYPE_SCHEDULE_PHOTO]: '/study/schedule/', // 课堂精彩瞬间
  /** 公告通知附件 */
  [FILE_TYPE.ENUM_FILE_TYPE_NOTICE_ATTACH]: '/assist/notice/', // 公告通知附件
  /** 资料库 */
  [FILE_TYPE.ENUM_FILE_TYPE_DATUM]: '/assist/datum/', // 资料库
  /** 建议反馈 */
  [FILE_TYPE.ENUM_FILE_TYPE_FEEDBACK_ATTACH]: '/assist/feedback/', // 建议反馈
  /** 培训课程封面 */
  [FILE_TYPE.ENUM_FILE_TYPE_LECTURE_COVER]: '/university/lecture/cover/', // 培训课程封面
  /** 培训课程选集 */
  [FILE_TYPE.ENUM_FILE_TYPE_LECTURE_SECTION]: '/university/lecture/section/', // 培训课程选集
  /** 讲师头像 */
  [FILE_TYPE.ENUM_FILE_TYPE_LECTURER_PHOTO]: '/university/lecture/photo/', // 讲师头像
  /** 微官网 */
  [FILE_TYPE.ENUM_FILE_TYPE_MARKET_WECHAT]: '/market/wechat/offical/', // 微官网
};

/** Cookie key */
export enum COOKIE_TRANS_KEY {
  /** 用户相关信息 */
  USER_INFO = 'userInfo',
}

/** Cookie 普通key */
export enum COOKIE_COMMON_KEY {
  /** 登录token */
  AUTHORIZATION = 'cnr_token',
  /** 标示当前用户所属机构类型 */
  IS_SAAS = 'isSaas',
}

/** SessionStorageType */
export enum SessionStorageType {
  /** 机构id */
  USER_ALLIANCEID = 'USER_ALLIANCEID', // 机构id
  JEST_TEST = 'JEST_TEST'
}

/** 需要上传至私有库的文件类名 */
export const PRIVATE_FILES = ['pdf', 'ppt', 'pptx', 'doc', 'docm', 'docx', 'xls', 'xlsm', 'xlsx'];

/**
 * 订单状态
 */
export enum ORDER_STATUS_TYPE {
  ENUM_ORDER_STATUS_TYPE_UNPAID = 101, // 未支付
  ENUM_ORDER_STATUS_TYPE_PAYING = 102, // 支付中
  ENUM_ORDER_STATUS_TYPE_CHECKING = 103, // 待审核
  ENUM_ORDER_STATUS_TYPE_PAID = 104, // 审核通过
  ENUM_ORDER_STATUS_TYPE_REFUNDING = 105, // 退费中
  ENUM_ORDER_STATUS_TYPE_REFUNDED = 106, // 已退费
  ENUM_ORDER_STATUS_TYPE_CANCELLED = 107, // 已取消
  ENUM_ORDER_STATUS_TYPE_PAYED = 108, // 支付成功
}
