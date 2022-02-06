<template>
  <div class="home">
  <div class="mt-2"> <Face/> </div>
  <div class="mt-3"><Work/></div>
   <div class="mt-3"><Skills/></div>
    <div class="mt-3"><AboutMe/></div>
   <div class="mt-3" ><Projects/></div>
  <div class="mt-3"><Education/></div>
  <div class="mt-3" >
 <Contact/>
  </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Face from '@/components/Face.vue';
import Work from '@/components/Work.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import AboutMe from '@/components/AboutMe.vue';
import Contact from '@/components/Contact.vue'
export default {
  name: 'Home',
  components: {
    Face,
    Work,
    Education,
    Skills,
    Projects,
    AboutMe,
    Contact
    }
}
</script>
