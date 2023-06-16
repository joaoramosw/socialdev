import { format , formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
export function Post({author , publishedAt , content})
{
    const dateFormat = format(publishedAt , "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBR,})
    const dateFormatRelativeNow = formatDistanceToNow(publishedAt ,{
        locale:ptBR, 
        addSuffix:true,
    })
    
    return (
        <article className= {styles.post} >
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span> 
                        </div>
                </div>     
              <time title={publishedAt.toString(dateFormat)} dateTime={publishedAt.toISOString()} >
                {dateFormatRelativeNow}
                </time>                 
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p>{line.content}</p>;
                    } else if (line.type ==='line'){
                        return <p><a>{line.content}</a></p>
                    };
                })}
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
