#!/bin/bash
set -e

branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ "$branch" != "development" ] ; then
  echo "You must be on the development branch"
  exit 2
fi

grunt
git checkout master
git --work-tree build add --all

echo "Message: "
read message

git --work-tree build commit -m "$message"
git push origin master
git symbolic-ref HEAD refs/heads/master && git reset --hard
