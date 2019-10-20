# LearnWeb

web 前端学习

### 一、VsCode 常用插件

1、TabNine

2、Vetur

3、HTML CSS Support

4、HTML Snippets

5、JavaScript（ES6）code

6、Code Runner

7、GitLens

8、Beautify

9、View In Browser

10、JS-CSS-HTML Formatter

vscode 保存文件是格式化
https://blog.csdn.net/userkang/article/details/84302629

### 部署到 tomcat

vue 项目如何部署到 Tomcat 中
1，假设你要访问的项目名称为‘hms’

2，在 Tomcat 的 webapps 下创建 hms 文件夹，

3，配置 config/index.js 文件，设置 assetsPublicPath: '/hms/'

    （解释：这里改为这个配置之后，最后编译产生的index.html中相关路径也会带上‘/hms’,不会报404的错误了）

4，在项目运行“npm run build:prod”命令，生成 dist 文件夹，dist 文件夹中包含 static 和 index.html

5，将 dist 文件夹中 static 和 index.html 复制到 Tomcat 中 webapps 的 hms 文件夹中

6，启动 Tomcat，ip:port/hms，例如：http://localhost:8081/hms/即可访问到Vue项目。

**特别注意**
1、router/index.js 中需要配置：base: '/wanandroid/',

2、config/index.js 配置的是 build 下面的 不是 dev 下面的，切记
