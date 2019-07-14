export default abstract class Data {
    private name: String;
    private flag: boolean;

    constructor( name?: String ) {
        this.name = name || 'untitled';
        this.flag = false;
    }

    public save(): void {
        this.openFile();
        this.doWrite();
        this.closeFile();
        this.setModifiedFlag( false );
    }

    public abstract doWrite(): void;

    private openFile() {
        console.log( `opened ${ this.name }` );
    }

    private closeFile() {
        console.log( `closed ${ this.name }` );
    }

    private setModifiedFlag( flag: boolean ) {
        console.log( `set ${ this.name } ${ flag }` );
        this.flag = flag;
    }

}