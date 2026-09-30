# Scintela Docs · 星烁社区文档站

[Scintela](https://github.com/Scintela) 星烁开源社区的文档与官网源码,基于 [VitePress](https://vitepress.dev) 构建,由 GitHub Actions 自动部署至 GitHub Pages。

- 线上地址:<https://scintela.github.io/docs/>
- 中文为内容源头(root),英文镜像在 `docs/en/`

## 本地开发

```bash
npm install
npm run docs:dev     # 开发服务器 http://localhost:5173
npm run docs:build   # 构建到 docs/.vitepress/dist/
```

## 目录结构

```
docs/
├── .vitepress/config.ts   # 站点配置(base、双语 locale、导航、侧栏)
├── public/                # 静态资源(favicon 等)
├── index.md               # 中文首页
├── matrix/                # 矩阵页(中文)
├── guide/                 # 教程区(中文)
└── en/                    # English mirror
```

## 部署说明

推送 `main` 分支即自动构建部署。当前 `base` 为 `/docs/`(子路径);
**绑定自定义域名 `scintela.dev` 后**,需将 `config.ts` 中的 `base` 改为 `'/'`。

## 许可

内容采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/),代码采用 [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)。
