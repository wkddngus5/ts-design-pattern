import View from './View';

export default class TextView extends View {
    public createWindow(): void {
        console.log( 'create BMP view window' );
    }
    public show(): void {
        console.log( 'show BMP\'s special view' );
    }
}