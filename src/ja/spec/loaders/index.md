---
title: Loaderの一覧
lang: ja
date: 2024-01-13
version: v0.5.0
---

## BlobLoader

出力するValueの型: Bytes\
追加オプション: なし

バイナリファイルを読み込みます。

## JsonLoader

出力するValueの型: JSON\
追加オプション: なし

JSONファイルを読み込みます。

## TemplateLoader

出力するValueの型: Template\
追加オプション: なし

Handlebars形式のテンプレートを読み込みます。

## TextLoader

出力するValueの型: String\
追加オプション: なし

テキストファイルを読み込みます。

## TextWithFrontmatterLoader

出力するValueの型: Object\
追加オプション: なし

frontmatter付きのテキストファイルを読み込みます。frontmatterとは

```
---
title: タイトル
author: yuma14
---
本文
```

のように、文書の先頭部分の`---`で区切った部分にYAML形式でメタデータを書く方式のことです。

### 出力するValueの具体的な仕様

以下のキーと値のみを持つJSON Objectを出力します。

キー: `front`、値: frontmatterの内容をObjectまたはArrayに変換したもの\
キー: `content`、値: frontmatterより下の部分をStringにしたもの

## YamlLoader

出力するValueの型: ObjectまたはArray\
追加オプション: なし

YAMLファイルを読み込みます。

TODO: 1つのファイル内に複数のYAMLドキュメントが含まれていた場合の挙動について
