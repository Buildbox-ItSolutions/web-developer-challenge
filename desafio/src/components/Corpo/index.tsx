
import style from './corpo.module.scss'
import dog from './img/dog.jpg'
export default function Corpo () {

    function mensagem () {
        alert('Infelizmente não consegui terminar o Challenge a tempo! :(')
    }

    return (
        <header className={style.header} >
           
                <div className={style.linha}>
                    <h2>buildbox</h2>
                    <p>web challenge</p>
                </div>
            <div className={style.container}>  
                <form  >
                    <div className={style.imagem}>
                
                    </div>
                    <div className={style.form_input}>
                        <div className={style.campo}>
                            <input className={style.nome} type="text" placeholder='Digite seu nome' />
                        </div>
                        <div className={style.campo}>
                            <input className={style.mensagem} type="text" placeholder='Mensagem' />
                        </div>
                        <div className={style.botao_pai}>
                            <button onClick={mensagem} className={style.descartar}>Descartar</button>
                            <button  className={style.publicar}>Publicar</button>
                        </div>
                    </div>
                </form>
                <div className={style.feed}>
                    <p  className={style.feed_p}>Feed</p>
                </div>

                <div className={style.post}>
                    <div className={style.post_imagem}>
                        <img className={style.dog} src={dog} alt="" />
                    </div>
                    <div className={style.post_texto}>
                        <p className={style.post_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex itaque deserunt sed voluptatibus distinctio omnis nemo, eum neque excepturi animi quo, nam illum repudiandae laudantium corporis ab dolorem aperiam!</p>
                    </div>

                </div>
            </div>
        </header>
        
        
    )
}