# issiCrashers-Wiki

# 貢献方法

- プルリクエストを送る前に、`pnpm run docs:dev`を実行して表示上の問題がないか確認する
- mainブランチではなくpreブランチにリクエストを送信する

# 編集方法

1. このリポジトリを `git clone`する
2. /docs/wikiに作成する記事の名前のマークダウンファイルを配置する
3. ファイルの先頭に下記を追加する

```
---
title: ページのタイトル
---
```

4. マークダウンの記述方法に従って記事を書く。Vitepressで使用可能なマークダウン拡張は[ここ](https://vitepress.dev/guide/markdown)から
5. 記事が完成したら、/docs/.vitepress/config.mts に記述されているsidebar/wiki下にjson形式で記事の追加をする
6. 完了したら `pnpm run docs:dev`を実行して、表示に問題ないかを確認する
7. preブランチに対してgit pushをして、mainブランチに対してpull Requestを送信する
8. 承諾されるのを待つ
