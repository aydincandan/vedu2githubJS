# vedu2githubJS

https://medium.com/kodcular/k%C4%B1saca-git-ba0877d56663

git(clone-pull-add-commit-push)

git clone https://github.com/aydincandan/xxxxx.git {diyerek kendi repomuzu locale çekelim}

cd xxxxx {içine girelim}

git config --global user.name "aydincandan"

git config --global user.email "aydincandan@gmail.com"

<repeat point>

git status

git pull {illaki diyelim, remote tarafı güncellenmiş olabilir}

{şimdi klasöre bazı dosyalar ekle, veya varolan bazı dosyaların içeriğini değiştir}

	git add . {diyerek yukarıdaki değişiklikleri INDEX'(stage?) bildiriyoruz.}

	git commit -m "tüm değişiklik ve eklemelerin bu şekilde bir açıklamasını yazıyoruz"

	git push {ve remote'a gönderiyoruz}

{şimdi de remote tarafına geçip 'Create New File' ile bir dosya ekleyelim yada bir dosyayı editleyelim}

<goto repeat>


http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server

http-server -o
