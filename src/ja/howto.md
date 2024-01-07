---
title: How-to
lang: ja
---

# How-to

## JavaScript・フレームワーク

### JavaScriptを使用したい

Handlebarsテンプレート内で&lt;script&gt;タグを書くことができます。JavaScriptを別ファイルにしておく場合は、jsファイルをpagesディレクトリに置きます。必要に応じてresolveヘルパーを使用します。

### NPMで公開されているライブラリを使用したい

Tempuraはパッケージマネージャではないため、`npm install`のようにパッケージをインストールする機能はありません。[cdnjs](https://cdnjs.com/)や[jsDelivr](https://www.jsdelivr.com/)を使用してください。

例えば[js-cookie](https://github.com/js-cookie/js-cookie)を使う場合、以下のようになります。

- `page.html.hbs`

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- jsDelivrからjs-cookieを読み込む -->
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
    <title>{{front.title}}</title>
  </head>
  <body>
    {{{md2html content}}}
    <script>
      /* js-cookieを用いた処理をここに書くことができる */
      Cookie.set("hoge", "fuga")
    </script>
    <!-- もちろん外部ファイルも可能 -->
    <script src="js-file-using-jscookie.js"></script>
  </body>
</html>
```

### Reactを使用したい

TODO

### JSXを使用したい

TempuraはJavaScriptバンドラではないため、JSXやTypeScript等をブラウザで実行可能なコードに変換する機能がありません。

代わりに、ブラウザ上で動作する`@babel/standalone`を使用することができます。詳細は<https://babeljs.io/docs/en/babel-standalone>を参照してください。

### TypeScriptを使用したい

TempuraはJavaScriptバンドラではないため、JSXやTypeScript等をブラウザで実行可能なコードに変換する機能がありません。

代わりに、ブラウザ上で動作する`@babel/standalone`を使用することができます。詳細は<https://babeljs.io/docs/en/babel-standalone>を参照してください。
