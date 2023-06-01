import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './app.module.css';
import './global.css';


export function App() {
  return (<div>   
    <Header />
    <div className={styles.wrapper}>
       <Sidebar/>
       <main>  
          <Post 
            author="João Victor"
            content="Um post muito divertido e Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe omnis, quos illo perspiciatis ex magnam eos, ad doloribus laboriosam sed iure non quidem odit reprehenderit minus. Quibusdam, adipisci dolorum!"
          /> 
          <Post 
            author="João Victor"
            content="Um post muito divertido e Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe omnis, quos illo perspiciatis ex magnam eos, ad doloribus laboriosam sed iure non quidem odit reprehenderit minus. Quibusdam, adipisci dolorum!"
          /> 
          <Post 
            author="João Victor"
            content="Um post muito divertido e Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe omnis, quos illo perspiciatis ex magnam eos, ad doloribus laboriosam sed iure non quidem odit reprehenderit minus. Quibusdam, adipisci dolorum!"
          /> 

          <Post 
            author="João Victor"
            content="Um post muito divertido e Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe omnis, quos illo perspiciatis ex magnam eos, ad doloribus laboriosam sed iure non quidem odit reprehenderit minus. Quibusdam, adipisci dolorum!"
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

