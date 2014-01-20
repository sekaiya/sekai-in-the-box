#!/bin/sh

ruby deploy.rb
if [ $? = 1 ]
then
	exit
fi
echo "SUCCESS: comment check"
echo "SUCCESS: page status check"
echo "deploy done"
