import Design from '../../images/icons/design.svg';

function setActive(el) {
  let item = el.currentTarget;
  let itens = item.parentElement;

  let wasActive = item.classList.contains('active');

  [...itens.children].forEach(element => {
    element.classList.remove('active');
  });

  if(!wasActive)
    item.classList.add('active');
}

export default function Sobre() {
  

	return (
		<section className="about">
      <div className="content container">
        <div className="text">
          <h2 className="title">Serviços</h2>
          <div className="desc">
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime esse perspiciatis, sint accusantium, laudantium magnam voluptates id reprehenderit dolore sapiente odio optio. Corrupti repudiandae voluptates iste quis reiciendis accusamus?</p>

            <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque rerum in porro doloremque, impedit accusamus incidunt.</p>
          </div>
        </div>

        <div className="slider">
          <div className="item purple" onClick={el => setActive(el)}>
            <div className="circle">
              <img src={Design} alt="" className="icon" />
            </div>

            <div className="card">
              <img src={Design} alt="" className="back-icon" />
              <h3 className="title">Design</h3>

              <div className="desc">
                <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                
                <a href="#" className="button-container">
                  <button className="button">Quero um orçamento</button>
                </a>
              </div>
            </div>
          </div>

          <div className="item yellow" onClick={el => setActive(el)}>
            <div className="circle">
              <img src={Design} alt="" className="icon" />
            </div>

            <div className="card">
              <img src={Design} alt="" className="back-icon" />
              <h3 className="title">Design</h3>

              <div className="desc">
                <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

                <a href="#" className="button-container">
                  <button className="button">Quero um orçamento</button>
                </a>
              </div>
            </div>
          </div>

          <div className="item cyan" onClick={el => setActive(el)}>
            <div className="circle">
              <img src={Design} alt="" className="icon" />
            </div>

            <div className="card">
              <img src={Design} alt="" className="back-icon" />
              <h3 className="title">Design</h3>

              <div className="desc">
                <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

                <a href="#" className="button-container">
                  <button className="button">Quero um orçamento</button>
                </a>
              </div>
            </div>
          </div>

          <div className="item red" onClick={el => setActive(el)}>
            <div className="circle">
              <img src={Design} alt="" className="icon" />
            </div>

            <div className="card">
              <img src={Design} alt="" className="back-icon" />
              <h3 className="title">Design</h3>

              <div className="desc">
                <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

                <a href="#" className="button-container">
                  <button className="button">Quero um orçamento</button>
                </a>
              </div>
            </div>
          </div>

          <div className="item blue" onClick={el => setActive(el)}>
            <div className="circle">
              <img src={Design} alt="" className="icon" />
            </div>

            <div className="card">
              <img src={Design} alt="" className="back-icon" />
              <h3 className="title">Design</h3>

              <div className="desc">
                <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

                <a href="#" className="button-container">
                  <button className="button">Quero um orçamento</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	);
}
