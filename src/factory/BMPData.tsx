import Data from './Data';
import View from './View';
import BMPView from './BMPView';

export default class TextData extends Data {
    protected createView(): View {
        return new BMPView();
    }
}