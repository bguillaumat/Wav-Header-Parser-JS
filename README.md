# Wav Header Parser #
[![npm](https://img.shields.io/npm/v/wav-header-parser.svg)](https://www.npmjs.com/package/wav-header-parser)
[![npm](https://img.shields.io/npm/l/wav-header-parser.svg)](https://github.com/bguillaumat/Wav-Header-Parser-JS)

Typescript module for parse wav file header

## Features ##
- This module will parse the header of a wav file give in base64

## Install ##
```
npm install wav-header-parser --save
```

## How to use the module ##
```javascript
import {wavParser} from "wav-header-parser";
```

## API ##
```javascript
wavParser(base64file: string): any
```

The result object will contain different values:
```
ChunkID: Contains the letters "RIFF" in ASCII form
ChunkSize: This is the size of the rest of the chunk following this number. This is the size of the entire file in bytes minus 8 bytes for the two fields not included in this count ChunkID and ChunkSize.
Format: Contains the letters "WAVE"
SubChunk1ID: Contains the letters "fmt "
SubChunk1Size: 16 for PCM. This is the size of the rest of the Subchunk which follows this number
AudioFormat: 1 is PCM. Values other than 1 indicate some form of compression
NumChannels: Mono = 1, Stereo = 2, etc 
SampleRate: The sample rate (e.g: 8000kHz, 44100kHz, etc)
ByteRate: SampleRate * NumChannels * BitsPerSample/8
BlockAlign: (BitsPerSample * Channels) / 8 | 1 - 8 bit mono, 2 – 8 bit stereo/16 bit mono, 4 – 16 bit stereo
BitsPerSample: The number of bits (e.g: 16 = 16 bits)
SubChunk2ID: Contains the letters "data"
SubChunk2Size: NumSamples * NumChannels * BitsPerSample/8. This is the number of bytes in the data (After this header)
```

## Usage ##
```javascript
let reader = new FileReader();

reader.onload = (ev) => {
    if (ev.target) {
        let waveFile = wavParser(ev.target.result);
        console.log(waveFile.SampleRate);
    }
};
reader.readAsDataURL(file);
```