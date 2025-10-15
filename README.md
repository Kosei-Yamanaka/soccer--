# 移籍アプリ（HTML分割版）

## 構成
```
transfer-app-html-split/
├─ index.html
├─ styles.css
└─ src/
   ├─ app.js
   ├─ config.js        # フォーメーション/評価軸/プレースタイル
   ├─ data.js          # 初期サンプル選手
   └─ utils/
      └─ csv.js       # CSVパース
```

## 使い方
1. VSCodeでフォルダを開く
2. `index.html` をブラウザで開くだけ（サーバ不要）
3. 左パネルの「データ読込（CSV/JSON）」から手持ちの選手リストをインポート

### データ仕様
- 必須列: `name, league, position`
- 推奨: `speed, finishing, passing, defending, aerial, stamina, press, distribution, handling, dribble, offball`（0–100）
