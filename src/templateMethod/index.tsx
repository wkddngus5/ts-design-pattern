import Data from './Data';
import TextData from './TextData';
import BMPData from './BMPData';

export function templateMethodRun(): void {
    const textData: Data = new TextData( 'text' );
    const BmpData: Data = new BMPData( 'BMP' );
    
    textData.save();
    BmpData.save();
}
