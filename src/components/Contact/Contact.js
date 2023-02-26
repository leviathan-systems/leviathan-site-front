import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Design from '../../images/icons/design.svg';
import Music from '../../images/icons/music.svg';
import SpotifyLogo from '../../images/icons/spotify-logo.svg';
import Loading from '../../images/loading.svg';

import Modal from '../Modal/Modal';

import Logo_Planet from '../Logo_Planet/Logo_Planet';

export default function Contact() {
	const [formStatusSuccess, setFormStatusSucess] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [band, setBand] = useState('');
	const [music, setMusic] = useState('');
	const [spotifyLink, setSpotifyLink] = useState('');
	const [lyrics, setlyrics] = useState('');

  const closeModal = () => { setModalVisible(false); }

	async function handleNewLead(e) {
		e.preventDefault();

    setLoading(true);

		const data = { name, email, subject, message };

		try {
			await api.post('/formulario-contato', data)
      .then((response) => {
        //  ERROR HANDLING
        if (response.status == 400)
          setFormStatusSucess(false);
        if (response.status == 200)
          setFormStatusSucess(true);
        
        setModalVisible(true);
      });
		} catch (err) {
      setFormStatusSucess(false);
			setModalVisible(true);
		}
    
    setLoading(false);
	}

	async function loadLyrics() {
		try {
			let retorno = await api.get('/musicas/aleatoria');

			let data = retorno.data;

			setBand(data.band);
			setMusic(data.music);
			setSpotifyLink(data.link);
			setlyrics(data.lyrics);
		} catch (err) {
			console.log(`Falha, tente novamente mais tarde`);
		}
	}

	useEffect(() => {
		loadLyrics();
	}, []);

	return (
		<section className="contact" id="contato">
			<div className="content container">
				<div className="left">
					<div className="form">
            {
              loading?
                <div className="loading">
                  <img src={Loading} alt="" className="icon" />
                </div>
                : <div />
            }

						<h2 className="title">Fale conosco</h2>
						<p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime esse perspiciatis, sint accusantium, laudantium</p>

						<form onSubmit={handleNewLead}>
							<div className="form-group">
								<label htmlFor="name">Seu nome:</label>
								<input placeholder="Bruce Wayne" id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
							</div>

							<div className="form-group">
								<label htmlFor="email">Seu email:</label>
								<input placeholder="bruce@empresaswayne.com.br" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
							</div>

							<div className="form-group">
								<label htmlFor="message">Sua mensagem:</label>
								<textarea cols="30" rows="10" id="message" placeholder="Gostaria de um design para meu novo traje" value={message} onChange={e => setMessage(e.target.value)}></textarea>
							</div>

							<button type="submit" className="main-button">
								Enviar mensagem
							</button>
						</form>
					</div>

					<div className="services">
						<div className="service">
							<img src={Design} alt="" className="icon" />
							<div className="text-group">
								<h3 className="subtitle">Design</h3>
								<p className="text">Quero um novo visual para meu site/marca</p>
							</div>
						</div>
						<div className="service">
							<img src={Design} alt="" className="icon" />
							<div className="text-group">
								<h3 className="subtitle">Design</h3>
								<p className="text">Quero um novo visual para meu site/marca</p>
							</div>
						</div>
						<div className="service">
							<img src={Design} alt="" className="icon" />
							<div className="text-group">
								<h3 className="subtitle">Design</h3>
								<p className="text">Quero um novo visual para meu site/marca</p>
							</div>
						</div>
						<div className="service">
							<img src={Design} alt="" className="icon" />
							<div className="text-group">
								<h3 className="subtitle">Design</h3>
								<p className="text">Quero um novo visual para meu site/marca</p>
							</div>
						</div>
						<div className="service">
							<img src={Design} alt="" className="icon" />
							<div className="text-group">
								<h3 className="subtitle">Design</h3>
								<p className="text">Quero um novo visual para meu site/marca</p>
							</div>
						</div>
					</div>
				</div>

				<div className="right">
					<p className="lyrics">“{lyrics}”</p>
					<div className="down">
						<div className="left">
							<img src={Music} alt="" />
							<div className="text-group">
								<div className="song-name">{music}</div>
								<div className="song-band">{band}</div>
							</div>
						</div>

						<a href={spotifyLink} target="_blank" className="button-spotify-container">
							<button className="button-spotify">
								<img src={SpotifyLogo} className="icon" alt="" />
								<p className="desc">Ouvir no SPOTIFY</p>
							</button>
						</a>
					</div>
				</div>

				<Logo_Planet basic={true}/>
			</div>

      {
        modalVisible ?
        <Modal success={formStatusSuccess} closeModal={closeModal} />
        : <div/>
        }
		</section>
	);
}
