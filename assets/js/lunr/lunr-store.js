var store = [{
        "title": "Trilium配置",
        "excerpt":"Trilium 是一个便捷的笔记软件。本篇博客记录trilium的配置过程。 在bash中下载trilium文件。 weget https://github.com/zadam/trilium/releases/download/v0.62.6/trilium-linux-x64-server-0.62.6.tar.xz 解压文件。 tar -xvf trilium-linux-x64-server-0.62.6.tar.xz mv trilium-linux-x64-server /opt/trilium 设置系统服务文件 /etc/systemd/system/trilium-service [Unit] Description=Trilium Daemon After=syslog.target network.target [Service] User=root Group=root Type=simple ExecStart=/opt/trilium/trilium.sh WorkingDirectory=/opt/trilium/ TimeoutStopSec=20 # KillMode=process leads to error, according to https://www.freedesktop.org/software/systemd/man/systemd.kill.html Restart=always [Install] WantedBy=multi-user.target Trilium默认端口为8080。打开浏览器，输入 ip/域名+8080 ，访问triliun网站，初始化密码。 不过当前端口设置为8080，需要修改 ~/trilium-data/config.ini 中的端口以及关闭ssl。 port=2024 https=true certPath=&lt;证书文件地址&gt; keyPath=&lt;证书私匙地址&gt; 重启trilium systemctl restart...","categories": [],
        "tags": ["配置"],
        "url": "/trilium%E9%85%8D%E7%BD%AE/",
        "teaser": null
      },{
        "title": "Emacs配置",
        "excerpt":"本笔记用于说明一些常用的emacs配置，emacs版本， snap-emacs-29 。 emacs29配置 emacs是一个可利用elisp内置语言和elpa仓库进行自定义扩展的文本编辑器。 相关网站： emacs官网 维基：emacs emacs-china论坛 Reddit: emacs emacs配置文件位于 ~/.emaca.d/init.el 或 ~/.emacs 中。 elpa 仓库配置 ELPA 镜像使用帮助 (setq package-archives '((\"gnu\" . \"http://mirrors.tuna.tsinghua.edu.cn/elpa/gnu/\") (\"nongnu\" . \"http://mirrors.tuna.tsinghua.edu.cn/elpa/nongnu/\") (\"melpa\" . \"http://mirrors.tuna.tsinghua.edu.cn/elpa/melpa/\"))) (package-initialize) ;; You might already have this line Dashboard 一个面板，显示近期文件和书签。 (use-package dashboard :ensure t :config (dashboard-setup-startup-hook)) valign 当向org和markdown文本中的表格中插入一些中文文档时，表格无法对齐。 valign插件可以辅助对齐。...","categories": [],
        "tags": ["配置"],
        "url": "/emacs%E9%85%8D%E7%BD%AE/",
        "teaser": null
      },{
        "title": "Clojure配置",
        "excerpt":"简介 clojure是一种安装在java虚拟机上的lisp方言。最近想在linux环境上尝试clojure的语言，配合emacs使用。现在记录安装过程。 环境Ubuntu20.04，emacs29。 安装Clojure Ubuntu20.04环境下apt中本身就包含Clojure的安装包，所以直接安装clojure即可。 sudo apt install clojure sudo apt install leiningen sudo apt install default-jre Emacs环境 elisp代码如下，保存在配置文档 /.emacs.d/init.el： ;;clojure interactive development environment that rocks! (use-package cider :ensure t) (use-package lsp-treemacs :ensure t) ;;语法检查 (use-package flycheck :ensure t) ;;自动补全 (use-package company :ensure t) ;;clojure主模式 (use-package clojure-mode :ensure t :config...","categories": [],
        "tags": ["配置"],
        "url": "/clojure%E9%85%8D%E7%BD%AE/",
        "teaser": null
      },{
        "title": "Lisp基础语法：指针与函数",
        "excerpt":"介绍lisp语言的指针和函数概念。 基础操作语法表 Grammer 功能 car 选取列表首项 cdr 选取列表非首项 eq 判断元素是否相等 if 条件分支 atom 是否为叶节点(不可分割、组合的原子) quote 为符号增加指向自身的引用 eval 返回符号的相邻引用值 cons 连接对象 set 设置符号指针 lambda 设置匿名函数 funcall 调用匿名函数 简介 以下是lisp语言的基本形式。 (symbol-1 symbol-2 ...) 每一个符号都可以展开为其它基本形式，或者和其它符号构成新的表达式，从而形成嵌套结构。 例如： (symbol-1 (symbol-2 symbol-3) symbol-4) 如果我们用 symbol-5 指向 (symbol-2 symbol-3) 这个整体，那么上述表达等价于： (symbol-1 symbol-5 symbol-4) 而如果我们用 symbol-6 指向 (symbol-1...","categories": [],
        "tags": ["lisp"],
        "url": "/lisp%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95-%E6%8C%87%E9%92%88%E4%B8%8E%E5%87%BD%E6%95%B0/",
        "teaser": null
      },{
        "title": "Lisp基础语法：列表",
        "excerpt":"在上一篇博客中，我们试图说明，lisp的一切对象都可以视为一种符号对于另一种符号的指向，同时介绍了指针型指向和函数型指向的基本语法。这一片笔记记录列表类型。 列表：cons, car ,cdr 列表是由括号 () 包裹的符号，符号之间用空格分开。每一个符号指向另一个列表或符号。 3 和 (+ 1 1 1) 在数量上的返回结果是相同的。如果我们仅仅想要标示一种物品的数量，我们更习惯用 3 。这是因为，每次提到该物品的数量时， 3 就读写意义上的能量消耗更小。 我们姑且把这类能量消耗更小的符号称为更精简的符号。 例如，当我们记录了一周的体温后，便可以用 本周体温.txt 来替代该文件中的体温数据本身。这时候，每一天的体温和本周体温便形成以下一对多的映射关系： (set 'week '(Mon Tue Wed Thr Fir Sat Sun)) 例如，设37.4~37.8摄氏度是低度发烧，而我们想要从一周中寻找低度发烧的 Monday ，那么我们不得不从 week 整体中选择 Monday 这一部分。 如果存在一个函数如下所示的返回制定位置的符号便好了： (select '低烧' from week) ;;we expecte: =&gt; Mon ;;Actually: =&gt; Symbol's...","categories": [],
        "tags": ["lisp"],
        "url": "/lisp%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95-%E5%88%97%E8%A1%A8/",
        "teaser": null
      },{
        "title": "Lisp基础语法：主语",
        "excerpt":"介绍一下lisp语言的主语。 前缀表达 前缀表达，又称波兰表示法（Polish notation），s表达式，操作符置于操作数前，例如： \\[\\text{+ 2 17 = 19}\\] (+ 2 17) ;;=&gt;19 如果仅仅是数字或者逻辑运算转换了一种表达方式，也许继续使用前缀表达是更好的。 但是如何在自然语言的角度去理解呢？ 一般的自然语言语句一般有以下三种形式： 主语－谓语－宾语 主语－谓语 谓语 试想一个基本的对话场景： 甲：吃饭了吗？ 乙：吃了。 乙的话，说完整了，是：我吃过饭了。 把谓词对应于function，主语和宾语对应于variable，而 吃了 作为接收我和饭的谓语，以lisp的前缀表达形式，可以表示为： (吃了 我 饭) 或者 (吃了 饭 我) 问题在于，第几个参数成为主语。前缀表达 + 2 19 是不必在意这个问题的。是 2 努力令自身补充了 19 这个数值，还是 19 稍稍增加了 2 这个数值，因为加法交换律的缘故，只要它们的结果都是 19，算术者便通通视为等价的。 但是，饭吃了我 和 我吃了饭...","categories": [],
        "tags": ["语法"],
        "url": "/lisp%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95-%E4%B8%BB%E8%AF%AD/",
        "teaser": null
      },{
        "title": "Calibre server 配置",
        "excerpt":"calibre-server是一种非常便利的线上电子阅读服务。 之前的服务器到期了，现在重新配置了calibre-server，整理一下操作步骤。 calibre 安装 操作系统，debian 12 * 64 安装依赖项。除了参考中列出的，本环境还缺少libxcb-cursor0： sudo apt update &amp;&amp; sudo apt install -y libfontconfig libgl1-mesa-glx libxcb-cursor0 从官网安装 calibre： wget https://download.calibre-ebook.com/linux-installer.sh sh linux-installer.sh 书库安装在/opt/calibre目录下。 启动 calibre 如果之前没有创建过书库的话，可以通过 calibre-db 命令创建新的电子书库。 calibredb create_database [path to booklib] 不过我现在的任务是恢复之前的书库。 calibre server从8080端口进行网络服务，而vultr默认打开防火墙。现在需要开放服务器端口8080以允许流量通过： ufw allow 8080 从备份书库启动 calibre-server： calibre-server [booklib name] 从浏览器访问服务器 http://ip:8080...","categories": [],
        "tags": ["配置"],
        "url": "/calibre-server-%E9%85%8D%E7%BD%AE/",
        "teaser": null
      },{
        "title": "Tlaplus pluscal",
        "excerpt":"探索一下 tlaplus pluscal 的基本功能。 Q1：Pluscal代码的基本格式是怎样的？ 一个标准的Pluscal代码由以下几部分组成。 ---- (1) MODULE wire ---- EXTENDS Integers \\* (2) (*--algorithm wire \\* (3)     variables (4)         people = {\"alice\", \"bob\"},         acc = [alice |-&gt; 5, bob |-&gt; 5]; begin \\* (5)     skip; end algorithm;*) (3) ==== \\* (1) 可以看到，一个标准的 Pluscal 代码由上述五部分组成。 （1）首尾标识和模型名 ---- MODULE name...","categories": [],
        "tags": ["TLAplus"],
        "url": "/tlaplus-Pluscal/",
        "teaser": null
      },{
        "title": "Tlaplus：电报问题",
        "excerpt":"在一个小编程中测试tlaplus。 电报问题描述 现在请你设计一个电报交换系统，包括以下几个条件： 每一个电报只能在银行中两个不同的人间进行传递，而且每个电报至少一美元。 如果电报是成功的，那么电报的值便会从发送者方减去，而加在接收方的账户中。 如果电报失败，两个账户将没有任何改变。 电报不能让任何一个账户是负值。 多个电报可能同时发生。 单进程建模 单进程代码 EXTENDS Integers (*--algorithm wire variables people = {\"Zhang\", \"Wang\"}, acc = [p \\in people |-&gt; 5], sender = \"Zhang\", reciver = \"Wang\", amount \\in 1..4; define NoOverdrafts == \\A p \\in people: acc[p] &gt;= 0 end define; begin Withdraw: acc[sender]...","categories": [],
        "tags": ["形式化验证"],
        "url": "/tlaplus-%E7%94%B5%E6%8A%A5%E9%97%AE%E9%A2%98/",
        "teaser": null
      },{
        "title": "Tlaplus：操作符和函数",
        "excerpt":"了解一下 tlaplus 的操作符和函数。 TLA+ 的变量 Q1：TLA+ 有什么自定义操作符？ 我比较感兴趣的是用户自定义操作符： set ++ elem == set \\union {elem} set -- elem == set \\ {elem} &gt;&gt; {1, 2} ++ 3 {1, 2, 3} &gt;&gt; {1, 2} – 2 {1} 现在可不可以吧fovis之类的定义了呢？ mio \\ifvp vio \\da ilio == IFVP(mio, vio, ilio) 好像不可以。 mio vio -da...","categories": [],
        "tags": ["TLAplus"],
        "url": "/tlaplus-%E6%93%8D%E4%BD%9C%E7%AC%A6%E5%92%8C%E5%87%BD%E6%95%B0/",
        "teaser": null
      },{
        "title": "Hbase 配置 (失败)",
        "excerpt":"目标 熟悉hbase配置的基本流程 集群部署 环境说明 两台ubuntu20.04 VPS。 hadoop 在两个vps中用 ssh-keygen -t rsa 命令生成密匙文件，复制到另一个vps的 ~/.ssh/authorized_keys 中，实现免密登录。 在/etc/hosts 中修改ip-主机名映射关系。在/etc/hostname文件中修改主机名，reboot 使主机名修改生效。 下载jdk-11并解压，增加JAVA_HOME 到 ~/.bashrc 文件中，用source 命令使之生效。 从官网下载hadoop-3.9.2版本并解压。 修改文件 hadoop-env.sh 增加内容 export JAVA_HOME=/root/src/jdk-11 HDFS_DATANODE_USER=root HDFS_NAMENODE_USER=root HDFS_SECONDARYNAMENODE_USER=root core-site.xml 修改配置 &lt;configuration&gt; &lt;property&gt; &lt;name&gt;fs.defaultFS&lt;/name&gt; &lt;value&gt;hdfs://G:9000&lt;/value&gt; &lt;/property&gt; &lt;property&gt; &lt;name&gt;hadoop.tmp.dir&lt;/name&gt; &lt;value&gt;/root/data/tmp&lt;/value&gt; &lt;/property&gt; &lt;/configuration&gt; hdfs-site.xml 修改配置 &lt;configuration&gt; &lt;property&gt; &lt;name&gt;dfs.namenode.name.dir&lt;/name&gt; &lt;value&gt;/root/data/namenode&lt;/value&gt; &lt;/property&gt;...","categories": [],
        "tags": ["失败","分布式"],
        "url": "/hbase-%E9%85%8D%E7%BD%AE-(%E5%A4%B1%E8%B4%A5)/",
        "teaser": null
      },{
    "title": "Portfolio",
    "excerpt":" ","url": "/portfolio/"
  },{
    "title": null,
    "excerpt":"","url": "/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "/assets/js/lunr/lunr-store.js"
  },{
    "title": "分类",
    "excerpt":"","url": "/tags/"
  },{
    "title": "归档",
    "excerpt":"","url": "/year-archive/"
  },{
    "title": null,
    "excerpt":"","url": "/page2/"
  },{
    "title": null,
    "excerpt":"","url": "/page3/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "/feed.xml"
  }]
