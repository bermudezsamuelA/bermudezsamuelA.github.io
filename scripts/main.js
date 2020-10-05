const personales = {
	nombre : "Samuel Bermudez",
	profesion:"Programador",
	nacimiento : "14/11/1993",
	nacionalidad : "Venezolana",
	correo : "sam93quimica14@gmail.com",
	direccion : "Caracas, Venezuela",
	foto: "./public/fotos/cv.jpg",
	about:"Hola, soy Samuel Bermudez, Estudiante de Computacion, de la facultad de ciencias, UCV, deportista, con buena experiencia como Frontend developer y soporte tecnico, con altos deseos de crecer como desarrollador en python",
	servicio1:{
			titulo:"Web development",
			descripcion:"Trabajo eficaz y eficiente, responsive y bonito",
	},
	servicio2:{
			titulo:"Desarrollador",
			descripcion:"Desarrollos en python o cualquier plataforma, creativo e innovador",
	},
	iconos:[ 
		{
			red: "https://www.facebook.com/samuel.bermudez.31/",
			logo: "fab fa-facebook-f fa-2x",	
		},
		{
			red: "https://www.instagram.com/sam93quimica14/?hl=es-la",
			logo:"fab fa-instagram fa-2x",	
		},
		{
			red: "https://www.linkedin.com/in/samuel-bermudez-918333176/",
			logo: "fab fa-linkedin fa-2x",	
		},
		{
			red: "https://github.com/bermudezsamuelA",
			logo: "fab fa-github fa-2x",	
		},
	]	
};

const estudios = {
		institucion : "Universidad Central de Venezuela",
		titulo : "Licenciado en Computacion",
		inicio : "2016",
		estado : "En Curso",
		lugar : "Caracas",
		foto: "./public/fotos/ciencias.jpg",
	};


const idiomas = [
	{
		id: 1,
		idioma:'Ingles',
		estilo: [ {
				modo:'Lectura',
				nivel:'Intermedio',
				},
				{
				 modo:'Escrito',
				 nivel:'Intermedio',
				 },
				 {
				 modo:'Oral',
				 nivel:'Intermedio',
				},
			],
	},
];

const iconos= [
	{
		id: 1,
		clase: '<i class="fab fa-python fa-5x" ></i>',
	},
	{
		id: 2,
		clase: '<i class="fab fa-js fa-5x"></i>',						
	},
	{
		id: 3,
		clase: '<i class="fab fa-html5 fa-5x" ></i>',
	},
	{
		id: 4,
		clase: '<i class="fab fa-css3-alt fa-5x" ></i>',
	},
	{
		id: 5,
		clase: '<i class="fas fa-coins fa-5x" ></i>',
	},
	{
		id: 6,
		clase: '<i class="fas fa-code fa-5x" ></i>',
	},
];

const cursos = [ 
	{
		id: 1,
		area: "Python",
		show:false,
		curso: [
			{
				id: 1,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Python 3",
				certificado: "./public/cursos/python/python.jpg"
			},
			{
				id: 2,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Data analysis with Pandas",
				certificado: "./public/cursos/python/pandas.jpg"
			},
			{
				id: 3,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Statistics with Numpy",
				certificado: "./public/cursos/python/numpy.jpg"
			},
			{
				id: 4,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Statistics with Python",
				certificado: "./public/cursos/python/statistics.jpg"
			},
			{
				id: 5,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Machine Learning",
				certificado: "./public/cursos/python/machine.jpg"
			},
			{
				id: 6,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Blockchain (basics)",
				certificado: "./public/cursos/python/blockchain.jpg"
			},
			{
				id: 7,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "web Scraping with Beautiful Soup",
				certificado: "./public/cursos/python/beautifulsoup.jpg"
			},
			{
				id: 8,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Linear Data Structures",
				certificado: "./public/cursos/python/data_estructures.jpg"
			},
			{
				id: 9,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Complex Data Structures",
				certificado: "./public/cursos/python/complex_data.jpg"
			},
			{
				id: 10,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Search Algorithms",
				certificado: "./public/cursos/python/search.jpg"
			},
			{
				id: 11,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Data Visualization with Python",
				certificado: "./public/cursos/python/data_visualization.jpg"
			},
			{
				id: 12,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Data Cleaning with Python",
				certificado: "./public/cursos/python/clean.jpg"
			},
			{
				id: 13,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Recursion with Python",
				certificado: "./public/cursos/python/recursion.jpg"
			},
			{
				id: 14,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Sorting Algorithms",
				certificado: "./public/cursos/python/sorting.jpg"
			}
		]
	}, 
	{
		id: 2,
		area: "Javascript",
		show: false,
		curso: [
			{
				id: 1,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Javascript",
				certificado: "./public/cursos/javascript/js.jpg"
			},
			{
				id: 2,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "React (primera parte)",
				certificado: "./public/cursos/javascript/react1.jpg"
			},
			{
				id: 3,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "React (segunda parte)",
				certificado: "./public/cursos/javascript/react2.jpg"
			},
			{
				id: 4,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Vue.js",
				certificado: "./public/cursos/javascript/vue.jpg"
			},
			{
				id: 5,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Node",
				certificado: "./public/cursos/javascript/node.jpg"
			},
			{
				id: 6,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Jquery",
				certificado: "./public/cursos/javascript/jquery.jpg"
			},
			{
				id: 7,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Express",
				certificado: "./public/cursos/javascript/express.jpg"
			},
			{
				id: 8,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "D3",
				certificado: "./public/cursos/javascript/d3.jpg"
			},
			{
				id: 9,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Testing Web development",
				certificado: "./public/cursos/javascript/testing.jpg"
			},
			{
				id: 10,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Debug JavaScript Errors",
				certificado: "./public/cursos/javascript/debug.jpg"
			},
			{
				id: 11,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Interactive Website",
				certificado: "./public/cursos/javascript/interactive.jpg"
			}
		]
	}, 
	{
		id: 3,
		area: "HTML5",
		show: false,
		curso: [
			{
				id: 1,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "HTML",
				certificado: "./public/cursos/html/html.jpg"
			},
			{
				id: 2,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "navigation design",
				certificado: "./public/cursos/html/navigation.jpg"
			},
			{
				id: 3,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Responsive design",
				certificado: "./public/cursos/html/responsive.jpg"
			},
			{
				id: 4,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Make a website",
				certificado: "./public/cursos/html/make.jpg"
			}
		]
	}, 
	{
		id: 4,
		area: "CSS3",
		show: false,
		curso: [
			{
				id: 1,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "CSS",
				certificado: "./public/cursos/css/css.jpg"
			},
			{
				id: 2,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "SASS",
				certificado: "./public/cursos/css/sass.jpg"
			},
			{
				id: 3,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "BootStrap",
				certificado: "./public/cursos/css/bootstrap.jpg"
			},
			{
				id: 4,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Color design",
				certificado: "./public/cursos/css/color.jpg"
			}
		]
	},
	{
		id: 5,
		area: "SQL",
		show: false,
		curso: [
			{
				id: 1,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "SQL",
				certificado: "./public/cursos/sql/sql.jpg"
			},
			{
				id: 2,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Node-SQLite",
				certificado: "./public/cursos/sql/node-sqlite.jpg"
			},
			{
				id: 3,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Table transformation",
				certificado: "./public/cursos/sql/transform.jpg"
			},
			{
				id: 4,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Analyze business metrics",
				certificado: "./public/cursos/sql/metrics.jpg"
			}
		]
	},
	{
		id: 6,
		area: "Extras",
		show: false,
		curso: [
			{
				id: 1,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Git",
				certificado: "./public/cursos/extras/git.jpg"
			},
			{
				id: 2,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Command Line",
				certificado: "./public/cursos/extras/command.jpg"
			},
			{
				id: 3,
				centro: "CertiProf",
				fecha: "2020",
				titulo: "Scrum Foundation",
				certificado: "./public/cursos/extras/SCRUM.jpg"
			},
			{
				id: 4,
				centro: "Codecademy",
				fecha: "2020",
				titulo: "Deploy a website",
				certificado: "./public/cursos/extras/deploy.jpg"
			}
		]
	}
];


const experiencias =[
	{
		id: 1,
		empresa: "FYS CA",
		fechaInicio: "2015",
		fechaFin: "2015",
		titulo: "Operador Centro Nacional de Soporte nivel 2",
		funciones: "Dar soporte tecnico en el proceso electoral 2015",
		tareas: "Recibir llamadas de los centros de votacion y brindarles el soporte necesario, si el caso lo amerita, ascender la incidencia al siguiente nivel"
	},
	{
		id: 2,
		empresa: "Excle soluciones biometricas",
		fechaInicio: "2017",
		fechaFin: "2017",
		titulo: "Operador Especial Centro Nacional de Soporte nivel 3",
		funciones: "Brindar guia a los operadores a mi cargo en el proceso electoral 2017",
		tareas: "Brindar el soporte necesario a los operadores a mi cargo, esto podia incluir sustituir al operador si el caso era muy complicado, el nivel tres era el ultimo nivel, por lo que atendia a los casos mas dificiles y complejos, bajo la tutela de operadores del CNE"
	},
	{
		id: 3,
		empresa: "Excle soluciones biometricas",
		fechaInicio: "2017",
		fechaFin: "2017",
		titulo: "Especialista CNS (Gerencia del Centro nacional de soporte)",
		funciones: "Soporte Tecnico al Centro Nacional de Soporte",
		tareas: "Acondicionamiento de las instalaciones para el proceso de entrenamientos, pruebas de estres, y proceso electoral, solventar cualquier problematica con las computadoras"
	},
	{
		id: 4,
		empresa: "© The ACT Initiative",
		fechaInicio: "2018",
		fechaFin: "2018",
		titulo: "Desarrollador Frontend",
		funciones: "Realizar el desarrollo frontend de un proyecto web",
		tareas: "Programar en, HTML5, CSS3, BOOTSTRAP y Javascript una pagina web, inicialmente iba a ser en wordpress pero cambio el sentido del proceso a medida que se avanzaba"
	},
	{
		id: 5,
		empresa: "Voluntad Popular",
		fechaInicio: "2019",
		fechaFin: "2019",
		titulo: "Asistente de Soporte Tecnico",
		funciones: "Brindar apoyo al usuario en cualquier incidencia y mantener en buen estado el ambiente laboral",
		tareas: "Respaldo y formateo de maquinas, acondicionamiento de espacios laborales, pruebas de red, apoyo al apoyo al usuario, reporte de fallas"
	},
	
];


const botones = [
	{
		id: 1,
		un: true,
		name: "yo",
		unclicked: "<i class='fas fa-address-card fa-5x'></i> <span> about me </span>",
		clicked: "<i class='far fa-address-card fa-5x'></i> <span> about me </span>",
	},
	{
		id: 2,
		un: true,
		name: "estudios",
		unclicked: "<i class='fas fa-book fa-5x'></i> <span> studies </span>",
		clicked: "<i class='fas fa-book-open fa-5x'></i> <span> studies </span>",
	},
	{
		id: 3,
		un: true,
		name:"cursos",
		unclicked: "<i class='fas fa-box fa-5x'></i> <span> Courses </span>",
		clicked: "<i class='fas fa-box-open fa-5x'></i>  <span> Courses </span>",
	},
	{
		id: 4,
		un: true,
		name:"experiencia",
		unclicked: "<i class='fas fa-user-tie fa-5x'></i>  <span> Works </span>",
		clicked: "<i class='fas fa-chart-line fa-5x'></i> <span> Works </span>",
	},
	{
		id: 5,
		un: true,
		name: "juego",
		unclicked: "<i class='fas fa-gamepad fa-5x'></i> <span> Game </span>",
		clicked: "<i class='fas fa-robot fa-5x'></i> <span> Game </span>",
	},
];

const contenido ={
		show1: true,
		show2: false,
		show3: false,
		show4: false,
		show5: false,
		
	};
const algo = new Vue({
	el: '#app',
	data : {
		personal: personales,
		estudios: estudios,
		idiomas: idiomas,
		cursos: cursos,
		experiencias: experiencias,
		iconos: iconos,
		botons: JSON.parse(JSON.stringify( botones )),
		contenidos: contenido,

	},
	computed:{
		inicio: function(){
			console.log(this.botons)
		},
	},
	methods:{

    	encontrar(id){
    		const boton = this.botons.find(	boton => boton.id === id);
    			return boton;
    	},

    	reset(){
			for (let element of this.botons){
    			element.un = true;
    		}
    		for (let prop in this.contenidos){
    			this.contenidos[prop] = false;
    		}
    	},
    	
    	async show(id){
    		let i=1
    		for (let prop in this.contenidos){
    			if (i == id){
    				await gsap.delayedCall(1,function(){});
    				this.contenidos[prop] = true;
    				break;
    			}
    			i +=1;
    		}
    	},
    	
    	change(id){
    		const boton = this.encontrar(id);
    		this.reset();
    		boton.un = !boton.un;
    		this.show(id)
    	},

    	reiniciarCursos(){
    		for(let element of this.cursos){
    			element.show = false;
    		}
    	},

    	async cursosCambio(id){
    		this.reiniciarCursos()
    		let i=1
    		for (let element of this.cursos){
    			if (i == id){
    				await gsap.delayedCall(1,function(){});
    				element.show = true;
    				break;
    			}
    			i +=1;
    		}
    	}
	},
})
