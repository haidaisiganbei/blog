(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有配置及所在文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list --show-origin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git提交时的用户名和邮箱")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置当前项目的用户名和邮箱")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email\n")])])]),n("h2",{attrs:{id:"帮助"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#帮助"}},[t._v("#")]),t._v(" 帮助")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看命令的帮助文档")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verb"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看命令的简单介绍")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verb"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## -h")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"获取仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取仓库"}},[t._v("#")]),t._v(" 获取仓库")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 仓库地址 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地仓库名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),n("h2",{attrs:{id:"记录每次更新到仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#记录每次更新到仓库"}},[t._v("#")]),t._v(" 记录每次更新到仓库")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前文件状态")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前文件状态简览")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跟踪新文件 / 暂存已修改的文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件名"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## | <文件路径## | <表达式>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对比已暂存和未暂存的区别")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对比已暂存和最后一次提交的区别")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --staged\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区的文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'说明'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跳过暂存区提交所有已跟踪的文件修改")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 文件\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从暂存区中移除")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached 文件\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移动文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" file_from file_to\n")])])]),n("h2",{attrs:{id:"忽略文件-gitigonre"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件-gitigonre"}},[t._v("#")]),t._v(" 忽略文件 .gitigonre")]),t._v(" "),n("div",{staticClass:"language-txt extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("所有空行或者以 # 开头的行都会被 Git 忽略。\n\n可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。\n\n匹配模式可以以（/）开头防止递归。\n\n匹配模式可以以（/）结尾指定目录。\n\n要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。\n")])])]),n("h2",{attrs:{id:"提交记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交记录"}},[t._v("#")]),t._v(" 提交记录")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看提交记录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看提交详情")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定最新的几次")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看简略信息")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --stat\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定格式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("full\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示分支与合并图形")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph\n")])])]),n("h2",{attrs:{id:"撤销操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#撤销操作"}},[t._v("#")]),t._v(" 撤销操作")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追加提交")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消暂存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消修改，恢复到该文件上次提交时的样子")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"远程仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库和地址")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## <url>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 抓取远程数据")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉去远程数据")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## <branch>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某个远程仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重命名远程仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("old-remote"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## <new-remote>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h2",{attrs:{id:"标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -l\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag --list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## -m "标签说明"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建轻量标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看标签信息")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后期打标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.查看对应提交历史的哈希值")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2.在对应的提交历史上打标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##  <hash>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送标签到远程仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## <tag-name>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送全部标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## --tags")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## --delete <tag-name>")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检出标签")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\n")])])]),n("h2",{attrs:{id:"分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新分支dev")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到新分支dev")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建分支dev并切换")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制删除分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并分支 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看那些分支合并到当前分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --merged\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看那些分支还没合并到当前分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --no-merged\n\n\n")])])]),n("h2",{attrs:{id:"分支使用策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支使用策略"}},[t._v("#")]),t._v(" 分支使用策略")]),t._v(" "),n("ul",[n("li",[t._v("master    稳定分支")]),t._v(" "),n("li",[t._v("develop  开发分支")]),t._v(" "),n("li",[t._v("topic        主题分支")])])])}),[],!1,null,null,null);s.default=e.exports}}]);