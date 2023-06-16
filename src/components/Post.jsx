import styles from './post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
export function Post(props){
    console.log(props)
    return (
        <article className= {styles.post} >
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/ojoaoramos.png"/>
                        <div className={styles.authorInfo}>
                            <strong>João Ramos</strong>
                            <span>Web Developer</span> 
                        </div>
                </div>     
              <time title="31 de maio às 11:02h" dateTime="" >Publicado há 3h</time>                 
            </header>

            <div className={styles.content}>
               <p>Fala galeraa 👋</p> 
               <p> Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Social Dev 🚀</p>
               <p> 👉 <a href="#">joaoramos.dev/socialdev</a></p>
               <p> <a href="#">#novoprojeto</a>{' '} 
                <a href="#">#ignite</a>{' '} 
                <a href="#">#rocketseat</a>{' '}
               </p> 
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea placeholder='Escreva seu comentário...'/>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>
            
        </article>
    )
}
