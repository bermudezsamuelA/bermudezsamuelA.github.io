const AboutMe ={
    template:`
    <article id="aboutMe">
				<h6 id="sumaryTitle"> {{title}} </h6>
				
				<p title="Resumen" id="sumaryMe"> 
                {{text}}
				</p>
	</article>
    `,
    data(){
        return{
            title: aboutMe.title,
            text: aboutMe.content,
        }
    }
}