const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, './');

function renameMDtoMDX(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dirPath, file);
            fs.stat(filePath, (error, stat) => {
                if (error) {
                    console.error('Error stating file:', error);
                    return;
                }

                if (stat.isDirectory()) {
                    renameMDtoMDX(filePath);
                } else if (path.extname(filePath) === '.md') {
                    const newFilePath = filePath.replace('.md', '.mdx');
                    fs.rename(filePath, newFilePath, (renameError) => {
                        if (renameError) {
                            console.error('Error renaming file:', renameError);
                        } else {
                            console.log(`Renamed: ${filePath} -> ${newFilePath}`);
                        }
                    });
                }
            });
        });
    });
}

renameMDtoMDX(directoryPath);