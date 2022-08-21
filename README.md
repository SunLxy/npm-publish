# 说明

使用[JS-DevTools/npm-publish]进行上传，增加某个目录下所有包进行上传

[参数参考](https://github.com/JS-DevTools/npm-publish)

增加参数
| 参数  |是否必传 | 类型 | 默认值 | 说明  |
|------|--|-----|-------|------|
| cwd |否 |`string` | `process.cwd()` | 目录 |
| files |否 | `string` |  | 包文件夹正则 |
| package | 否 | `string` | | `package.json` 文件的路径|

📢:当`package`存在的时候直接走`package`,不走`files`是否传递值。当`package`不传并且`files`传递的时候才走`files`