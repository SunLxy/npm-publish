# 说明

使用[JS-DevTools/npm-publish](https://github.com/JS-DevTools/npm-publish)进行包发布，增加某个目录下所有包进行上传

[参数参考](https://github.com/JS-DevTools/npm-publish)

增加参数
| 参数  |是否必传 | 类型 | 默认值 | 说明  |
|------|--|-----|-------|------|
| cwd |否 |`string` | `process.cwd()` | 目录 |
| files |否 | `string` |  | 包文件夹正则,[正则参考](https://www.npmjs.com/package/micromatch) |
| package | 否 | `string` | | `package.json` 文件的路径|

📢:注意

1. 当`package`存在的时候直接走`package`,不走`files`是否传递值。
2. 当`package`不传并且`files`传递的时候才走`files`

## action `files`和`cwd`

`cwd`和`files`结合使用，可以匹配`cwd`目录下所有匹配`files`正则的包文件夹进行发布

不传递`files`只传`cwd`时，`cwd`目录下所有的包文件夹全部进行发布

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    cwd: packages
    files: |
      a*
      b*
      c*
```

## action`package`

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    package: ./package.json
```
