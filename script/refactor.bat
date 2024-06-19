@echo off
setlocal enabledelayedexpansion

rem 遍历当前目录下的所有 .md 文件
for %%F in (*.md) do (
    rem 获取文件名（不包含扩展名）
    set "filename=%%~nF"
    
    rem 创建同名文件夹（如果不存在的话）
    if not exist "!filename!" mkdir "!filename!"
    
    rem 将文件移动到对应的文件夹中
    move "%%F" "!filename!\"
)

echo 操作完成！
pause
