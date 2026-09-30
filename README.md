# MY RULES ランダム名言ウィジェット

Notionに埋め込んで使える、GitHub Pages用のシンプルなウィジェットです。

## 仕様

- ページを開くたびにランダムで1つ表示
- 5分タイマーなし
- 「もう一度ひく」ボタンでもランダム変更
- 直前と同じ言葉は連続表示しない
- 言葉は `script.js` の `rules` に自由に追加可能
- スマートフォン表示対応

## GitHub Pagesで公開

1. GitHubで新しいPublicリポジトリを作る
2. `index.html`
3. `style.css`
4. `script.js`

の3ファイルをアップロード。

4. GitHubの `Settings`
5. `Pages`
6. `Deploy from a branch`
7. `main` / `/(root)` を選択
8. Save

発行されたURLをNotionで `/embed` に貼り付ければ完成です。

## 言葉を追加する

`script.js` の `rules` の中に、

{
  title: "表示したい言葉",
  detail: "補足"
},

という形で追加してください。

たくさん追加してもOKです。

## 注意

本人・所属事務所・掲載媒体とは関係のない非公式ファン作品として使用してください。
第三者の著作物や商標を公開する場合は、権利関係をご確認ください。
