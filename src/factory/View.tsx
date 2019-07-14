export default abstract class View {
    public createWindow(): void {
        console.log( 'created' );
    }

    public show(): void {
        console.log( 'show' );
    }

    public repaint(): void {
        console.log( 'repaint' );
    }
}