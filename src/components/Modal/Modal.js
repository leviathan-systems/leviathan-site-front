import '../../styles/components/_modal.scss';

import Success from '../../images/icons/success.svg';
import Error from '../../images/icons/error.svg';
import { useState } from 'react';

export default function Modal({success, closeModal}) {
  let [visible, setVisible] = useState(true);

  function close() {
    closeModal();
  }
  
  return (
      <section className="modal">
        <div className="content">
          <div onClick={close} className="close">&times;</div>
          <img src={success ? Success : Error} alt="" className="icon" />
          <h3 className="title">{success ? 'Mensagem enviada com sucesso!':'Erro ao enviar mensagem!'}</h3>

          <div className="desc">
            <p className="paragraph">{success ? 'Obrigado pelo contato! \n Em breve retornaremos a sua mensagem.' : 'Não foi possível enviar sua mensagem, por favor tente novamente.'}</p>
          </div>
        </div>
      </section>
  )
}