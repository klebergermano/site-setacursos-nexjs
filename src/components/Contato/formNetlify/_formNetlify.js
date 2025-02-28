import { useState } from 'react';
import Info from "../../_infoContatoObj";
import Icon from "@/../public/assets/icons";
import style from "./_formNetlify.module.scss";
import { useRouter } from "next/navigation";

//import { useHistory } from 'react-router-dom';
const Formulario = () => {

  const router = useRouter()


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');





  const handleFormSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/__form_netlify_hidden.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      if (response.ok) {
        router.push('/formulario-enviado');
      } else {
        router.push('/formulario-erro');
      }
    } catch {
      (error) => {
        console.error('Error submitting form:', error);
        router.push('/formulario-erro');
      }

    }

  };


  return (


    <form id={style.form} name='feedback' onSubmit={handleFormSubmit} data-netlify="true"  >
      {/*Campo oculto com o nome do formulário netlify*/}
      <input type="hidden" name="form-name" value="feedback" />
      {/* ----------------------*/}
      <h4>Se preferir, entre em contato conosco através do nosso formulário.</h4>
      <br />
      <div>

        <label htmlFor='name'>Nome: </label>
        <input
          name="name"
          placeholder="Nome:"
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div>
        <label htmlFor='email'>Email: </label>
        <input
          name="email"
          placeholder="Email:"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label htmlFor='phone'>Telefone: </label>
        <input
          name='phone'
          placeholder="Telefone: "
          required
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div>
        <label htmlFor='subject'>Assunto: </label>
        <input
          name='subject'
          placeholder="Assunto:"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
      </div>
      <div>
        <label htmlFor='message'>Menssagem</label>
        <textarea
          name="message"
          placeholder="Menssagem:"
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>


  );
};

export default Formulario;
