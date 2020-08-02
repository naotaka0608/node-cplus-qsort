
# node-cplus-test

Node から C++ で書かれたクイックソートを呼び出す。

# Requirement

* node v12.18.2
* npm v6.14.5
* python v2.7.15
* node-gyp v7.0.0

# Installation

Node以外で必要になったもの

```bash
npm i -g node-gyp@7.0.0
npm i --save node-addon-api
```

# Usage

```bash
git clone https://github.com/naotaka0608/node-cplus-test.git
cd node-cplus-test
node-gyp rebuild
node index.js 
```

# 参考サイト
[https://nodejs.org/api/n-api.html#n_api_napi_property_descriptor](https://nodejs.org/api/n-api.html#n_api_napi_property_descriptor)

[https://qiita.com/Satachito/items/fa681ba96dc8e52ca7c1](https://qiita.com/Satachito/items/fa681ba96dc8e52ca7c1)

[http://var.blog.jp/archives/76158266.html](http://var.blog.jp/archives/76158266.html)

# そのほか
Visual Studio 2015 のなんかをインストールしたような気がする・・・