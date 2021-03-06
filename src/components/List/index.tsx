import React, { useState } from 'react'
import { ITarefa } from '../../types/ITarefa';

import Item from './Item';
import style from './list.module.scss';


    function List({tarefas}:{tarefas: ITarefa[]}) {
       
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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
