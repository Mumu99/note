#Git  

**作者:林纳斯·托瓦兹**

##Git是什么?
> Git是目前世界上最先进的分布式版本控制系统

##将版本库分为两部分:
* 本地版本库
* 远程版本库(github)

##木木的git
**用户名 mumu 2411639676@qq.com**  

##配置
- git config --global user.name "Your Name" 
- git config --global user.email "email@example.com" 
- git config user.name 查看配置的姓名
- git config user.email 查看配置的邮箱

##git指令
- wq保存退出
- q退出
- q!强制退出
- mkdir xxx 新建文件夹
- vi x.txt 新建文件（Visual editor）
- 输入 i 进入编辑模式
- ESC + ：+ wq 保存并退出
- cd xxx 进入xxx目录
- cd .. 返回上一级目录
- ls 列出当前文件夹中所有文件
- pwd 显示当前目录
- cat x.txt 显示文件内容
- clear 清屏
- pwd：显示当前目录的路径
- cat xx：查看xx文件内容
- git init：吧当前的目录变成可以管理的git仓库，生成隐藏的.git文件
- git add xx：把xx文件添加到暂存区
- git commit -m “xx”：提交文件 -m后面的是注释
- git status：查看仓库状态
	- 红色：位于工作区
	- 绿色：位于暂存区
	- 没有显示：位于版本区
- git log：查看历史记录
- git reset --hard HEAD^：网上回退一个版本
- git reflog：查看历史记录的版本号id
- git checkout -- xx：把xx文件在工作区的修改全部撤销
- git rm xx：删除xx文件 之后要commit
- git remote add origin https://- - github.com/qiuhaifeng01/a.git 关联一个远程库
- git push -u（第一次要用-u以后不用）- - origin master：把当前master分支推送到远程库
- git clone https://github.com/xxxxx   从远程库中克隆
- git checkout -b dev：创建dev分支 并切换到dev分支上
- git branch：查看当前所有的分支
- git checkout master：切换回master分支
- git merge dev：在当前分支合并dev分支
- git branch -d dev：删除dev分支
- git branch xxx：创建分支xxx
- git remote：查看远程库信息
- git remote -v查看远程库的详细信息
- git pull origin master 将远程库的更新拉取到本地来
- git push origin master git会把master分支推送到远程库对应的分支上
- git fetch origin dev1:dev2 git会把dev1分支拉取到本地dev2分支上来
##创建版本库
- 1)git init初始化本地版本库
	- 创建成功会提示 Initialized empty Git repository in D:study/1108_Web/Web前端课程/直播课/高级部分/SVN课程/0229/test/.git/

	- 没有初始化执行git命令，会提示fatal: Not a git repository (or any of the parent directories): .git	
	
	- 你还会发现目录上多出一个.git的文件夹,这个文件夹是Git来跟踪管理版本库的，不要去修改这个文件里的内容。
- 2)git add x.txt添加指定文件到仓库中
	- 不会有任何提示，但是提交成功了

	- 失败会提示fatal: pathspec 'x.txt' did not match any files

	- 可能会出现警告，由于linux和window的换行符不一致导致的。

	- 警告内容：warning: LF will be replaced by CRLF in a.txt.
 
	- 解决方式：git config --global core.autocrlf false 
- 3)怎么查看有没有添加成功呢？
	- git status **红色表示在工作区，绿色表示在暂存区**
- 4)git commit -m 'xxx'提交所有文件

	- 提交成功会提示：[master (root-commit) 88bbb64] first commit
 	1 file changed, 2 insertions(+)
 	create mode 100644 x.txt

	- 如果只输入git commit会出问题，ESC + ：+ wq 退出就好
##git的三区(git将本地仓库分为三个区域)
* 工作区:开发代码的地方(没有版本控制)
	* 新建一个文件
	* 修改一个文件
* 暂存区:暂时保存的地方(没有版本控制)
	* git add 文件	
* 版本区:代码进行git版本控制的地方
	* git commit - "xxx" 

##版本回退
![版本回退](./images/bb.png)  
* git reset --hard HEAD^ 版本回退(一个^代表回退一次);
* git reset --hard Obfafd 回退到指定的commit id 版本

##差异对比

* git diff：比较工作区和暂存区
* git diff --cached：比较暂存区和版本区
* git diff master：比较工作区与版本区

##日志+版本号

* git log：显示从最近到最远的所有提交日志
* git reflog：显示每次提交(commit)的commit id

##删除文件

* git rm x.txt 删除文件
* git rm -r x.txt 删除文件夹

##分支

* git checkout -b dev：创建分支，并切换到dev分支
* git checkout master：切分支
* git merge dev 合并dev分支到当前分支
* git branch 查看分支
* git branch -d dev 删除指定分支
* git diff branch1 branch2 显示出两个分支之间所有差异的文件的详细差异

## 版本冲突

> 合并分支的时候,如果在同一个文件,在同一个地方,都修改了或新增内容会引起版本冲突  
> 解决版本冲突的最好办法就是手动解决,去文件里面直接修改  

## 版本控制系统
![集中式与分布式的区别](./images/qb.png);