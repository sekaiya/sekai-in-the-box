@ECHO OFF
ruby deploy.rb
IF %ERRORLEVEL%==1 (
pause
exit
)
echo "SUCCESS: comment check"
echo "SUCCESS: show status check"
FOR /F "delims=" %%a IN (mail.properties) DO (
   set MAIL=%%a
)
C:/google_appengine/appcfg.py --email=%MAIL% update C:/repositories/sekai-in-the-box

pause