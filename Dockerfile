FROM registry.saas.crland.com.cn/tools/nginx:1.21.4-alpine

#RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
#    && apk update && apk add curl bash tree tzdata

#RUN cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
#    && rm -rf /usr/share/nginx/html/*
# COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY dist /usr/share/nginx/html/ued-pc-web/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
