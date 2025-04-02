import React from "react";
import { Prueba } from "./prueba.jsx";
import { PruebaDos } from "./pruebaDos.jsx";
import { MyCard } from "./myCard.jsx";
import { Digit } from "./digit.jsx";
//create your first component



const Home = ({counter}) => {

	let age = 55
	let name = 'pepe'

	//props

	//principio DRY--> DONT REPEAT YOURSELF --> NO TE REPITAS
	//simulando respuesta de una BBDD
	

	const data = [
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.th9PP5ztJug6QUp1lY0-BwHaEK%26pid%3DApi&f=1&ipt=f400ef135e5e9d0973a6e505a5fba268404534a6ed1567e6b94b622cf141fd9b&ipo=images',
			title: 'paisaje',
			text: 'paisaje paisajista',
			btn: 'learn more!'
		},
		{
			imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
			title: 'pajaro azul',
			text: 'azul es el pajaro',
			btn: "it's blue!!"
		}

	]


	return (
		<div className="text-center">

		<Digit dataValue={<i class="fa-solid fa-clock"></i>}/>
		<Digit dataValue={counter}/>
		<Digit dataValue={counter}/>
		<Digit dataValue={counter}/>
		<Digit dataValue={counter}/>
		<Digit dataValue={counter}/>
		<Digit dataValue={counter}/>



			<p className="fs-1">valor de age {age}</p>
			<Prueba age={age} name={name} city={'Sevilla'} numbers={[1, 2, 3]} />
			<Prueba age={23} name={'lola'} city={'Madrid'} numbers={[4, 5, 6]} />

			<PruebaDos brand={'toyota'} model={'corolla'} year={2005} />

			<div className="row">
				{data.map((el, i) =>
					<div key={i} className="col-sm-12 col-md-6 col-lg-4">
						<MyCard
							imgUrl={el.imgUrl}
							title={el.title}
							text={el.text}
							btn={el.btn}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;