const ExperiencesResumen={
    template:`
    <article id="Experiences">
        <h6 id="titleExperiencia"> Experiencias </h6>

        <section id="listExp"  >
            <div class="expContainter"  v-for="(experience,index) in experiences">
                <details class="expDetail" >
                    <summary class="expTitleSummary">{{experience.enterprise}}</summary>
                    <div class="experienciaDetail">
                        <label for="file" class="itemExperienca"> 
                            <span class="itemExpTitle">   periodo: </span> {{experience.period}}
                        </label>
                        <label for="file" class="itemExperienca"> 
                            <span class="itemExpTitle"> cargo:  </span> {{experience.charge}}
                        </label>
                        <label for="file" class="itemExperienca"> 
                            <span class="itemExpTitle"> funciones: </span> {{experience.functions}}
                        </label>
                        <label for="file" class="itemExperienca"> 
                           <span class="itemExpTitle"> descripcion: </span> {{experience.description}}
                        </label>
                    </div>
                    </details>
                    
            </div>
        </section>
    </article> 
    `,
    data(){
        return{
            experiences:experience,
            experienceKeys: Object.keys(experience )
        }
    },
}