import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://www.github.com/diego3g.png" />
           
            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego @Rocketseat</strong>
                            <time title="2 de junho às 14:02h" dateTime="" >Cerca de 1h atrás</time>                 
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>
                
                <footer>
                    <button>
                        <HandsClapping size={16}/>
                        Aplaudir <span>14</span>
                    </button>
                </footer>
            
            </div>
        
        </div>
    )
}