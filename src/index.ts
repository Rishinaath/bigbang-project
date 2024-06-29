import * as fs from 'fs';

function generateBigBangArray(): string[] {
    const result: string[] = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('BIGBANG');
        } else if (i % 3 === 0) {
            result.push('BIG');
        } else if (i % 5 === 0) {
            result.push('BANG');
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

function writeArrayToFile(array: string[]): void {
    const json = JSON.stringify(array, null, 2);
    fs.writeFileSync('output.json', json, 'utf8');
}

const bigBangArray = generateBigBangArray();
writeArrayToFile(bigBangArray);
console.log('Array has been written to output.json');
