const path = require('path');

// 给定的 Markdown 链接
const markdownLinks = [

    '- [草莓酱](dishes/condiment/草莓酱/草莓酱.md)',
    '- [葱油](dishes/condiment/葱油.md)',
    '- [蒜香酱油](dishes/condiment/蒜香酱油.md)',
    '- [糖醋汁](dishes/condiment/糖醋汁.md)',
    '- [糖色](dishes/condiment/糖色.md)',
    '- [油泼辣子](dishes/condiment/油泼辣子/油泼辣子.md)',
    '- [油酥](dishes/condiment/油酥.md)',
    '- [炸串酱料](dishes/condiment/炸串酱料.md)',
    '- [蔗糖糖浆](dishes/condiment/蔗糖糖浆/蔗糖糖浆.md)',

];

// 提取路径并修改的函数
function extractAndModifyPaths(markdownLinks) {
    const modifiedLinks = [];

    markdownLinks.forEach(link => {
        // 使用正则表达式匹配路径
        const match = /\((.+?)\)/.exec(link);
        if (match) {
            const originalPath = match[1]; // 获取括号中的路径部分
            let newFilePath = originalPath;
            const dirname = path.dirname(originalPath);
            const basename = path.basename(originalPath, '.md');
            if (!dirname.includes(basename)) {
                const folderPath = path.posix.join(dirname, basename);
                newFilePath = path.posix.join(folderPath, `${basename}.md`);
                newFilePath.replace(/\\/g, '/')
            }
            // 构建修改后的 Markdown 链接
            const modifiedLink = link.replace(originalPath, newFilePath);
            modifiedLinks.push(modifiedLink);
        } else {
            modifiedLinks.push(link); // 如果未找到路径，保持原样
        }
    });

    return modifiedLinks;
}

// 执行提取和修改路径
const newMarkdownLinks = extractAndModifyPaths(markdownLinks);

// 输出修改后的 Markdown 链接
newMarkdownLinks.forEach(link => {
    console.log(link);
});