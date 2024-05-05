import style from "./Botao.module.scss";

const Botao = (props: {
  children: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}) => {
  const { type = "button", onClick } = props;
  return (
    <button className={style.botao} type={props.type} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default Botao;
