---
theme: page
title: GPT4が眼を持ったみたいなのでTopページ作成をお願いしてみた
next: false
prev: false
---

# GPT4 が眼を持ったみたいなので Top ページ作成をお願いしてみた

噂になっている GPT4 のアップデート。

画像の認識ができるようになったということだったので、フロントエンドの実装をお願いしてみました。

::: danger 【宣伝】月額 2500 円でフルスタックエンジニアになろう :dog:
[ShinCode_Camp の詳細を見る](https://code-s-school-5bc2.thinkific.com/bundles/shincode-camp)
:::

## Figma で簡単にデザインしてみる

僕はデザイナーではないので、適当にレイアウトを作ってみました。

![vitepress](/ChatGPT-Frontend.png)

プロトタイプなのでめっちゃ適当です。これを以下の文章と共に GPT4 君に読み込ませてみます。

```txt
画像は僕がFigmaで作ったTopページのデザインです。
あなたは世界一優秀なフロントエンジニアです。この画像を元にHTMLとCSSを実装してください。また、ファイルは分けて実装してください。
```

投げると、レスポンスは結構遅いので数十秒待ちましょう。

## HTML と CSS をコピペで実装してみた

VSCode で適当に html と css ファイルを作ってコピペしてみました 👇
