import View from './View';

export default class TextView extends View {
    createWindow(): void {
        console.log( 'create text view window' );
    }

    public repaint(): void {
        console.log( 'repaint text\'s special view' );
    }
}