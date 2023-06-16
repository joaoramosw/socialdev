import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './app.module.css';
import './global.css';

// author : {avatar_url:"" , name:"" , role: ""}
// publishedAt: Date
// content: String
// Info que viriam do back-end provavelmente em formato de Markdown, 
// evitar todo custo que o back-end retorne html , fica mais facil para ataques de TagScript por ex

 const posts = [
   {
    id:1 ,
    author:{
       avatarUrl: 'https://github.com/ojoaoramos.png',
       name: 'João Ramos',
      role: 'Full-stack Developer'
     },
     content: [
      {type: 'paragraph' , content :'Fala galeraa 👋',},
       {type: 'link' , content :'joaoramos.dev/socialdev',},
       {type: 'paragraph' , content :'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Social Dev 🚀'},
     ],
     publishedAt: new Date ('2023-06-15 22:00:00'),
    },

    {
      id:1 ,
      author:{
         avatarUrl: 'https://github.com/diego3g.png',
         name: 'Diego Fernandes',
        role: 'CTO'
       },
       content: [
        {type: 'paragraph' , content :'Fala galeraa 👋',},
         {type: 'link' , content :'joaoramos.dev/socialdev',},
         {type: 'paragraph' , content :'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Social Dev 🚀',}
       ],
  
       publishedAt: new Date ('2023-06-12 17:40:00')
      },
  ]


export function App() {
  return (<div>   
    <Header />
    <div className={styles.wrapper}>
       <Sidebar/>
      <main>           
        {/* forEach - not for situation , because nothing is return in screen */}
        {posts.map(posts =>{
          return (
          <Post
          author={posts.author}
          content={posts.content}
          publishedAt={posts.publishedAt}
          />
          )
        })}
      </main>
    </div>
  </div>  
  )
}

