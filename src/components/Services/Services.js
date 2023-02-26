import Design from '../../images/icons/design.svg';

import { scrollTo } from '../../helpers/utils';

import { Tooltip } from 'react-tooltip';


export default function Services () {
  function setActive(el) {
    let circle = el.currentTarget;
    let item = circle.parentElement;

    let slider = item.parentElement;
    let all_itens = [...slider.children];
    
    let wasActive = item.classList.contains('active');
  
    all_itens.forEach(element => {
      element.classList.remove('active');
      element.classList.add('inactive');
    });
    
    if (!wasActive) {
      item.classList.add('active');
      item.classList.remove('inactive');
      slider.classList.add('active');
      return;
    }

    slider.classList.remove('active');


    all_itens.forEach(element => {
      element.classList.remove('inactive');
    });
  }

  return (
		<section className="services">
			<div className="content container">
				<div className="text">
					<h2 className="title">Serviços</h2>
					<div className="desc">
						<p className="paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime esse perspiciatis, sint accusantium, laudantium magnam voluptates id reprehenderit dolore sapiente odio optio.
							Corrupti repudiandae voluptates iste quis reiciendis accusamus?
						</p>

						<p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque rerum in porro doloremque, impedit accusamus incidunt.</p>
					</div>
				</div>

				<div className="slider">
					<div className="item purple">
						<div className="circle" data-tooltip-id="my-tooltip" data-tooltip-content="Design" data-tooltip-place="bottom" onClick={el => setActive(el)}>
							<img src={Design} alt="" className="icon" />
						</div>

						<div className="card">
							<img src={Design} alt="" className="back-icon" />
							<h3 className="title">Design</h3>

							<div className="desc">
								<p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

								<p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

								<a onClick={() => scrollTo("#contato")} className="button-container">
									<button className="button">Quero um orçamento</button>
								</a>
							</div>
						</div>
					</div>

					<div className="item yellow">
						<div className="circle" data-tooltip-id="my-tooltip" data-tooltip-content="Desenvolvimento de Sites e aplicativos" data-tooltip-place="bottom" onClick={el => setActive(el)}>
							<img src={Design} alt="" className="icon" />
						</div>

						<div className="card">
							<img src={Design} alt="" className="back-icon" />
							<h3 className="title">Design</h3>

							<div className="desc">
								<p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

								<p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

								<a onClick={() => scrollTo("#contato")} className="button-container">
									<button className="button">Quero um orçamento</button>
								</a>
							</div>
						</div>
					</div>

					<div className="item cyan">
						<div className="circle" data-tooltip-id="my-tooltip" data-tooltip-content="Design" data-tooltip-place="bottom" onClick={el => setActive(el)}>
							<img src={Design} alt="" className="icon" />
						</div>

						<div className="card">
							<img src={Design} alt="" className="back-icon" />
							<h3 className="title">Design</h3>

							<div className="desc">
								<p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

								<p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

								<a onClick={() => scrollTo("#contato")} className="button-container">
									<button className="button">Quero um orçamento</button>
								</a>
							</div>
						</div>
					</div>

					<div className="item red">
						<div className="circle" data-tooltip-id="my-tooltip" data-tooltip-content="Design" data-tooltip-place="bottom" onClick={el => setActive(el)}>
							<img src={Design} alt="" className="icon" />
						</div>

						<div className="card">
							<img src={Design} alt="" className="back-icon" />
							<h3 className="title">Design</h3>

							<div className="desc">
								<p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

								<p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

								<a onClick={() => scrollTo("#contato")} className="button-container">
									<button className="button">Quero um orçamento</button>
								</a>
							</div>
						</div>
					</div>

					<div className="item blue">
						<div className="circle" data-tooltip-id="my-tooltip" data-tooltip-content="Design" data-tooltip-place="bottom" onClick={el => setActive(el)}>
							<img src={Design} alt="" className="icon" />
						</div>

						<div className="card">
							<img src={Design} alt="" className="back-icon" />
							<h3 className="title">Design</h3>

							<div className="desc">
								<p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

								<p className="paragraph">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

								<a onClick={() => scrollTo("#contato")} className="button-container">
									<button className="button">Quero um orçamento</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
      <Tooltip id="my-tooltip" />
		</section>
	);
}
