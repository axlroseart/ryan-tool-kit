---
title: aliUpload
nav:
  path: /utils
---

# aliUpload

阿里云加密视频上传 阿里云文档：https://help.aliyun.com/document_detail/52204.html?spm=a2c4g.11186623.6.1023.131d10e4pyveyq
## 代码演示
<code src="./demo/base.tsx" />

## API

```typescript
const aliUpload: {
    create: (file: File | Blob, options: AaliUploadOptions) => Promise<{
        start: () => void;
        cancel: () => void;
        stop: () => void;
        continue: () => void;
    }>;
}
```

### AaliUploadOptions
| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| paramData | 视频的相关配置 | `string Object` | {"Vod":{}} |
| timeout | 超时 | `number` | 60000 |
| partSize | 分片大小默认1 MB，不能小于100 KB | `number` | 1048576 |
| parallel | 并行上传分片个数 | `number` | 5 |
| retryCount | 网络原因失败时，重新上传次数 | `number` | 3 |
| retryDuration | 网络原因失败时，重新上传间隔时间 | `number` | 2 |
| region | 配置项 region, 默认 cn-shanghai | `string` | cn-shanghai |
| userId | 阿里云账号ID | `string` |  |
| getAuthByIploadInfo | 获取上传凭证 | `(uploadInfo:UploadInfo) => Promise<AuthIn>` |  |
| getNewTokenWhenExpire | 凭证过期，重新获取凭证 | `(UploadInfo:UploadInfo) => Promise<string>` |  |
| onSuccess | 上传成功回调 | `(uploadInfo:UploadInfo, totalSize:number, progress:number) => void` |  |
| onProgress | 上传进度回调 | `(uploadInfo:UploadInfo, totalSize:number, progress:number) => void` |  |
| onCancel | 上传取消回调 | `(uploadInfo:UploadInfo, code:number, message:string) => void` |  |
| onError | 上传失败回调 | `(uploadInfo:UploadInfo, code:number, message:string) => void` |  |

### Result

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| start | 开始上传 | `（）=> void` | 无 |
| cancel | 取消上传 | `（）=> void` | 无 |
| stop | 暂停上传 | （）=> void   | 无 |
| continue | 继续上传 | （）=> void   | 无 |

