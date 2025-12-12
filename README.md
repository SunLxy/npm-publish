# NPM Publish

Use [`JS-DevTools/npm-publish`](https://github.com/JS-DevTools/npm-publish) for package publishing.

**New features:**

Upload all packages in the folder to the npm repository.

## Input Parameters

| Name       | required | Type               | Description                                                                |
| ---------- | -------- | ------------------ | -------------------------------------------------------------------------- |
| workspaces | No       | `string\|string[]` | Folder Matching Rules [Reference](https://www.npmjs.com/package/fast-glob) |
| package    | No       | `string`           | The path to the `package.json` file                                        |

[Other input parameter](https://github.com/JS-DevTools/npm-publish)

> **Warning**
>
> Parameter configuration weight：`package` > `workspaces`

## Actions Example

### Use `workspaces` input

`workspaces` 目录下所有的包文件夹全部进行发布

```yml
- name: 📦  publish to NPM
  uses: kktjs/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    workspaces: packages/*
```

**Multiple `workspaces`**

```yml
- name: 📦  publish to NPM
  uses: kktjs/npm-publish@main
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
  uses: kktjs/npm-publish@main
  with:
    token: ${{ secrets.NPM_TOKEN }}
    package: ./package.json
```

### Use `OIDC`

```diff
  jobs:
    publish:
      runs-on: ubuntu-latest
+     permissions:
+       contents: read
+       id-token: write  # required to use OIDC
      steps:
        - uses: actions/checkout@v5
        - uses: actions/setup-node@v5
          with:
            node-version: "24"  # includes npm@11.6.0
        - name: 📦  publish to NPM
          uses: kktjs/npm-publish@main
          with:
-           token: ${{ secrets.NPM_TOKEN }}
            workspaces: packages/*
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/kktjs/npm-publish/graphs/contributors">
  <img src="https://kktjs.github.io/npm-publish/CONTRIBUTORS.svg" />
</a>

Made with [github-action](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
