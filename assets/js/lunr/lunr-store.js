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
        "title": "Minio 的配置过程",
        "excerpt":"如果只是想用分布式文件系统，其实hadoop也可以，但在配置hbase的过程中出现的节点丢失和高cpu占用率问题还是让我想尝试其它的分布式框架。这次记录minio的配置过程。 介绍 Minio是一个开源的分布式对象存储服务，专注于高性能、高可用性和轻量级的设计，有以下两个基本特征： 对象存储服务：MinIO 是一个对象存储服务，它允许用户以类似文件系统的方式存储和检索大规模数据。这种存储方式适用于云原生应用程序、大数据分析、备份和归档等场景。 分布式架构：MinIO 使用分布式架构，可以在多个节点上并行存储和检索数据。这种架构可以提供高扩展性和高性能，使得 MinIO 能够应对大规模数据存储的需求。 步骤 环境 ubuntu20.04 安装 wget https://dl.min.io/server/minio/release/linux-amd64/archive/minio_20240406052602.0.0_amd64.deb -O minio.deb sudo dpkg -i minio.deb mkdir /data mkdir /data/drive1 mkdir /data/drive2 mkdir /data/drive3 mkdir /data/drive4 配置: 在/etc/hosts 中 ip_1 N1 ip_2 N2 在~/.bashrc中 export MINIO_ACCESS_KEY=minioadmin export MINIO_SECRET_KEY=minioadmin export CI=true export MINIO_CI_CD=true 启动: 在两个节点中： nohup...","categories": [],
        "tags": ["配置","minio"],
        "url": "/minio-%E7%9A%84%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B/",
        "teaser": null
      },{
        "title": "Segfault简介",
        "excerpt":"记录一个可以免费使用vps的网站，segfault。 直接登录即可获得一个vps，会给出一个Secret用于再次登录。 限制 当然有一定限制： 申请的时候等60秒，这个无所谓。 网络流量受限制，但是实际上登录后的下载速度并不慢。 cpu受限，但是对于运行emacs之类小组件而言的没有什么问题，可用外存估计不过1G，因为之前单单尝试sudo update sudo upgrade 磁盘空间就满了。 可能被自动封禁，以及登出后服务器关闭，所以不适合需要持续化存储的作业。 根据 https://thc.org/sf/token 的说法，token 是非卖品，你需要访问以下telegram 频道： 然后用符合下述标准的理由提出申请： 参与讨论。 帮助管理员/系统管理员；管理群聊。 分享你的想法、评论和顾虑。 寻找漏洞。 为社区做贡献的项目。 新颖且令人兴奋的项目。 拯救世界。 黑客行动主义和IT安全研究。 命令行登录 除了在网页端登录之外，还可以命令行登录。 在本地的~/.ssh 目录下，你需要把openssh 的私匙复制到id_sf-adm-segfault-net 中，把ssh_config 内容复制到 config 文件中。然后通过 ssh server-name 即可登录。当然也有 sftp 和 scp 命令用于传输文件。scp 的用法是： scp &lt;server-name&gt;:/path/to/file /local/path 关于外部端口访问 segfault的vps 默认不提供公网ip，所以是不能直接从外部计算机访问的，要访问需要用特定方式打开端口，在这里给出一种实现方案： #...","categories": [],
        "tags": ["简介"],
        "url": "/segfault%E7%AE%80%E4%BB%8B/",
        "teaser": null
      },{
        "title": "关于我在配置hbase中的一些问题",
        "excerpt":"现在系统已经重装，所以再去探究错误的原因和处理方案已经意义不大。现在把当时的日志整理以下，用以备忘。 问题一：高CPU占用率 当我把hbase启动失败的两个节点放置几天后查看，发现： 由于节点流量是有上限的，每个月100G。 😮‍💨😮‍💨😮‍💨 再对比一下性能消耗吧。 Hbase基于hadoop，而hadoop又是基于ssh协议进行文件传输，所以有时候top查看进程会发现sshd占用率高过100%。而minio就稳定得多。不过这种对比不能说明hadoop和minio的优劣，因为其中不包含只运行hadoop条件下的信息。不过hadoop还要连接到scala、Hive这些工具，进行csv到sql的文件转换，才能进行sql查询，相比之下，minio的确是要方便一些👍。 问题二：hosts文件自动更改 当我启动zookeeper或重启之后，没过多久hosts文件自动清空并增加 i a e属性。 当然重启还有一种情况，那就是 hosts 文件恢复默认配置。 这可能和vps服务商的默认配置有关。 lsattr file-name 查看属性 chattr +x file-name 增加x属性 chattr -x file-name 减少x属性 举例： root@J:/etc# lsattr hosts ----ia--------e----- hosts i（immutable）：表示文件或目录是不可变的，即不能被修改、删除、重命名或链接。只有超级用户（root）可以修改或删除该文件或目录。 a（append-only）：表示文件只能向其末尾追加数据，不能修改或删除文件中已有的数据。只有超级用户（root）可以修改或删除该文件。 e（extend）：表示文件或目录使用了ACL（Access Control List，访问控制列表）来控制访问权限，允许对文件或目录设置更细粒度的权限控制。 对策： root@J:/etc# chattr -i hosts root@J:/etc# chattr -a hosts root@J:/etc# chattr -e...","categories": [],
        "tags": [],
        "url": "/%E5%85%B3%E4%BA%8E%E6%88%91%E5%9C%A8%E9%85%8D%E7%BD%AEhbase%E4%B8%AD%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98/",
        "teaser": null
      },{
        "title": "如何使用 minio 进行数据库查询",
        "excerpt":"minio 提供了对s3存储对象的sql操作。一方面为了处理实验报告，另一方面也是为了增加可以使用的工具数量，所以需要增进对于mc sql的理解。 本篇博客处理以下几个问题： s3 是什么？ minio 上的何种对象可以视为 s3 对象？ 如何操作 S3 对象？ 如何把这种查询封装到emacs中？ s3 是什么？ Amazon Simple Storage Service（Amazon S3）是一种对象存储服务，提供行业领先的可扩展性、数据可用性、安全性和性能。各种规模和行业的客户都可以使用 Amazon S3 存储和保护任意数量的数据，用于数据湖、网站、移动应用程序、备份和恢复、归档、企业应用程序、IoT 设备和大数据分析。Amazon S3 提供了管理功能，使您可以优化、组织和配置对数据的访问，以满足您的特定业务、组织和合规性要求。 所以，S3, 全称Simple Storage Service，直译简单存储服务。那么 S3 Object 就是简单存储服务对象。 另外需要注意，s3o 文件一般要下载到本地进行处理，然后上传进行覆盖。 可以把minio上的何种对象视为s3对象？ mc sql --help 看看文档。 所以，可以把csv文件理解为一种s3 Object的实例。确实足够简单😊。 那只要把bash命令封装到elisp中就可以了。不过在这之前要先熟悉一下 csv文件的基本操作。 可以如何操作S3？ 打开 Libreoffice 创建几个数据， 按默认格式存储为csv文件...","categories": [],
        "tags": ["minio"],
        "url": "/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-minio-%E8%BF%9B%E8%A1%8C%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9F%A5%E8%AF%A2/",
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
