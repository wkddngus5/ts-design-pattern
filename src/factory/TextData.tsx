import Data from './Data';
import View from './View';
import TextView from './TextView';

export default class TextData extends Data {
    protected createView(): View {
        return new TextView();
    }
}