

import style from "./modulos-robotica-maker.module.scss"
import Image from "next/image"

const modulosInfo = [

  {
    nome: '',
    imgUrl: '',
    resumo: `
`},
  {
    nome: '',
    imgUrl: '',
    resumo: `
`},
  {
    nome: '',
    imgUrl: '',
    resumo: `
`},
  {
    nome: '',
    imgUrl: '',
    resumo: `
`},
  {
    nome: '',
    imgUrl: '',
    resumo: `
`},
  {
    nome: '',
    imgUrl: '',
    resumo: `
`},
  {
    nome: '',
    imgUrl: '',
    resumo: `
`},




]

function ModulosRoboticaMaker() {


  return (

    <div className={style.modulos_curso_robotica}>

      {modulosInfo.map((item, index) => (
        <div key={index} class={style.modulos_robotica_maker} data-aos='fade-right'>
          <h2>{item.nome} </h2>
          <figure>
            <Image fill={true} src={`/assets/images/cursos/robotica/${item.imgUrl}`} alt={item.nome} />
          </figure>

          <div class={style.resumo}>

            <p>
              {item.resumo}
            </p>

          </div>
        </div>

      ))}


    </div>


  )
}

export default ModulosRoboticaMaker;
