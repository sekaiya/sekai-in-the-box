@ECHO OFF
ruby push_deploy.rb
IF %ERRORLEVEL%==1 (
pause
exit
)
echo "success comment check!!"
FOR /F "delims=" %%a IN (mail.properties) DO (
   set MAIL=%%a
)
python C:/google_appengine/appcfg.py --email=%MAIL% update C:/repositories/sekai-in-the-box

pause