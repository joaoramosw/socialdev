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
       avatarUrl: 'https://github.com/ojoaoramos',
       name: 'João Ramos',
      role: 'Full-stack Developer'
     },
     content: [
      {type: 'paragraph' , content :'',}
       {type: 'link' , content :'',}
       {type: 'paragraph' , content :'',}
     ]
    }

    {
      id:2 ,
      author:{
         avatarUrl: 'https://github.com/oluisena',
         name: 'Luis Sena',
        role: 'Full-stack Developer'
       },
       content: [
        {type: 'paragraph' , content :'',}
         {type: 'link' , content :'',}
         {type: 'paragraph' , content :'',}
       ]
      }

      {
        id:3,
        author:{
           avatarUrl: 'https://github.com/guioliveira',
           name: 'Guilherme oliveira',
          role: 'back-end Developer'
         },
         content: [
          {type: 'paragraph' , content :'',}
           {type: 'link' , content :'',}
           {type: 'paragraph' , content :'',}
         ]
        }
  ]


export function App() {
  return (<div>   
    <Header />
    <div className={styles.wrapper}>
       <Sidebar/>
       <main>  
          <Post 
            author="João Victor"
            content=""
          /> 
          <Post 
            author="João Victor"
            content=""
          />
          <Post 
            author="João Victor"
            content="Um post muito divertido e Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe omnis, quos illo perspiciatis ex magnam eos, ad doloribus laboriosam sed iure non quidem odit reprehenderit minus. Quibusdam, adipisci dolorum!"
          />  
          <Post 
            author="João Victor"
            content="Um post muito divertido e Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe omnis, quos illo perspiciatis ex magnam eos, ad doloribus laboriosam sed iure non quidem odit reprehenderit minus. Quibusdam, adipisci dolorum!"
          />  
          
      
         </main>
    </div>
  </div>  
  )
}

