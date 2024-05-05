import ITarefa from "../../interfaces/ITarefas";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
