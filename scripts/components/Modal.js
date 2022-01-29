const ModalCourses={
    template:`
    <article id="modalCourses" v-if="show">
			<h6 id="titleModal"> {{titulo}}	</h6>
            <i @click="handleClose"  class="fas fa-times" id="closeIcon"></i>

			<ul id="listModal">
				<li v-for="data in datas" class="listModalItem">
                    <label class="certificadoLabel">Institucion :  {{data.institution}} </label>	
                    <label class="certificadoLabel">Fecha : {{data.date}} </label>	
                    <label class="certificadoLabel">Titulo : {{data.title}} </label>	
                    <a  v-bind:href="data.link" class="certificadolink"> certificado </a>	
                </li>
			</ul>
	</article> 
    `,
    props:{'show':{ type: Boolean },'titulo':{ type: String},'datas':{ type: Array },'handleClose':{ type: Function }},

}