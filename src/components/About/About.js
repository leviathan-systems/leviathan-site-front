import Rocket from '../../images/icons/rocket.svg';
import Eyes from '../../images/icons/eyes.svg';
import Star from '../../images/icons/star.svg';
import Jellyfish from '../../images/jellyfish.png';

export default function About() {
  return (
    <section className="about">
      <div className="content container">
        <div className="left">
          <img src={Jellyfish} alt="" className="image" />
        </div>

        <div className="right">
          <h2 className="title">O que é a <strong className="name">Leviathan</strong></h2>

          <div className="desc">
            <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, possimus. Adipisci eum officia et quidem atque facere ab non, ullam, cum incidunt velit sequi quasi nisi sit itaque quae ad?</p>

            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi consectetur commodit.</p>
          </div>

          <ul className="list">
            <li className="item">
              <div className="subtitle-row">
                <h3 className="title">Missão</h3>
                <img src={Rocket} alt="" className="icon" />
              </div>

              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor quae voluptates vero ipsa. Dolores magni eos, odit ab ad sapiente placeat est beatae repellat quas similique accusamus tenetur? Quos.</p>
            </li>

            <li className="item">
              <div className="subtitle-row">
                <h3 className="title">Visão</h3>
                <img src={Eyes} alt="" className="icon" />
              </div>

              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor quae voluptates vero ipsa. Dolores magni eos, odit ab ad sapiente placeat est beatae repellat quas similique accusamus tenetur? Quos.</p>
            </li>

            <li className="item">
              <div className="subtitle-row">
                <h3 className="title">Missão</h3>
                <img src={Star} alt="" className="icon" />
              </div>

              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor quae voluptates vero ipsa. Dolores magni eos, odit ab ad sapiente placeat est beatae repellat quas similique accusamus tenetur? Quos.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}