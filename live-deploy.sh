#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# PRODUCTION PAGES

# 生成静态文件
yarn build:live

# 进入生成的文件夹
cd docs/.vuepress

# docs.weiya.live
scp -r dist/* root@39.106.163.208:/var/website/docs

cd -
