export const navItems = [
	{ name: 'Обо мне', link: '#about' },
	{ name: 'Услуги', link: '#projects' },
	{ name: 'Портфолио', link: '#testimonials' },
	{ name: 'Отзывы', link: '#contact' },
]

export const gridItems = [
	{
		id: 1,
		title:
			'Я уделяю первостепенное внимание сотрудничеству с клиентами, поддерживая открытое общение ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/grid1.png',
		spareImg: '',
	},
	{
		id: 2,
		title: 'Я очень гибко отношусь к общению в разных часовых поясах',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'Мой стек',
		description: 'Я постоянно стараюсь совершенствоваться',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Уверенные знания в современных веб-технологиях',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Активное участие в разработке и ведении проекта',
		description: '',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Хотите начать совместный проект?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
]

export const projects = [
	{
		id: 1,
		title: 'Сайт агентству ритуальных услуг',
		des: 'Одностраничный сайт-визитка агентства ритуальных услуг «Архангел»',
		img: '/p1.png',
		iconLists: ['/re.svg', '/tail.svg'],
		link: 'https://arhangel38.ru/',
	},
	{
		id: 2,
		title: 'Сайт генерирующей компании ',
		des: 'Сайт шоу-кейс для генерирующей компании',
		img: '/p2.png',
		iconLists: ['/vue.png', '/tail.svg', '/ts.svg'],
		link: 'https://gt-energo.avt.promo/',
	},
	{
		id: 3,
		title: 'Сайт видеоагентству',
		des: 'Одностраничный сайт видеоагентству PlanBig с необычной анимацией прокрутки страницы',
		img: '/p3.png',
		iconLists: ['/re.svg', '/tail.svg'],
		link: 'https://plan-big.pro/',
	},
	{
		id: 4,
		title: 'Сайт, на котором вы находитесь :)',
		des: 'Сайт портфолио с использованием NextJs, Aceternity UI, threeJs, TailwindCSS',
		img: '/p4.png',
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/gsap.svg'],
		link: '/',
	},
]

export const testimonials = [
	{
		quote: 'Всё выполнено качественно и в срок!',
		name: 'AVT DIGITAL',
		title: '«AVT» - сервисное digital-агентство с собственным продакшеном',
	},
	{
		quote: 'Отличный специалист. Оперативно выполняет все задания',
		name: 'Илья Маслов',
		title: 'Отзыв с сайта fl.ru',
	},
]

export const companies = [
	{
		id: 1,
		name: 'Vue.js',
		img: '/vue.png',
		nameImg: '/cloudName.svg',
	},
	{
		id: 2,
		name: 'NestJs',
		img: '/nest.png',
		nameImg: '/appName.svg',
	},
	{
		id: 3,
		name: 'Nuxt',
		img: '/nuxt.png',
		nameImg: '/hostName.svg',
	},
	{
		id: 4,
		name: 'ReactJs',
		img: '/react.webp',
		nameImg: '/streamName.svg',
	},
	{
		id: 5,
		name: 'Flutter',
		img: '/flutter.svg',
		nameImg: '/dockerName.svg',
	},
]

export const workExperience = [
	{
		id: 1,
		title: 'Junior Frontend developer',
		desc: 'Работа junior Frontend разработчиком в туристической компании и самостоятельная разработка сайта туристической компании и посадка на WordPress',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 2,
		title: 'Разработка мобильных приложений на Flutter',
		desc: 'Опыт разработки мобильных приложений на Flutter',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg',
	},
	{
		id: 3,
		title: 'Опыт работы на фрилансе',
		desc: 'Разрабатывал сайты для различных компаний. Работал по-проектно, с почасовой оплатой.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg',
	},
	{
		id: 4,
		title: 'Ведущий Frontend разработчик',
		desc: 'На данный момент являюсь ведущим Frontend разработчиком в компании EliteTrade.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
]

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
		link: 'https://github.com/Sobol17',
	},
	{
		id: 2,
		img: '/vk.svg',
		link: 'https://vk.com/ave_sobol',
	},
	{
		id: 3,
		img: '/tg.svg',
		link: 'https://t.me/Sobolinsky',
	},
]
