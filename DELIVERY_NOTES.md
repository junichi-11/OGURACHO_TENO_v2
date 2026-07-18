# 小倉町天王 LP — APS Flagship Final Polish

## 開くファイル

`index.html`をブラウザで開いてください。

## 今回の変更箇所

- DESIGN CONCEPTを思想の比較に限定し、文章量を削減
- Phase 01／02を戸数・面積・プラン・暮らし・画像による建物紹介へ変更
- 想定入居者とデザイン説明の重複を整理
- 思想から建物紹介へつながるブリッジコピーを追加
- DESIGN CONCEPT見出しの2行構成を全画面幅で固定
- Phase 01外観を`assets/hero-day.webp`へ変更
- Phase 02外観を`assets/hero-close.webp`へ変更
- DESIGN CONCEPTの縦長トリミングを廃止し、横構図中心へ変更
- Phase 01 INTERIOR→Phase 02 INTERIORの順へ入れ替え
- LOCATIONからDRAWINGSまでのストーリー順と番号を整理
- SITE STRATEGYをSITE PLANNINGへ変更し、配置計画の説明を全面修正
- 根拠のない「中央の余白」「緑の帯」「敷地の軸」の説明を削除
- SITE PLANNINGを配置・住戸・動線・景観の4項目で整理
- 配置図キャプションを確定情報の範囲へ修正
- DESIGN CONCEPTを追加し、Phase 01とPhase 02の対象・外観・内観の違いを比較表示
- セクション番号、図面タブ表記、メタ情報を整合

## DESIGN CONCEPT使用画像

- Phase 01 外観：`assets/hero-day.webp`
- Phase 01 内観：`assets/interior-modern.webp`
- Phase 02 外観：`assets/hero-close.webp`
- Phase 02 内観：`assets/phase2-living-front.webp`

## 確認結果

- PC：1440px幅で横スクロール、ナビゲーション欠け、比較レイアウト崩れなし
- タブレット：768px幅でPhase比較を縦積み、図面タブを横スクロール表示
- モバイル：390px／430px幅で横スクロールなし、Phase 01→02の順序、SITE PLANNINGの縦積みを確認
- 図面：全タブの参照先が存在し、クリック・矢印キー操作と状態更新を確認
- ライトボックス：開閉とEscapeキー終了を確認
- メニュー：開閉と`aria-expanded`更新を確認
- コンソール：エラーなし

## 未確認事項

- 公開環境での表示とOGP展開は、公開URL未指定のため未確認です。
- `og:image`は未設定です。faviconは`assets/symbol-ogura-tenno.svg`を有効に参照しています。

## ZIP保存場所

`C:/Users/ikpgi/Documents/GitHub/futari-kurashi/ogura_tenno_APS_flagship_final_polish.zip`
