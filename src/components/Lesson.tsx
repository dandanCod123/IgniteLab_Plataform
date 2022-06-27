import { CheckCircle} from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
    title:string;
    slug:string;
    awailableAt: Date;
    type:'live' | 'class';
}

export function Lesson(props: LessonProps){
    const {slug} = useParams<{slug:string}>()
    
    const isLessonAvailable  = isPast(props.awailableAt);
    const availableFormatted = format(props.awailableAt, "EEEE' . 'd' de 'MMMM' . 'k'h'mm", {locale: ptBr,})

    const isActiveLesson = slug === props.slug;

    return(
    <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-300">
            {availableFormatted}
        </span>
       
       {/** div-os quadrados dos conteudos, spans-> textos e ao vivo */}
       <div className={`rounded border border-gray-500 p-4  mt-2 group-hover:border-green-500
        ${isActiveLesson ? `bg-green-500`: ``}
       `}>
           <header className="flex items-center justify-between">

            {isLessonAvailable ? (

                <span className={`text-sm  font-medium flex items-center gap-2
                ${isActiveLesson ? `text-white`: ``}
                ${!isActiveLesson ? `text-blue-500`:``}
                `}
                >
                <CheckCircle size={20}/>
                Conteudo liberado
            </span>

            ) : (
                <span className={`text-sm  font-medium flex items-center gap-2
                ${isActiveLesson ? `text-white`: ``}
                ${!isActiveLesson ? `text-orange-500`:``}
                `}>
                 <CheckCircle size={20}/>
                 Em breve
             </span>
            )}

             <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                 {props.type == 'live' ? 'Ao vivo' : 'Aula Prática'}
                 </span>
           </header>

           <strong className={`t mt-5 block 
           ${isActiveLesson ? `text-white`: ``}
           ${!isActiveLesson ? `text-gray-200` : ``}`}>
             {props.title}
           </strong>
       </div>
    </Link>
 );
}