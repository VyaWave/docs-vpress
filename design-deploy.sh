#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# PRODUCTION PAGES

# 生成静态文件
yarn build:design


# 进入生成的文件夹
cd docs/.vuepress

# docs.weiya.design
scp -r dist/* root@123.207.231.183:/var/www/magellan/express-static/docs

cd -
