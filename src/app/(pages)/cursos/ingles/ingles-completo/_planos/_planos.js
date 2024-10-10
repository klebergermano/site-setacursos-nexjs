import style from "./_planos.module.scss"
import Image from "next/image"
export default function Planos() {

  return (
    <div className={style.bg_planos}>
      <h2>Planos Disponíveis</h2>
      <div className={style.planos}>
        <h3>
          <span>

          </span>
          <span>
            Inglês Completo
            <span>do Básico ao Avançado</span>
          </span>
        </h3>
        <ul>
          {/* <p>Básico, Intermediário e Avançado</p> */}

          <ul>
            <li>
              2 Aulas por semana <br />
              <span className={style.txt_pequeno}>(1 horas p/ aula)</span>
            </li>
            <li className={style.preco}>
              R$ <b><span className={style.valor_destaque}>169</span>,00</b><br />
              <span className={style.txt_pequeno}>(mensalidade)</span>
            </li>
            <li>
              12 meses / 96 horas <br />
              <span className={style.txt_pequeno}>
                (por etapa)
              </span>
            </li>
          </ul>

          <li className={style.li_vantagens}>
            ✓ Certificado incluso!
          </li>
          <li className={style.li_vantagens}>
            ✓ Material didático acessível!
          </li>
          <li className={style.li_vantagens}>
            ✓  Matrícula gratuita!
          </li>
          <li className={style.li_vantagens}>
            ✓  Plantão de dúvidas!
          </li>
          <li className={style.li_vantagens}>

            ✓   Turmas reduzidas!
          </li>
          <li className={style.li_vantagens}>

            ✓   Professor em sala!
          </li>
          <li className={style.li_vantagens}>

            ✓  LIVRE de Taxas e Multas!
          </li>
        </ul>
        <figure>

          <Image width={500} height={200} src={"/assets/images/cursos/ingles/plano-ingles-completo.png"} />
        </figure>

        <div className={style.bg_background}></div>


      </div>


    </div>
  )

}

