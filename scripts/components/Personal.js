const PersonalStart={
    template:`
    <article id="DatosPersonales">
			<img src='./public/IMG_20220101_123729.png' id="imagenPrincipal">
			<div id="datosPrincipales">
				<h5 id="Nombre"> {{name}} </h5>
				
				<p title="information" v-for="key in informationKeys"> 
				<span> {{key}} : </span> 
				<label>{{information[key]}}</label>	
				</p>
				<details id="redesSociales">
					<summary>Redes sociales</summary>
                    <i v-for="icon in icons">
                            <a v-bind:href="icon.red" target="_blank" v-bind:class="icon.logo"></a>
                    </i>
				  </details>
				  
			</div>
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