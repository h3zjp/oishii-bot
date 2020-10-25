# oishii-bot

## 使い方

### `example.json5` をコピーして `config.json5` を作る

```shell
cp example.json5 config.json5
```

### `config.json5` を[下にある](#config.json)ように編集する

```shell
vi config.json5
# OR
emacs config.json5
# OR
nano config.json5
# ...etc
```

### ビルドする

```shell
npm i
npm run build
```

### 終わり

```shell
npm start
```

## config.json

```json5
{
    // MisskeyのURL
    url: 'https://misskey.io',
    // 多分アクセストークンでも行ける（未検証）
    // アクセストークンでやる場合は、すべての権限をオンにしたほうが楽かも
    apiKey: '',
    // 大文字のところを書き換える
    databaseUrl: 'postgresql://USER:PASSWORD@HOST:PORT/DATABASE',
    // DBのSSL
    dbSSL: false,
    // オーナーのUsername オーナーのみが使えるコマンドを使う人を指定する
    ownerUsername: 'kabo',
    // 何分毎に投稿するか
    autoPostInterval: 60,
}
```

## NG Words

Xeltica さんの Citrine から参考にさせていただきました。

<https://github.com/Xeltica/Citrine/blob/master/Resources/ngwords.txt>
