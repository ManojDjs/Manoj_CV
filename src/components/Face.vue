<template>
<div class="Face ">
<div class="grid bg-purple-600  my-6 mx-0 md:mx-6 md:my-0  max-h-auto p-4 border-round">
<div class="col-12 md:col-6 lg:col-6 md:inline-flex ml-18 max-h-auto ">
            <div class="  justify-content-evenly align-content-evenly w-auto h-auto py-6 px-0 md:px-6 md:py-0 border-round">
            
                <img src="@/assets/face.png" alt="profile" style="width:100%;display: block;border-radius: 50%;right:0px" id="image" class="pl-50" >
            
            </div>
        
</div>
<div class="col-12 md:col-6 lg:col-6">
    <div class=" text-100 text-left max-h-screen box-shadow-8">
        <div class="text-100 font-bold mb-3"><i class="pi pi-volume-up"></i>&nbsp;Hello, I am</div>
        <div class="text-orange-600 font-bold text-3xl mb-3 uppercase">jaya Deep satya manoj doddi</div>
        <div class="text-lg md:text-3xl m-0 w-10"><Main/></div>
        <div class="text-xl md:text-1xl m-0 w-10">A Master's Computer science Engineer with passion towars Software Development and Real time technical solutions development.
            Fitness enthusiast, Music lover and Runner.
        </div>

    </div>

<!--  -->
</div>
</div>
</div>
</template>

<script>
import Main from '@/components/Main.vue';
// import Contact from '@/components/Contact.vue'
export default {
    components:{
        Main,
        // Contact
    }
    
}
</script>
<style scoped>

</style>