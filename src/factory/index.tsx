import Data from './Data';
import TextData from './TextData';
import BMPData from './BMPData';

export function factoryRun(): void {
    const textData: Data = new TextData();
    const BmpData: Data = new BMPData();
    
    textData.open( 'text' );
    BmpData.open( 'BMP' );
}
