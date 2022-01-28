const ModalCourses={
    template:`
    <article id="modalCourses">
			<h6 id="titleModal"> Titulo	</h6>
			<ul id="listModal">
				<li>item</li>
			</ul>
	</article> 
    `,
    data(){
        return{
            name: personal.name,
            information: personal.information,
            informationKeys: Object.keys(personal.information),
            icons: socialMedia,
        }
    },
}