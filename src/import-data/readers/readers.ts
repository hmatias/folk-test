import { IReaders } from './IReaders';

export class Reader {
  constructor(private reader: IReaders) {}

  async read(filePath: string): Promise<any> {
    try {
      return this.reader.read(filePath);
    } catch (err) {
      console.log(err);
      if (err.code === 'ENOENT') {
        throw new Error('File not found!');
      }
      throw new Error('Error reading file!');
    }
  }
}
