@echo off
set CLASSPATH=

set _INPUT="testmp3.mp3.encrypted"
set _OUTPUT=%cd%
java -Xmx512M -jar SuperEncryption-1.0.jar -decrypt -i "%_INPUT%" -o "%_OUTPUT%"

pause