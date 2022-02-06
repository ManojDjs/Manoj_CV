<template>
<div class="Face bg-indigo-600 box border-round">
<div class="text-5xl font-bold text-100  text-center m-5 pt-3 uppercase">About me</div>
<div class="grid my-6 mx-0 md:mx-6 md:my-0  max-h-auto p-4 border-round">
<div class="col-12 md:col-6 lg:col-6 md:inline-flex max-h-auto ">
            <div class="justify-content-evenly align-content-evenly w-auto h-auto py-6 px-0 md:px-6 md:py-0 border-round">
            
                <img src="@/assets/about.png" alt="profile" style="width:100%;display: block;border-radius: 50%;" id="image" >
            
            </div>
        
</div>
<div class="col-12 md:col-6 lg:col-6  my-auto  ">
    <div class="surface-0 text-700 text-center p-3 box border-round shadow-7">
        <div class="text-900 font-bold text-5xl mb-3">DETAILS</div>
          <label for="email" class="block text-53xl text-900 font-bold mb-2">Full Name:<InputText id="email" type="text" value="Jaya Deep Satya Manoj Doddi" class="w-full mb-3 text-center" /></label>
       <label for="email" class="block text-53xl text-900 font-bold mb-2">Address and PostCode:<InputText id="phone" type="text" value="11 Normanton Terrace,NE46PP" class="w-full mb-3 text-center" /></label>
        
        <label for="email" class="block text-53xl text-900 font-bold mb-2">Email:<InputText id="email" type="text" value="Djsmanoj0000@gmail.com" class="w-full mb-3 text-center" /></label>
         <label for="email" class="block text-53xl text-900 font-bold mb-2">Phone:<InputText id="phone" type="text" value="+44-7404089651" class="w-full mb-3 text-center" /></label>
         
            <Button type="download" label="Download CV"  icon="pi pi-download"  class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap shadow-8" ><a id='download' :href="pdfLink" download icon="pi pi-download"> Download CV</a></Button>
            
    </div>


</div>
    <!-- <div class="card  card-container bg-orange-900">
    <div class="field align-items-center justify-content-center">
        <div class="text-xl font-bold text-100 inline-block   text-center pr-3 mb-3">First Name:</div>
        <div class="text-xl  text-100 inline-block  text-center ">jaya Deep Satya Manoj</div>
        
    </div>
    <div class="field">
        <div class="text-xl font-bold text-100   text-center pr-3 mb-3">Last Name:</div>
        <div class="text-xl  text-100   text-center ">Doddi</div>
    </div>
    <div class="field">
         <div class="text-xl font-bold text-100   text-center pr-3 mb-3">Address:</div>
        <div class="text-xl  text-100   text-center ">47 a, Cranford Lane,Hounslow</div>
        
    </div>
    <div class="field">
         <div class="text-xl font-bold text-100   text-center pr-3 mb-3">Postcode:</div>
        <div class="text-xl  text-100   text-center ">TW59HA</div>
    </div>
    <div class="field">
        <div class="text-xl font-bold text-100   text-center pr-3 mb-3">Email:</div>
        <div class="text-xl  text-100   text-center ">djsmanoj0000@gmail.com</div>
    </div>
    <div class="field inline">
        <div class="text-xl font-bold text-100   text-center pr-3 mb-3">Phone:</div>
        <div class="text-xl  text-100 text-center ">+44-7404089651</div>
    </div> -->
</div>


<!--  -->

</div>


</template>

<script>

export default {
    components:{
        
    },
    data(){
        return{
            pdfLink:require("@/assets/Jaya_Deep_Satya_Manoj_DJS_CV.pdf")
        }
    }
    
}
</script>
<style scoped>
#download{
    font: bold 15px Arial;
    color: azure;
}
</style>