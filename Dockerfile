# 基础镜像
FROM node:12


# 指定当前用户(codemao用户没有写入权限)
# USER codemao

# Workdir is unprivileged user home
WORKDIR /usr/src/app

# 安装依赖
COPY package.json /usr/src/app
# COPY package-lock.json /usr/src/app
COPY /public/.npmrc /usr/src/app

# gitlab npm仓库token
ARG CI_JOB_TOKEN=''

RUN npm install

# RUN npm run bootstrap

# 复制代码
COPY . /usr/src/app/

# 声明环境变量
ARG QN_AKEY=''
ARG QN_SKEY=''
ARG front_env=''

# build正式环境
RUN npm run build-doc

# 暴露内部端口号
EXPOSE 5000

# 起服务
ENTRYPOINT ["npm", "run"]
CMD ["production"]