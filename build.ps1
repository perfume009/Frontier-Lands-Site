$nodeDir = "C:\Users\Matvey\AppData\Local\Temp\node-extracted\node-v22.14.0-win-x64"
$env:PATH = "$nodeDir;$env:PATH"
& "$nodeDir\npm.cmd" run build
