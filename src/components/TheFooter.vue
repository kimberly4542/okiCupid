<template>
    <!-- <footer>
        <div class="p-10 bg-black text-white">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
                    <div class="mb-5 text-center items-center ">
                        <a class="mt-4 px-4 py-2 flex justify-center items-center bg-blue-600 text-white rounded-sm shadow-md w-56 and h-12 font-bold">JOIN OKCUPID</a>
                        <div class="">
                        <p>© OkCupid 2024</p>
                        <a href="">from</a>
                        <span>
                            <a href=""><img src="https://cdn.okccdn.com/media/img/logos/match-group-darkbg.png" class="w-28" alt=""></a>
                        </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer> -->

    <footer class="bg-black mx-auto flex justify-center">
        <!-- <div class="container mx-100 px-4"> -->
        <div class="container md:mx-36 mt-4">
            <div class="md:hidden lg:hidden  ">
                <div class="md:hidden lg:hidden flex flex-row items-center  ">
                    <h3 class="text-white hover:text-gray-400 flex-grow ">LANGUAGE</h3>
                    <button class="text-white min-w-[180px]  flex flex-items justify-between border border-white">English
                        <i class="fa fa-angle-right ml-2" style="color: #ffffff;"></i>
                    </button>
                </div>
            </div>

            <div class="md:hidden lg:hidden">
                <button @click="toggleCollapse('second')" class="text-white hover:text-gray-400 w-full flex items-center justify-between">
                    <span>COMPANY</span>
                    <span v-if="collapsed.second">-</span>
                    <span v-else>+</span>
                </button>
                
                <div v-if="collapsed.second" class="mt-4">
                    <!-- First set of links for the footer -->
                    <ul class="text-white">
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">About</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Careers</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Press</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Ad Choices</a></li>
                        
                        <!-- Add more links here if needed -->
                    </ul>
                </div>
            </div>

            <div class="md:hidden lg:hidden">
                <button @click="toggleCollapse('third')" class="text-white hover:text-gray-400 w-full flex items-center justify-between">
                    <span>CONDITIONS</span>
                    <span v-if="collapsed.third">-</span>
                    <span v-else>+</span>
                </button>
                <div v-if="collapsed.third" class="mt-4">
                    <!-- First set of links for the footer -->
                    <ul class="text-white">
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Privacy</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Cookies – Manage preferences</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Terms</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Community Guidelines</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Consumer Health Data Privacy Policy</a></li>
                        <!-- Add more links here if needed -->
                    </ul>
                </div>
            </div>

            <div class="md:hidden lg:hidden">
                <button @click="toggleCollapse('fourth')" class="text-white hover:text-gray-400 w-full flex items-center justify-between">
                    <span>CONTACT</span>
                    <span v-if="collapsed.fourth">-</span>
                    <span v-else>+</span>
                </button>
                <div v-if="collapsed.fourth" class="mt-4">
                    <!-- First set of links for the footer -->
                    <ul class="text-white">
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Support</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Security</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Safety Tips</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Impressum</a></li>
                        <!-- Add more links here if needed -->
                    </ul>
                </div>
            </div>

            <div class="md:hidden lg:hidden w-full max-w-screen-lg">
                <button @click="toggleCollapse('fifth')" class="text-white hover:text-gray-400 w-full flex items-center justify-between ">
                    <span>FOLLOW</span>
                    <span v-if="collapsed.fifth">-</span>
                    <span v-else>+</span>
                </button>
                <div v-if="collapsed.fifth" class="mt-4">
                    <!-- First set of links for the footer -->
                    <ul class="text-white">
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Blog</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Tech Blog</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Facebook</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Instagram</a></li>
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Twitter</a></li>
                        <!-- Add more links here if needed -->
                    </ul>
                </div>
            </div>

            <div class="md:hidden lg:hidden">
                <button @click="toggleCollapse('sixth')" class="text-white hover:text-gray-400 w-full flex items-center justify-between">
                    <span>SPECIAL</span>
                    <span v-if="collapsed.sixth">-</span>
                    <span v-else>+</span>
                </button>
                
                <div v-if="collapsed.sixth" class="mt-4">
                    <!-- First set of links for the footer -->
                    <ul class="text-white">
                        <li><a href="#" class="hover:no-underline hover:text-gray-400">Download Apps</a></li>
                        <!-- Add more links here if needed -->
                    </ul>
                </div>
            </div>

            <div class="md:hidden lg:hidden text-white w-full flex items-center justify-between">
                <p class="text-xs">© OkCupid 2024</p>
                <a href="https://okcupid-app.zendesk.com/hc/en-us/articles/22781192467995-Why-we-share-across-Match-Group-Companies">from Match Group</a>
            </div>
            
         <div class="hidden md:block lg:block ">  
        <div class="sm:grid grid-cols-1 md:grid-cols-7">
            <!-- Centered Column -->
            <div class="mb-4 md:mb-0  md:text-center">
            <ul>
                <li class="py-3"><a href="#" class="px-8 py-3 justify-center items-center bg-blue-600 h-16 text-white rounded-sm shadow-md font-bold">Join OkCupid</a></li>
                <li class="py-1 text-white hover:text-gray-400">© OkCupid 2024</li>
                <li class="py-1"><a href="#" class="text-white hover:text-gray-400">from</a></li>
                <li class="py-1"><a href="#" class="flex justify-center"><img src="https://cdn.okccdn.com/media/img/logos/match-group-darkbg.png" class="w-28" alt=""></a></li>
            </ul>
            </div>

            <!-- Column 2 -->
            <div class="mb-4 md:mb-0 px-14 py-2">
                <h2 class="text-white mb-2 font-bold">LANGUAGE</h2>
            <ul>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">English</a></li>
            </ul>
            </div>


            <!-- Repeat similar structure for remaining columns -->

            <!-- Column 2 -->
            <div class="mb-4 md:mb-0  py-2">
            <h3 class="text-white mb-2 font-bold">COMPANY</h3>
            <ul>
                <li ><a href="#" class="text-white hover:no-underline">About</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Careers</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Press</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Ad Choices</a></li>
            </ul>
            </div>

            <!-- Column 2 -->
            <div class="mb-4 md:mb-0 py-2">
            <h3 class="text-white mb-2 font-bold">CONDITIONS</h3>
            <ul>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Privacy</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Cookies - Manage preferences</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Terms</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Community Guidelines</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Consumer Health Data Privacy Policy</a></li>
            </ul>
            </div>

            <!-- Column 2 -->
            <div class="mb-4 md:mb-0 py-2">
            <h3 class="text-white mb-2 font-bold">CONTACT</h3>
            <ul>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Support</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Security</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Safety Tips</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Impressum</a></li>
            </ul>
            </div>

            <!-- Column 2 -->
            <div class="mb-4 md:mb-0 py-2">
            <h3 class="text-white mb-2 font-bold">FOLLOW</h3>
            <ul>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Blog</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Tech Blog</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Facebook</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Instagram</a></li>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Twitter</a></li>
            </ul>
            </div>

            <!-- Column 2 -->
            <div class="mb-4 md:mb-0 py-2">
            <h3 class="text-white mb-2 font-bold">SPECIAL</h3>
            <ul>
                <li><a href="#" class="text-white hover:no-underline hover:text-gray-400">Download Apps</a></li>
            </ul>
            </div>
        </div> 
        </div>
        </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            collapsed: {
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false
            }
        };
    },
    methods: {
        // toggleCollapse() {
        //     this.collapsed = !this.collapsed;

        toggleCollapse(section) {
            this.collapsed[section] = !this.collapsed[section];
        }
    }
};
</script>
