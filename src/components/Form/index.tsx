import React from "react";
import { isExternalModuleNameRelative } from "typescript";
import Button from "../Button";
import style from './form.module.scss';

class Form extends React.Component<{setTarefas:React.Dispatch<React.SetStateAction<{
    tarefa: string;
    tempo: string;
}[]>>}>{
    state = {
        tarefa:"",
        tempo:"00:00:00"
    }

    salvarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas=> [...tarefasAntigas,{...this.state}])
    }


    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.salvarTarefa.bind(this)}>
                <div className={style.inputContainer} >
                    <label htmlFor="tarefa">
                        Adicione um novo estudo.
                    </label>

                    <input
                        type="text"
                        name="tarrefa"
                        id="tarefa"
                        value = {this.state.tarefa}
                        onChange = {evento => this.setState({...this.state, tarefa: evento.target.value})}
                        placeholder="O que você deseja estudar?"
                        required                    
                    />
                </div>
                    
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                            Tempo 
                        </label>
                    
                        <input
                            type="time"
                            step="1"
                            name="tempo"
                            value = {this.state.tempo}
                            onChange = {evento => this.setState({...this.state, tempo: evento.target.value})}
                            id="tempo"
                            min="00:00:00"
                            max="01:30:00"
                            required
                        />
                </div>
                <Button type="Subimit">Adicionar</Button>
                              
                
            </form>
        )
        
    }
    
}
export default Form
