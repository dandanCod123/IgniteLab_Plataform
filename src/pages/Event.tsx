import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";


export function Event(){
const {slug} =  useParams<{slug:string}>();

 return(
   <div className="flex flex-col min-h-screen">  {/* A 'div' pega toda a pagina a 'main' vai pegar toda a extensão da pagina menos o header colocando a siderbar video e outros*/}
     <Header/>
     <main className="flex flex-1">
       { slug ? <Video lessonSlug={slug} /> : <div className="flex-1"/>}
       <SideBar/>
     </main>
   </div>
 );
}