const KnowLedge={
    template:`
    <article id="knowledge">
        <section id="knowledgeBars">
            <div class="progressSection"  v-for="key in ratesKeys">
                <label for="rate" class="labelProgress">{{key}}: </label>
                <progress id="file" max="100" v-bind:value="rates[key]"> {{rates[key]}}% </progress>
            </div>
        </section>
        <section id='carousel' class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">
                    <li  
                        v-for="(button,index) in buttonDatas"
                        :id="button._id"
                        :key="button._id"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper">
                            <a 
                            v-bind:href="button.before"
                            class="carousel__prev">
                                Go to last slide
                            </a>
                                <input 
                                    class="buttonCourse" 
                                    type="button" 
                                    v-bind:value="button.title"
                                    @click="handleClick"
                                >
                                
                            <a 
                            v-bind:href="button.after"
                            class="carousel__next">
                                Go to next slide
                            </a>
                        </div>
                    </li>
            </ol>
        </section>
    </article>
    <Modalcourses 
            v-bind:show="showModal" 
            v-bind:titulo="selected" 
            v-bind:datas="certificates[selected]" 
            v-bind:handleClose="handleClick" 
        ></Modalcourses>
    `,
    components:['Modalcourses'],
    data(){
        return{
            rates: ratesKnowlege,
            ratesKeys: Object.keys(ratesKnowlege),
            buttonDatas: buttonDatas,
            certificates: certificates,
            showModal:false,
            selected: '',
            
        }
    },  
    methods:{
        handleClick(event){
            this.showModal = !this.showModal;
            this.selected = event.target.value;
        },
        handleClose(){
            this.showModal = false;
            this.selected = '';
        }
    },
}