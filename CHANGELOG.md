# CHANGELOG — APS Flagship Revision v3

## APS Flagship Final Polish

- DESIGN CONCEPTを「なぜ二棟でデザインを変えるのか」を伝える思想章へ再編集
- DESIGN CONCEPTのPhase説明を短文化し、建物・住戸の説明を削除
- Phase 01／Phase 02の比較後に、建物紹介へつなぐブリッジコピーを追加
- Phase 01を1LDK9戸・42.34㎡〜57.50㎡・3層構成を中心とした建物紹介へ変更
- Phase 02を2LDK6戸・60.66㎡／61.33㎡・3層構成を中心とした建物紹介へ変更
- 各Phaseに外観、内観、住戸、面積、プラン情報を集約
- PROJECT／RESIDENTIAL COMPOSITIONに重複していた想定入居者の列挙を削除
- モダンデザイン、和モダン、ターゲット差、デザイン思想の説明をDESIGN CONCEPTへ集約
- DESIGN CONCEPTは静かな左右比較、Phase紹介は画像主体の構成へ調整

## APS Flagship Revision v4

- DESIGN CONCEPT見出しを2つのブロック要素で構成し、PC・スマートフォンともに指定の2行を維持
- Phase 01外観をオレンジ色の強い`phase1-night.webp`から、建築形状を読み取りやすい昼景`hero-day.webp`へ変更
- Phase 02外観を`exterior-day-close.webp`から、格子を持つ棟が大きく見える昼景`hero-close.webp`へ変更
- DESIGN CONCEPTの外観は横長16:9、内観は元画像の自然な横比率で表示し、縦長トリミングを廃止
- DESIGN CONCEPTの画像を上下に大きく配置し、文章より画像が小さく見えない構成へ調整
- Phase 01 INTERIORとPhase 02 INTERIORの順序を入れ替え、Phase 01→Phase 02へ統一
- LOCATIONをSITE PLANNINGより前へ移動し、LOCATION→SITE PLANNING→DESIGN CONCEPT→Phase 01→Phase 02→GALLERY→DRAWINGSの順へ整理
- セクション番号をLOCATION 04、SITE PLANNING 05、DESIGN CONCEPT 06、Phase 01 07、Phase 02 08、GALLERY 09、DRAWINGS 10へ更新

### v4表示確認

- 390px／430px／768px／1440pxで見出し改行、横スクロール、Phase順序、画像比率を確認
- DESIGN CONCEPT見出しは全幅で「暮らしに合わせて、」「デザインも変える。」の2行を維持
- Phase 01／Phase 02の外観は横長表示、内観は元画像比率を維持

## 変更内容

- `SITE STRATEGY`を`SITE PLANNING`へ変更
- 根拠のない「中央の余白」「緑の帯」「敷地の軸」の説明を削除
- 配置計画のコピーを、敷地条件・採光・動線・駐車・住戸・外構を一体で整理する内容へ全面修正
- SITE PLANNINGの要点を「配置計画」「住戸計画」「動線計画」「景観計画」の4項目へ再構成
- 配置図キャプションを「全体配置図｜1LDK棟と2LDK棟で構成する二棟計画」へ修正
- SITE PLANNING直後に`DESIGN CONCEPT`セクションを追加
- Phase 01に`URBAN MODERN`のデザイン意図を追加
- Phase 02に`WARM JAPANESE MODERN`のデザイン意図を追加
- 両Phaseの外観・内観を比較できるレイアウトを追加
- 以降のセクション番号を06〜10へ振り直し
- 図面タブ内の「1期／2期」を`Phase 01／Phase 02`へ統一
- title、description、OGPテキストを計画内容と一致するよう調整
- アンカー位置、モバイル縦積み、タップ領域、画像比率を調整
- Escapeキーによるライトボックス終了処理を明示化

## コピー・事実関係

- 二棟間を交流空間・共用庭・中庭として扱う表現は使用していません。
- 1LDK9戸、2LDK6戸、合計15戸、各専有面積の既存確定情報を維持しています。
- Phase 01は1LDKの想定ターゲットに合わせたモダンデザイン、Phase 02は2LDKの想定ターゲットに合わせた温かみのある和モダンとして整理しました。
- 「二棟で一つの街並み」の重複を減らし、住戸構成・想定入居者・デザイン差・配置計画の役割が重複しないよう調整しました。

## 使用画像

- Phase 01 外観：`assets/phase1-night.webp`
- Phase 01 内観：`assets/interior-modern.webp`
- Phase 02 外観：`assets/exterior-day-close.webp`
- Phase 02 内観：`assets/phase2-living-front.webp`

## 技術検証

- HTML：ブラウザでDOM生成と主要セクション、アンカー、操作要素を確認
- JavaScript：Node.jsの構文検査に合格
- ローカル参照：HTML／JavaScriptが参照する画像・CSS・JS・faviconはすべて存在
- コンソール：ブラウザのエラーログ0件
- 図面タブ：クリックおよび左右矢印キーで表示・`aria-selected`・キャプションが更新
- ライトボックス：開閉、Escapeキー終了、スクロールロック解除を確認
- モバイルメニュー：開閉、`aria-expanded`更新、スクロールロックを確認
- 390px／430px／768px／1440px：横スクロールなし、Phase 01→02の順序、SITE PLANNING 4項目、図面タブの操作領域を確認

## 未使用アセット（削除候補・未削除）

- `assets/aerial-context.webp`
- `assets/aerial-top.webp`
- `assets/grid-dot.svg`
- `assets/hero-close.webp`
- `assets/hero-day.webp`
- `assets/hero-evening.webp`
- `assets/hero-night.webp`
- `assets/mark-two-building.svg`
- `assets/site-plan.webp`

## 未解決事項

- `og:image`は未設定です。存在しない画像を参照しない方針とし、テキストOGPのみ維持しています。
- 外部公開URLが未指定のため、公開環境でのOGP展開確認は未実施です。
