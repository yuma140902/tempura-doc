---
title: Concepts
lang: ja
version: v0.5.0
date: 2024-01-13
---

## Pipeline

Pipelineはファイルを読み込み、特定の処理を行い、出力する手順を記述したものです。
Pipelineを用いて、マークダウンファイルをHTMLに変換したり、JSONデータをテンプレートで処理してテキスト形式のデータにしたりできます。

## Entry

Pipelineは複数の入力を持つことができます。例えばJSONデータをHTML文書にしたい場合、JSONとテンプレートの2つの入力が必要です。

しかし、Pipelineの処理の起点となるファイルは1つだけである必要があります。そのファイルをEntryと呼びます。先の例では、JSONファイルがEntryということになります。

## Resource

Entry以外のPipelineの入力をResourceと呼びます。先の例ではテンプレートファイルがResourceに当たります。ResourceはEntryとは異なり複数あってもよいです。

## Job

1つのPipelineは普通、複数のEntryに対して実行されます。
例えばマークダウンファイルが2つあれば、マークダウンをHTMLに変換するパイプラインはそれぞれのファイルに対して実行されるので、合計2回実行されます。
このとき、それぞれの実行単位をJobと呼びます。

PipelineとJobはちょうどプログラムとプロセスのような関係です。あるいはクラスとインスタンスのような関係です。

## Store

Jobの実行に必要な情報はすべてStoreと呼ばれるものに格納されます。Storeはキーを文字列、バリューをValueとするkey-valueストアです。

## Value

Storeに格納されている値です。以下の型を持ちます。

- Bytes
- Template
- JSON

JSONはさらに以下の型に分類できます。

- Null
- Bool
- Number
- String
- Array
- Object

## Step

StepはPipelineが実行する処理1つ1つのことです。`Load`、`Transform`、`DumpStore`の3種類があります。

`Load`ではLoaderを用いてファイルを読み込み、ValueとしてStoreに格納します。

`Transform`ではTransformerを用いてStore内のValueを変換し、変換結果のValueをStoreに格納します。

`DumpStore`はデバッグ用で、実行された時点でのStoreの中身を標準出力に表示します。

## Loader

ファイルを読み込み、Valueにするものです。Valueの型はLoaderによって異なります。例えばTextLoaderならString型、BlobLoaderならBytes型です。

Loaderの一覧は以下を参照してください。

[Loaderの一覧](/tempura-doc/ja/spec/loaders/)

## Transformer

Valueを読み込み、別のValueを返すものです。入力となるValueは1つですが、複数のValueを合成する構文があるため実質的に複数の入力を受け付けることができます(詳細は[`tempura.yml`のフォーマット](/tempura-doc/ja/spec/tempura-yml/)を参照)。

Transformerの一覧は以下を参照してください。

[Transformerの一覧](/tempura-doc/ja/spec/transformers/)

## Helper

Transformerの一種にTemplateTransformerというものがあります。これは内部的にHandlebarsというテンプレートエンジンを使用しています。

Handlebarsでは`{{hoge}}`のような構文を用いて変数を展開する他に、`{{fuga hoge}}`のように、変数を何らかの処理に渡し、その結果を展開することができます。このとき、`fuga`の部分をHelperと呼びます。

[Handlebarsの組み込みのHelper](https://handlebarsjs.com/guide/builtin-helpers.html)に加えて、Tempuraでは独自のHelperを提供しています。

その一覧は以下を参照してください。

[Helperの一覧](/tempura-doc/ja/spec/helpers/)
