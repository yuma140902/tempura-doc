---
title: Transformerの一覧
lang: ja
date: 2024-01-13
version: v0.5.0
---

## JsonPathQuery

入力の型: Object\
出力の型: JSON\
追加オプション: `query`: JSON Path

入力のオブジェクトから、`query`に指定したJSON Pathに合致する要素のうち1つを取り出し出力する。

## JsonPathQueryAll

入力の型: Object\
出力の型: Array\
追加オプション: `query`: JSON Path

入力のオブジェクトから、`query`に指定したJSON Pathに合致する要素をすべて取り出し出力する。合致する要素が1つだったとしても出力の型はArrayになる。

## Reloader

入力の型: StringまたはBytes\
出力の型: 様々\
追加オプション: `loader`: いずれかのLoader

入力の文字列またはバイト列を指定した`loader`に読み込ませる。`loader`の出力がそのままReloaderの出力となる。

## TemplateRenderer

入力の型: JSON\
出力の型: String\
追加オプション: 

- `template_key`: 文字列
- `current_directory`: `{type: EntryDirectory}`または`{type: Path, path: (文字列)}`

入力のオブジェクトをテンプレートに埋め込む。

### `template_key`

テンプレートを指定するために用いる。Store内にあるTemplate型またはString型のValueを指すキーである必要がある。

### `current_directory`

`resolve`ヘルパーの基準となるディレクトリを指定するために用いる。

`{type: EntryDirectory}`なら、JobのEntryファイルがあるディレクトリを指定する。`{type: Path, path: (文字列)}`なら、`path`の値によって指定する。

### 入力の型がJSONだがObjectではないときの挙動

入力の型がObjectではない場合、テンプレート内でその値を指定することができないためそのままだと実質的に無意味になってしまう。そこで、Object以外の場合は`{(型名): (元の値)}`のようなObjectに変換してからテンプレートに渡す。

以下に例を示す。

#### Null

`null` → `{"null": null}`

#### Bool

`true` → `{"bool": true}`

#### Number

`42` → `{"number": 42}`

#### String

`"hoge"` → `{"string": "hoge"}`

#### Array

`[1, false, {"key": "value"}]` → `{"array": [1, false, {"key": "value"}]}`

### ビルド変数

Objectをテンプレートに渡す際、ビルド時の環境の情報を加えてから渡す。追加される情報は以下の通りである。

- `build.datetime`: String - ビルドした時刻をRFC3339形式の文字列にしたもの
- `build.year`: Number - ビルドした年
- `build.month`: Number - ビルドした月
- `build.day`: Number - ビルドした日
- `build.hour`: Number - ビルド日時の時の部分
- `build.minute`: Number - ビルド日時の分の部分
- `build.second`: Number - ビルド日時の秒の部分
