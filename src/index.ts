export function wavParser(base64sound: string): any {
    let byteString = atob(base64sound.split(',')[1]);
    let resultObject = {} as any;

    let fileSizeTMP = byteString.charCodeAt(7).toString(16)
        + byteString.charCodeAt(6).toString(16)
        + byteString.charCodeAt(5).toString(16)
        + byteString.charCodeAt(4).toString(16);
    resultObject.fileSize = parseInt(fileSizeTMP, 16);

    let length = byteString.charCodeAt(19).toString(16)
        + byteString.charCodeAt(18).toString(16)
        + byteString.charCodeAt(17).toString(16)
        + byteString.charCodeAt(16).toString(16);
    //resultObject.lengthOfFormatData = parseInt(length, 16);

    let formatTypeTMP = byteString.charCodeAt(21).toString(16)
        + byteString.charCodeAt(20).toString(16);
    resultObject.formatType = parseInt(formatTypeTMP, 16);

    let channelsTMP = byteString.charCodeAt(23).toString(16)
        + byteString.charCodeAt(22).toString(16);
    resultObject.channels = parseInt(channelsTMP, 16);

    let sampleRateTMP = byteString.charCodeAt(27).toString(16)
        + byteString.charCodeAt(26).toString(16)
        + byteString.charCodeAt(25).toString(16)
        + byteString.charCodeAt(24).toString(16);
    resultObject.sampleRate = parseInt(sampleRateTMP, 16);

    let bitsPerSampleTMP = byteString.charCodeAt(35).toString(16)
        + byteString.charCodeAt(34).toString(16);
    resultObject.bitsPerSample = parseInt(bitsPerSampleTMP, 16);

    let sizeOfDataTMP = byteString.charCodeAt(40).toString(16)
        + byteString.charCodeAt(41).toString(16)
        + byteString.charCodeAt(42).toString(16)
        + byteString.charCodeAt(43).toString(16);
    //resultObject.sizeOfData = parseInt(sizeOfDataTMP, 16);

    return resultObject;
}