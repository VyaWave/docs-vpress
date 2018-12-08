---
sidebarDepth: 2
---

# Nginx

![1](../assets/nginx/3.png)

---

<!-- 🎟🤹‍🤹‍🎭🎬🎼🥁🎸🚗🚌🚁✈️🚀⛵️🚤🛥🛳⛴⛽️🚦🚥🚧🚏🗽
🗼🏰🎠
⛱🏖🏝🏜🌋🏂🏋️‍🤸🏻‍🤸🏼‍⛹️‍⛹️‍🤺🏄‍🗝🛍🎁🎊🎉🎀🛍📦🎏📯📄🗞🔈📣
⛺️🗻🗻🏔⛰🏤🏥🌆🌁☎️🎥⏰🛢⚒⛏💎💰💡⌛️💣🔪⚙️💉🌡🛁🛀🏿🔑
🏄‍🏊‍🏊‍🚣‍🏆🚴‍🥇🥈🥉🏅🎖🎗🏵🎫🌊🍎🍋🍓🍇🍉🍅🍆🥝🌽🍖🍗
🐴🐌🐝🐋🐬🐅🐆🐳🐪🐘🐏🕊🐇🐓🦌🐎🐿🐉🐲🌸🌼🌻🌞🌝🍄🌾
🍥🍦🍭🎂🍭🍿🍩🍪🌰🥜🍺🍻☕️🍶🍷🥂🥃🍹🍾🏈🏀🥊⛳️🥋🎋🌱
🔕🔔🔊🗯💭🇨🇳🎍⭐️✨🌈🌚☄️💥🔥☀️🌤⛅️🌥☁️🌦🌧⛈🌩🌨❄️⛲️
🍱🍛 -->

## 一. 安装

### 1. 安装编译工具及库文件

`yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel pcre pcre-devel`

### 2. `首先要安装 PCRE 作用是让 Nginx 支持 Rewrite 功能。`

- 2-1. 下载 PCRE 安装包

`wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz`

- 2-2. 解压安装包:

`[root@bogon src]# tar zxvf pcre-8.35.tar.gz`

- 2-3. 进入安装包目录

`[root@bogon src]# cd pcre-8.35`

- 2-4. 编译安装

```shell
[root@bogon pcre-8.35]# ./configure
[root@bogon pcre-8.35]# make && make install
```

- 2-5. 查看 pcre 版本

```shell
[root@bogon pcre-8.35]# pcre-config --version
```

### 3. 安装 Nginx

- 3-1 下载 Nginx

```shell
[root@bogon src]# wget http://nginx.org/download/nginx-1.6.2.tar.gz
```

- 3-2 解压安装包

`[root@bogon src]# tar zxvf nginx-1.6.2.tar.gz`

- 3-3 进入安装包目录

`[root@bogon src]# cd nginx-1.6.2`

-3-4 编译安装

```shell

[root@bogon nginx-1.6.2]# ./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35
[root@bogon nginx-1.6.2]# make
[root@bogon nginx-1.6.2]# make install

```

- 3-5、查看 nginx 版本

`[root@bogon nginx-1.6.2]# /usr/local/webserver/nginx/sbin/nginx -v`

到此，nginx 安装完成。

## 2. 配置

1. 创建 Nginx 运行使用的用户 www：

```ts

[root@bogon conf]# /usr/sbin/groupadd www
[root@bogon conf]# /usr/sbin/useradd -g www www

```

2. 配置 nginx.conf ，将/usr/local/webserver/nginx/conf/nginx.conf 替换为以下内容

```nginx
user root;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    use epoll;
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    #default_type        text/html;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;
    server_names_hash_bucket_size 128;
    client_header_buffer_size 32k;
    large_client_header_buffers 4 32k;
    client_max_body_size 8m;

    tcp_nopush on;
    keepalive_timeout 60;
    tcp_nodelay on;
    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;
    fastcgi_buffer_size 64k;
    fastcgi_buffers 4 64k;
    fastcgi_busy_buffers_size 128k;z
    fastcgi_temp_file_write_size 128k;
    gzip on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 2;
    gzip_types text/plain application/x-javascript text/css application/xml;
    gzip_vary on;

    server {
        listen       80;
        server_name  weiya.design;
        root         /var/www/magellan/;
        # index    index.html;
        # Load configuration files for the default server block.

        location / {
          root /var/www/magellan/static/;
          index index.html;
        }

        error_page 404 /404.html;
        location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
          location = /50x.html {
        }
    }


    server {
        listen       80;
        server_name  docs.weiya.live;
        root         /var/www/magellan/;
        # index    index.html;
        # Load configuration files for the default server block.

        location / {
          proxy_pass http://127.0.0.1:8000/;
        }


        error_page 404 /404.html;

        location = /40x.html {

        }
        error_page 500 502 503 504 /50x.html;
          location = /50x.html {
        }
    }

    server {
        listen       80;
        server_name  docs.weiya.design;
        root         /var/www/magellan/;

        location / {
          proxy_pass http://127.0.0.1:3000/;
        }

        error_page 404 /404.html;

        location = /40x.html {

        }

        error_page 500 502 503 504 /50x.html;

        location = /50x.html {

        }
    }
}
```

3. 检查配置文件 nginx.conf 的正确性命令：

`[root@bogon conf]# nginx -t`

## 3. 使用

```ts
service nginx start
service nginx restart
service nginx stop

```

## Yum

```ts

1. rpm -qa|grep 软件包名

2. rpm -ql 软件包名  (l是L的小写,不是坚线)

```

## Error

```ts


28
down vote
accepted
I will recommend stopping nginx by killing it's master process first. The nginx is not shutdown properly may be because of that it can't be stopped using init script.

ps -ef |grep nginx

This will show you the PID of nginx master process. Like you mentioned above:

root 19506 1 0 2013 ? 00:00:00 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf

Kill it using

kill -9 19506

Verify once again whether there is any nginx process running or port 80 is occupied. If you see any process is bind to port 80, Identify the PID and check if it can be killed.

ps -ef |grep nginx

netstat -tulpn |grep 80

make sure the filesystem is fine and you can read/write to /var file system. Then Start nginx

service nginx start

```
