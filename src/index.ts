export function wavParser(base64sound: string): any {
    let byteString = "";

    if (base64sound.indexOf("audio/wav")) {
        byteString = atob(base64sound.split(',')[1]);
    } else {
        byteString = atob(base64sound);
    }

    let ChunkID = byteString.charAt(0) + byteString.charAt(1) + byteString.charAt(2) + byteString.charAt(3);

    let Format = byteString.charAt(8) + byteString.charAt(9) + byteString.charAt(10) + byteString.charAt(11);

    let SubChunk1ID = byteString.charAt(12) + byteString.charAt(13) + byteString.charAt(14) + byteString.charAt(15);

    if (ChunkID != "RIFF" || Format != "WAVE" || SubChunk1ID != "fmt ") {
        console.error("Wrong type of file!");
        return ;
    }

    let resultObject = {} as any;

    resultObject.ChunkID = ChunkID;

    let fileSize = byteString.charCodeAt(7).toString(16)
        + byteString.charCodeAt(6).toString(16)
        + byteString.charCodeAt(5).toString(16)
        + byteString.charCodeAt(4).toString(16);
    resultObject.ChunkSize = parseInt(fileSize, 16);

    resultObject.Format = Format;
    resultObject.SubChunk1ID = SubChunk1ID;

    let length = byteString.charCodeAt(19).toString(16)
        + byteString.charCodeAt(18).toString(16)
        + byteString.charCodeAt(17).toString(16)
        + byteString.charCodeAt(16).toString(16);
    resultObject.SubChunk1Size = parseInt(length, 16);

    let formatType = byteString.charCodeAt(21).toString(16)
        + byteString.charCodeAt(20).toString(16);
    resultObject.AudioFormat = parseInt(formatType, 16);

    let channels = byteString.charCodeAt(23).toString(16)
        + byteString.charCodeAt(22).toString(16);
    resultObject.NumChannels = parseInt(channels, 16);

    let sampleRate = byteString.charCodeAt(27).toString(16)
        + byteString.charCodeAt(26).toString(16)
        + byteString.charCodeAt(25).toString(16)
        + byteString.charCodeAt(24).toString(16);
    resultObject.SampleRate = parseInt(sampleRate, 16);

    let byteRate = byteString.charCodeAt(31).toString(16)
        + byteString.charCodeAt(30).toString(16)
        + byteString.charCodeAt(29).toString(16)
        + byteString.charCodeAt(28).toString(16);
    resultObject.ByteRate = parseInt(byteRate, 16);

    let BlockAlign = byteString.charCodeAt(33).toString(16)
        + byteString.charCodeAt(32).toString(16);
    resultObject.BlockAlign = parseInt(BlockAlign, 16);

    let bitsPerSample = byteString.charCodeAt(35).toString(16)
        + byteString.charCodeAt(34).toString(16);
    resultObject.BitsPerSample = parseInt(bitsPerSample, 16);

    resultObject.SubChunk2ID = byteString.charAt(36) + byteString.charAt(37) + byteString.charAt(38) + byteString.charAt(39);

    let sizeOfData = byteString.charCodeAt(43).toString(16)
        + byteString.charCodeAt(42).toString(16)
        + byteString.charCodeAt(41).toString(16)
        + byteString.charCodeAt(40).toString(16);
    resultObject.SubChunk2Size = parseInt(sizeOfData, 16);

    return resultObject;
}