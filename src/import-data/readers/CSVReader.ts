import { readFileSync } from 'fs';
import { IReaders } from './IReaders';

const SEPARATOR = ';';

export class CSVReader implements IReaders {
  async read(filePath: string): Promise<any> {
    const data = readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    const res = lines.map((line) => {
      return line.split(SEPARATOR);
    });
    return res;
  }
}
