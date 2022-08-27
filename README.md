使用[JS-DevTools/npm-publish](https://github.com/JS-DevTools/npm-publish)进行包发布，增加某个目录下所有包进行上传

## 参数

| 参数  |是否必传 | 类型 | 默认值 | 说明  |
|------|--|-----|-------|------|
| workspaces |否 |`string\|string[` |  | 目录[规则参考](https://www.npmjs.com/package/fast-glob) |
| files |否 | `string\|string[]` |  | 包文件夹正则,[正则参考](https://www.npmjs.com/package/micromatch) |
| package | 否 | `string` | | `package.json` 文件的路径|

[其他参数参考](https://github.com/JS-DevTools/npm-publish)


📢:注意

1. `files`不单独使用，配置`workspaces`使用
2. 当`workspaces`、`files`、`package`都存在的时候，直接走`package`值进行发布

## github actions

### action `files`和`workspaces`

`workspaces`和`files`结合使用，可以匹配`workspaces`目录下所有匹配`files`正则的包文件夹进行发布

不传递`files`只传`workspaces`时，`workspaces`目录下所有的包文件夹全部进行发布

**只保留`a`、`b`、`c`开头的**

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    workspaces: packages/**
    files: |
      a*
      b*
      c*
      
```

**`a`、`b`、`c`开头的过滤掉**

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    workspaces: packages/**
    files: |
      *
      !a*
      !b*
      !c*

```

**多个`workspaces`**

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    workspaces: |
      packages/**
      packa/**
      pack

```

### action`package`

```yml

- name: 📦 publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    package: ./package.json

```
