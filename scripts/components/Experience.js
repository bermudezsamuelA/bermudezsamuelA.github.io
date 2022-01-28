const ExperiencesResumen={
    template:`
    <article id="Experiences">
        <h6 id="titleExperiencia"> Experiencias </h6>

        <ul id="listExp">
            <li>
                <details id="experiencia">
                    <summary>Titulo  del puesto</summary>
                    <div id="esperienciaDetail">
                        <label for="file" id="itemExperienca"> algun detalle</label>
                        <p id="desarrollo">
                            desarrollo
                        </p>
                    </div>
                    </details>
                    
            </li>
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