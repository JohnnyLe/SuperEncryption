@echo off
set CLASSPATH=
set _INPUT="testmp3.mp3"
set _OUTPUT=%cd%
java -Xmx512M -jar SuperEncryption-1.0.jar -encrypt -i "%_INPUT%" -o "%_OUTPUT%"

pause