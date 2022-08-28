NPM Publish
===

Use [`JS-DevTools/npm-publish`](https://github.com/JS-DevTools/npm-publish) for package publishing.

**New features:**

Upload all packages in the folder to the npm repository.

## Input Parameters

| Name  | required | Type | Description  |
|------|--|-----|-------|------|
| workspaces | No |`string\|string[]` | Folder Matching Rules [Reference](https://www.npmjs.com/package/fast-glob) |
| package | No | `string` | The path to the `package.json` file |

[Other input parameter](https://github.com/JS-DevTools/npm-publish)

⚠️ 注意

参数配置权重：`package` > `workspaces`


## Actions Example

### Use `workspaces` input

`workspaces` 目录下所有的包文件夹全部进行发布

```yml

- name: 📦  publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    workspaces: packages/*
```

**Multiple `workspaces`**

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

### Use `package` input

```yml
- name: 📦 publish to NPM
  uses: SunLxy/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    package: ./package.json

```

## License

Licensed under the MIT License.
