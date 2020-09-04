/*
git config --global user.name "github的用户名"
git config --global user.email "github的邮箱"


1. git init 
		// 把文件托管给 git
2. git add . 
		// 保存代码
3. git commit -m 'master' 
		// 提交代码
4. git remote add origin https://github.com/sheng-23/root.git 
		// 拷贝自己的这行代码 创建仓库
5. git push -u origin master 
		// 提交代码到 github 

// -------------------------------

// 正常进公司以后步骤
1. 创建公钥 私钥
ssh-keygen -t rsa -C "你的github邮箱"
2. 打开公钥
cat ~/.ssh/id_rsa.pub\

git status	// 查看哪些文件修改了
git add 文件名 | .	// 保存到本地
git commit -m 'git代码注释'
git push origin 远程分支名

git log // 查看日志
git checkout -b 你的分支名 origin/master	// 创建本地分支
git branch -v 	// 查看本地分支
git branch -a 	// 查看远程分支
master - 分支 (文件夹1)
dev 文件夹2
分支->	文件夹
分支->	远程分支 本地分支

*/