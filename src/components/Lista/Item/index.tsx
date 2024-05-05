import ITarefa from "../../../interfaces/ITarefas";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Item = ({
  tarefa,
  tempo,
  selecionada,
  completado,
  id,
  selecionaTarefa,
}: Props) => {
  return (
    <li
      className={`${style.item} ${selecionada ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionada,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="tarefa completa"></span>
      )}
    </li>
  );
};

export default Item;
