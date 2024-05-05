import { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";
import ITarefa from "../../interfaces/ITarefas";

const Formulario: React.FC<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> = (props) => {
  const [tarefa, setTarefa] = useState<string>("");
  const [tempo, setTempo] = useState<string>("00:00");

  const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionada: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  };
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
};

export default Formulario;
