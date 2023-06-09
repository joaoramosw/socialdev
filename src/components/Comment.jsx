import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://www.github.com/ojoaoramos.png" />
           
            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Ramos</strong>
                            <time title="2 de junho às 14:02h" dateTime="" >Cerca de 1h atrás</time>                 
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom , Parabéns !</p>
                </div>
                
                <footer>
                    <button>
                        <HandsClapping size={16}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            
            </div>
        
        </div>
    )
}