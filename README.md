使用[JS-DevTools/npm-publish](https://github.com/JS-DevTools/npm-publish)进行包发布，增加某个目录下所有包进行上传

## 参数

| 参数  |是否必传 | 类型 | 默认值 | 说明  |
|------|--|-----|-------|------|
| workspaces |否 |`string\|string[` |  | 目录[规则参考](https://www.npmjs.com/package/fast-glob) |
| package | 否 | `string` | | `package.json` 文件的路径|

[其他参数参考](https://github.com/JS-DevTools/npm-publish)

📢:注意

1. 当`workspaces`、`package`都存在的时候，直接走`package`值进行发布

## github actions

### action `workspaces`

`workspaces`目录下所有的包文件夹全部进行发布

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    workspaces: packages/*

```

**多个`workspaces`**

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    workspaces: |
      packages/*
      packa/*
      pack
      !packb
      !pack/a

```

### action`package`

```yml

- name: 📦 publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    package: ./package.json

```
