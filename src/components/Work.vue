<template>
    <div class="Work my-6 mx-0 md:mx-6 md:my-0 mb-3 green-200">
    
    <div class="teal-700 p-3 shadow-2 border-round">
        <div class="text-xl font-bold text-900 mb-3">Work Experience</div>
        <div class="text-purple-600 font-bold w-10 text-4xl mb-2">Python Developer</div>
        <p class="text-left font-bold mb-2">2018-2020</p>
        <div class="text-600 font-bold w-10 text-2xl mb-2">RIG Technologies Private Limited, Chennai</div>
        <div> 
            <!-- class="border-2 border-dashed border-300"> -->
            <Fieldset legend="About Wotk" :toggleable="true" :collapsed="false">
            <ol>
            
                <div class="text-orange-600 mb-1">
                    <li>
                    Worked with Core Python Programming, Writing advanced concepts like asyncronus Programming.
                </li>
                </div>
            

            
                 <div class="text-orange-600 mb-1">
                     <li>
                    Django API Development, for feeding Vue front end. used this for Manual data checking process.
                </li>
                </div>

            
            
                 <div class="text-orange-600 mb-1">
                     <li>
                   Web Scraping with Python Selenium. For Scraping data from job boards.And for data cleaning.
                   </li>
                </div>
            
            
                 <div class="text-orange-600 mb-1">
                     <li>
                    Vue JS Front-End.
                    </li>
                </div>
            
            </ol>

            </Fieldset>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>