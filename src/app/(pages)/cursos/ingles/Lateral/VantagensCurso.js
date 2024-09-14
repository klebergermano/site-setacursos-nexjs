import style from "./vantagens-cursos.module.scss";
export default function VantagensCurso() {
    return (
        <div className={style.vantagens_curso}>
            <h3>Vantagens Inclusas!</h3>
            <ul>
                <li><span className={style.icon_checked}>&#10003;</span> CERTIFICADO de Conclusão!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Material Acessível!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Mátricula GRATUITA!</li>
                <li><span className={style.icon_checked}>&#10003;</span> LIVRE de Taxas e Multas!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Material atualizado!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Plantão de dúvidas!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Turmas reduzidas!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Professor em sala!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Preço Acessível!</li>
            </ul>
        </div>

    )

}