import React, { useState } from 'react';
import List from '../components/List';
import Form from '../components/Form'
import style from './app.module.scss';
import Cronometro from '../components/Cronometro';


function App() {
  const [tarefas, setTarefas] = useState( [{
    tarefa: 'Teste',
    tempo: '02:00:00'
},
{
    tarefa: 'Teste',
    tempo: '01:39:00'
} 
])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
