@ECHO OFF
ruby deploy.rb
IF %ERRORLEVEL%==1 (
pause
exit
)
echo "SUCCESS: comment check"
echo "SUCCESS: page status check"
echo "deploy done"

pause