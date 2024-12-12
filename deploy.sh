cd ~/.ssh

# copy deployment package to server
rsync -a -e 'ssh -o "IdentitiesOnly=yes" -i digitalocean' /Users/zach.moorman/Documents/GitHub/zzz_personal/blog/build zach@144.126.223.221:/home/zach/sites/blog --exclude .env

