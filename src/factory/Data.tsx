import View from './View';

export default abstract class Data {

    protected abstract createView(): View;

    public open( name: String ): void {
        this.read( name );
        const view: View = this.createView();
        view.createWindow();
        view.show();
        view.repaint();
    }

    private read( name: String ):void {
        console.log( `read ${ name }`);
    }
}