<template>
    <div :style="{ backgroundColor: bgColor }" class="hidden md:flex container lg:px-56 h-screen w-full justify-between items-center gap-10 z-10">
     
        <div class="w-full flex-col md:w-1/2 items-center md:items-start">
           
            <div class="text-5xl font-extrabold leading-none text-white tracking-wider" style="width: 65%;  letter-spacing: 2px; text-shadow: -1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000, -5px 5px #000, -6px 6px #000, -7px 7px #000, -8px 8px #000; -webkit-text-stroke: 2px; -webkit-text-stroke-color: #000;">
            <h1>
                DATING FOR EVERY </h1> 
            <h1> 
                SINGLE PERSON </h1> </div>
            <div class="text-xl leading-relaxed mt-4 items-center">OkCupid is the only dating app that matches you <br> on what matters to you.
            <br>
            You deserve to find who you're looking for.
            <br>
            Meet them today!</div>
        <div class="mt-4">
            <span class="text-lg leading-tight">
                By clicking Join, you agree to our <br>
                <a href="https://okcupid-app.zendesk.com/hc/en/articles/23941864418203" class="font-semibold underline" >Terms.</a> 
                Learn how we process your <br> data in our
                <a href="https://okcupid-app.zendesk.com/hc/en-us/articles/22780694078491-Privacy-Policy" class="font-semibold underline">Privacy Policy</a>
                and <br>
                <a href="https://okcupid-app.zendesk.com/hc/en-us/articles/22780996014363-Managing-Your-Cookie-Preferences" class="font-semibold underline">Cookie Policy.</a>
            </span>
            
        </div>
            <a class="mt-4 px-4 py-2 flex justify-center items-center bg-black text-white rounded-sm shadow-md w-72 and h-16 font-bold">{{ btnName }}</a>
            <div class="py-3">
                <span class="mt-4 mb-2 font-bold">GET THE APP</span>
            </div>
            <div class="flex">
                <a href="https://cdn.okccdn.com/media/img/app-store-badges/ios/en.svghttps://apps.apple.com/us/app/okcupid-dating-date-singles/id338701294">
                    <img src="https://cdn.okccdn.com/media/img/app-store-badges/ios/en.svg" alt="" class="h-11">
                </a>
                <div class="mx-1 mb-24"></div>
                <a href="https://play.google.com/store/apps/details?id=com.okcupid.okcupid&referrer=utm_source%3Ddesktophome%26utm_medium%3Dweb&pli=1">
                    <img src="https://cdn.okccdn.com/media/img/app-store-badges/android/en.svg" class="h-11">
                </a>
            </div>   
        </div>
        <div class="hidden md:block md:w-1/2">
            <img src="https://cdn.okccdn.com/media/img/every_single_person/photos/two_women.png" alt="Image Description" class="md:max-h-screen md:max-w-full">
        </div>

    </div>

    <div class="md:hidden lg:hidden h-screen bg-blue-300 relative">
        <div class="mx-1 text-center">
            <div class="absolute inset-0 flex justify-center "></div>
            <div class="text-white absolute top- left-0 w-full text-center mb-4 z-10 ">
                <div class="text-white my-4"><h1 class="font-bold text-2xl " style="-webkit-text-stroke: 2px; -webkit-text-stroke-color: #000;">okcupid</h1> </div>  
                <div class="text-white font-extrabold tracking-wide text-center transform  text-3xl leading-tight"  style="letter-spacing: ; text-shadow: -1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000, -5px 5px #000; -webkit-text-stroke: 2px; -webkit-text-stroke-color: #000;">
            DATING FOR EVERY SINGLE PERSON 
            </div>
            </div>
            <div class="absolute inset-0 flex justify-center items-end "></div>

            
            
            <div class="text-white text-xs absolute bottom-0 left-0 w-full text-center mb-4 z-10 leading-tight ">
            <span class="">
                By clicking Join, you agree to our 
                <a href="https://okcupid-app.zendesk.com/hc/en/articles/23941864418203" class="font-semibold underline" >Terms.</a> 
                Learn how we process your data in our
                <a href="https://okcupid-app.zendesk.com/hc/en-us/articles/22780694078491-Privacy-Policy" class="font-semibold underline">Privacy Policy</a>
                and
                <a href="https://okcupid-app.zendesk.com/hc/en-us/articles/22780996014363-Managing-Your-Cookie-Preferences" class="font-semibold underline">Cookie Policy.</a>
            </span>
                <div class="flex mt-2 justify-center items-center">
                    <button type="submit" class="bg-white text-black font-extrabold py-3 px-4 rounded-full mt-3 mx-4 w-full text-sm">JOIN OKCUPID</button>
                </div>
                <div class="flex justify-center items-center mt-2">
                    <button @click="toggleSignIn" type="submit" class="bg-transparent text-white font-bold py-3 px-4 rounded-full mx-4 w-full text-base">SIGN IN
                        <i class="fa fa-angle-right ml-2" style="color: #ffffff;"></i>
                    </button>  
                </div>
                <div class="flex justify-center items-center mt-2">
                    <a href="https://okcupid-app.zendesk.com/hc/en-us/articles/22781192467995-Why-we-share-across-Match-Group-Companies">from Match Group</a>
                </div>

                 
            </div>

            <div class="absolute bottom-0 left-0 w-full object-cover justify-center">
                <img src="https://cdn.okccdn.com/media/img/every_single_person/photos/ice_cream.png" class="h-max" alt="">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>


            </div>

              
    </div>


  <div class="md:hidden lg:hidden relative">
    <div class="bg-gray-100 p-3">
      <h2 class="text-center font-bold ">SUCCESS STORIES</h2>
        <div class="mx-auto bg-white p-3 rounded-md">
            <div class="testimonial-slider">
        <div class="testimonial-wrapper ">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial text-base leading-relaxed"
            :class="{ active: index === currentSlide }"
          >
            <p>{{ testimonial.text }}</p>
          </div>
        </div>
      </div>
        </div>
      
      <div class="dots flex justify-center mt-3">
        <span
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>


    </div>



  </div>
 



 

</template>

<script>
export default {
  name: 'JOIN OKCUPID',
  props: {
    name: String,
    btnName: String
  },
  data() {
    return {

        text: "Get the best online dating app for singles to find a match based on who you really are and what you love. No matter who you are or what you are looking for, you are welcome at OkCupid.",
      testimonials: [
        { text: "“Both of us lived in the Bay Area for years but had no idea each other existed until OKCupid brought us together in the sunny summer of ’16. We knew after the first date when we both had butterflies and barely touched our lunches that we were each other’s someone special. Love can spring from anywhere given the chance and we will always be grateful to OKCupid for helping give us our chance and being the start to our strong and beautiful relationship.” "},
        { text: "We met on OkCupid way back in 2013. Online dating can be intimidating but connecting on OKC was simple. We got to see and read a little about each other, message back and forth, and eventually meet in person! That one message was life changing. It led us to start dating, move in together, get married, and we just welcomed our first child in 2021! I’m so thankful that OKC (and Michelle’s bravery) led me to my adventure partner for life.” " },
        { text: "“The wildest part is that, when we met, it was her first night on the app! We had a lot in common, from a love of burgers to Todd Rundgren, and both of us rearranged our schedules to meet up as soon as we possibly could. That was in 2016. Almost 6 years later, we are married, we have two cats, a niece and a nephew. We are each other’s family, and we gained new, amazing extended families as well. We love everything about one another, aside from the times we have to be apart. We’ve built this amazing life together and it all started on OkCupid.”" }
      ],
      currentSlide: 0,

    };
  },
  mounted() {
    console.log("Testimonials:", this.testimonials);
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    },
    
  }
  

};
</script>

<style scoped>
.testimonial-slider {
  margin-top:  ;
    
}

.testimonial-wrapper {
  
  overflow-x: hidden;
}


.testimonial {
    flex: 100%; /* Ensure each testimonial takes up the full width */
    opacity: 0;
    transition: opacity 0.5s ease;
  }


.testimonial.active {
  opacity: 1;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: black;
}
</style>
