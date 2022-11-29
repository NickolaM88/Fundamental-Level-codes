function solve(filePath) {
    let fileNameStartIndex = filePath.lastIndexOf("\\") + 1;
    let fileExtansionStart = filePath.lastIndexOf(".") + 1;
    let fileNameIndexEnd = fileExtansionStart - 1;
    let fileName = filePath.substring(fileNameStartIndex, fileNameIndexEnd);
    let fileExtension = filePath.substring(fileExtansionStart);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

solve("C:\\Internal\\training-internal\\Template.pptx")