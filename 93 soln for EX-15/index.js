// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

// import fs from "fs/promises"
// import fsn from "fs"
// import path from "path"
// // console.log(fs);
// const basepath = "C:\\Backend\\93 soln for EX-15"
// let files = await fs.readdir(basepath)
// console.log(files);

// let extensions = []
// for (const item of files) {
//     console.log('running for ', item);
//     let ext = item.split(".")[item.split(".").length - 1]
//     // console.log(ext);
//     if (ext != "js" && ext != "json" && item.split(".").length > 1) {
//         if (fsn.existsSync(path.join(basepath, ext))) {
//             //Move the file to this directory if its not a js or json file
//             fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
//         } else {
//             fs.mkdir(ext)
//             fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
//         }
//     }
// }

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "C:\\Backend\\93 soln for EX-15";

async function organizeFiles() {
    try {
        let files = await fs.readdir(basepath);
        console.log(files);

        for (const item of files) {
            console.log('Running for ', item);
            let ext = path.extname(item).slice(1);  // Get the file extension without the dot
            if (ext && ext !== "js" && ext !== "json") {
                const extDir = path.join(basepath, ext);
                try {
                    if (!fsn.existsSync(extDir)) {
                        await fs.mkdir(extDir);  // Create the directory if it doesn't exist
                    }
                    await fs.rename(path.join(basepath, item), path.join(extDir, item));  // Move the file
                } catch (error) {
                    console.error(`Error processing file ${item}:`, error);
                }
            }
        }
    } catch (error) {
        console.error("Error reading directory:", error);
    }
}

organizeFiles();
