import React, { useState } from 'react'
import Item from './Item';
import style from './list.module.scss';

    function List() {
        const [tarefas, setTarefas] = useState( [{
            tarefa: 'Teste',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Teste',
            tempo: '01:39:00'
        } 
    ])
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={()=>{
               setTarefas([...tarefas, {tarefa:"Estudar estado", tempo:"05:00:00"}]) 
            }}>Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index) => (
                  <Item 
                    key={index}
                    {...item}
                   
                  />
                ))}
            </ul>
        </aside>
    )        
}

export default List
