const KnowLedge={
    template:`
    <article id="knowledge">
        <section id="knowledgeBars">
            <div>
                <label for="file">File progress:</label>
                <progress id="file" max="100" value="70"> 70% </progress>
            </div>
            
            <div>
                <label for="file">File progress:</label>
                <progress id="file" max="100" value="70"> 70% </progress>
            </div>
        </section>
        <section id='carousel' class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">
                <li id="carousel__slide1"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper">
                        <a href="#carousel__slide4"
                        class="carousel__prev">Go to last slide</a>
                            <input class="buttonCourse" type="button" value="Click me">
                        <a href="#carousel__slide2"
                            class="carousel__next">Go to next slide</a>
                    </div>
                </li>
                <li id="carousel__slide2"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper">
                        <a href="#carousel__slide1"
                        class="carousel__prev">Go to previous slide</a>
                            <input class="buttonCourse" type="button" value="Click me">
                        <a href="#carousel__slide3"
                        class="carousel__next">Go to next slide</a>
                    </div>
                </li>
                <li id="carousel__slide3"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper">
                        <a href="#carousel__slide2"
                        class="carousel__prev">Go to previous slide</a>
                            <input class="buttonCourse" type="button" value="Click me">
                        <a href="#carousel__slide4"
                        class="carousel__next">Go to next slide</a>
                    </div>
                </li>
                <li id="carousel__slide4"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper">
                        <a href="#carousel__slide3"
                        class="carousel__prev">Go to previous slide</a>
                            <input class="buttonCourse" type="button" value="Click me">
                        <a href="#carousel__slide1"
                        class="carousel__next">Go to first slide</a>
                    </div>
                </li>
            </ol>
        </section>
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