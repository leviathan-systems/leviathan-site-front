import Logo_Planet from "../Logo_Planet/Logo_Planet";

import { scrollTo } from '../../helpers/utils';

export default function Banner() {
  return (
    <section className="banner">
      <div className="content container">
        <div className="left">
          <h2 className="title">Bem-vindo ao <strong className="name">Leviathan</strong></h2>

          <div className="desc">
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae eveniet cum pariatur sint voluptate totam blanditiis laboriosam quam labore facere, earum incidunt laudantium harum fugit dicta enim adipisci consectetur.</p>

            <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi unde exercitationem facere amet itaque sapiente adipisci aperiam praesentium hic, est assumenda non repellendus recusandae quas quo magnam consectetur quos veniam.</p>
          </div>

          <a onClick={() => { scrollTo("#contato") }} className="button-container">
            <button className="main-button">Quero fazer um orçamento</button>
          </a>
        </div>

        <div className="right">
          <Logo_Planet />
        </div>
      </div>
    </section>
  )
}