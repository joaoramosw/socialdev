import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://www.github.com/ojoaoramos.png" />
           
            <div className={styles.commentBox}>
                
                <div className={commentContent}>
                    <header>
                        <div className={authorAndTime}>
                            <strong>João Ramos</strong>
                            <time title="1 de junho às 14:02h" dateTime="" >Cerca de 1h atrás</time>                 
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Parabéns !</p>
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            
            </div>
        
        </div>
    )
}