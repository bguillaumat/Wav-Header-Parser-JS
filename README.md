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
```javascript
fileSize: The size of the sound file
formatType: Type of format (1 is PCM)
channels: The number of channels
sampleRate: The sample rate (eg: 8000kHz)
bitsPerSample: The number of bits (eg: 16)
```

## Usage ##
```javascript
let reader = new FileReader();

reader.onload = (ev) => {
    if (ev.target) {
        let waveFile = wavParser(ev.target.result);
        console.log(waveFile.sampleRate);
    }
};
reader.readAsDataURL(file);
```