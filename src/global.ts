class Publication {
    Foto: File | null;
    Nome: string;
    Mensagem: string;

    constructor(Foto: File | null = null, Nome: string = '', Mensagem: string = '') {
        this.Foto = Foto;
        this.Nome = Nome;
        this.Mensagem = Mensagem;

    }


    Clear(){
        this.Foto = null;
        this.Nome = '';
        this.Mensagem = '';
    }

    setFoto(Foto: File | null){
        this.Foto = Foto;
    }

    getFoto(){
        return this.Foto;
    }

    setNome(Nome: string){
        this.Nome = Nome;
    }

    getNome(){
        return this.Nome;
    }

    setMensagem(Mensagem: string){
        this.Mensagem = Mensagem;
    }

    getMensagem(){
        return this.Mensagem;
    }

}


const Publish = new Publication();

interface Publication {
    Foto: File | null;
    Nome: string;
    Mensagem: string;
}

export default Publish;
export {Publication};

