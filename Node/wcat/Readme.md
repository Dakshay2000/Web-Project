# Build WCAT commands


It is used to display or make a copy content of one or more files in the terminal 

General Syntax:
node wcat.js [options] [filepaths]
option to remove big line break (-s)
option to add line number to non empty lines (-b)
option to add line numbers to all lines (-n) 

Commands:
<br>
<br>1- node wcat.js filepath => displays content of the file in the terminal  ✔
<br>2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order. ✅ 
<br>3- node wcat.js -s filepath => convert big line breaks into a singular line break
<br>4- node wcat.js -n filepath => give numbering to all the lines
<br>5- node wcat -b filepath => give numbering to non-empty lines
<br>6- node wcat.js -cr {filepath} => Creates a file with a given file name.
<br>7- node wcat.js -con {oldFilePath} {newFilePath} => It copies data from given old file and creates a new file and it will paste it there.
<br>8- node wcat.js -don {oldFilePaths} {newFilePath} => It copies data from all the given old files and creates a new file and it will paste it there.
<br>9- node wcat.js -ad {filepath} => It adds "$" to every line(only non-empty lines).
<br>10- node wcat.js -tac {filepaths}  => It prints content of file in reverse order(like printing lines from bottom to top).
<br>We can mix and match the options(-s,-n,-b).

Edge cases:
<br>
<br>
1- If file entered is not found then it gives file does not exist error. ✅ <br>
2- -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.<br>
3- -s and any or both -n and -b present then -s will be executed first and then -n and -b according second rule 
