---
title: Helperの一覧
lang: ja
date: 2024-01-13
version: v0.5.0
---

## `md2html`

入力: String\
出力: String

マークダウンを渡すとHTMLを返す。

TODO: Common Markdownの機能拡張について

## `resolve`

入力: String\
出力: String

TODO

### 動作例:

以下のファイルがある場合、`{resolve "../dir1/index.md"}` → `dir1/index.html`となる。ただしresolveのcwd指定、Pipelineの出力オプションによって違う結果になることもある。

- `src/dir1/index.md`
- `src/dir2/index.md`
