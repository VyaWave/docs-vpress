#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# GITHUB PAGES

# 生成静态文件
yarn build:github-pages

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:ayameng/ayameng.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 大小写敏感
git push -f git@github.com:AyAmeng/magic-wpress.git master:gh-pages

cd -
