export class PreviewImage {

    public preview: string = '';
    public raw?: File;
    public error: string = '';


    constructor(preview: string, raw: File) {

        this.preview = preview;
        this.raw = raw;

    }


    public clear(): void {

        this.preview = '';
        this.raw = undefined;

    }

    public isValid(): boolean {

        const regex = /\.(?:jpg|gif|png)/g;
        if (!this.raw) {
            this.error = 'Foto inválida';
            return false;
        }

        if (regex.test(this.raw?.name)) {
            return true;
        }

        this.error = 'Foto inválida';
        return false;

    }



}