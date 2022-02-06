<template>
    <div class="Projects bg-indigo-900 my-6 mx-2 md:mx-6 md:my-2 mb-3 border-round">
    <div class="text-2xl font-bold text-100  text-center m-5 pt-3">Projects</div>
    <div class="grid pl-3 pr-3">
    <div class="col-12 md:col-6 lg:col-3 box shadow-3 scalein animation-duration-500 animation-iteration-1 border-round">
        <Card style="height:550px">
    <template #header>
        <img alt="user header" src="@/assets/lettingavenue.jpg" style="height:200px;" class="p-3">
    </template>
    <template #title>
        Letting avenue Property Lisiting Application
    </template>
    <template #content>
        A Web Application Platform for lisitng rental houses on web. Built with Vuejs front end and Django Rest API Backend.
        Integrated with the Docker and uploaded on Github.
    </template>
    <template #footer>
        <Button type="button" label="Github" badge="8" />
        <br>
        <a href="https://github.com/ManojDjs/Letting_avenue"> LINK</a>
    </template>
</Card>
    </div>
    <div class="col-12 md:col-6 lg:col-3 box shadow-3 scalein animation-duration-500 animation-iteration-1 border-round">
        <Card  style="height:550px">
    <template #header>
        <img alt="user header" src="@/assets/health.jpg" style="height:200px;" class="p-3">
    </template>
    <template #title>
        Online Medcation webapplication built
        with Vuejs and Django DRF.
    </template>
    <template #content>
        Qigong Practise Application build with Vuejs and Django DRF. This project is developed during my masters internship period.
        Well built with real time availablility.
    </template>
    <template #footer>
        <Button type="button" label="Github" badge="15" />
        <br>
        <a href="https://github.com/ManojDjs/Docker-django-vue-boilerplate "> LINK</a>
    </template>
</Card>
    </div>
    <div class="col-12 md:col-6 lg:col-3 box shadow-3 scalein animation-duration-500 animation-iteration-1 border-round">
        <Card style="height:550px">
    <template #header>
        <img alt="user header" src="@/assets/hrv.jpg" style="height:200px;" class="p-3">
    </template>
    <template #title>
        Remote Heart rate using Web camera
    </template>
    <template #content>
        Heart Rate measurement with non-contact process using the web camera RPPG method. This project uses Computer vision alogorithm.
        Built with Flask, Django and Vuejs.
    </template>
    <template #footer>
        <Button type="button" label="Github" badge="10" />
        <br>
        <a href="https://github.com/ManojDjs/Backend_HRv"> LINK</a>
    </template>
</Card>
    </div>
    <div class="col-12 md:col-6 lg:col-3 box shadow-3 scalein animation-duration-500 animation-iteration-1 border-round">
      <Card style="height:550px">
    <template #header>
        <img alt="user header" src="@/assets/chat-app.jpg" style="height:200px;" class="p-3">
    </template>
    <template #title>
        Chat App made with Django Channels(web scoket) and Vue js.
    </template>
    <template #content>
        Chat Application built with Django inbuilt channeles( web dockets) and Vuejs.
        Group messaging and individual messaging features. built on personal intrest.
    </template>
    <template #footer>
        <Button type="button" label="Github" badge="18" />
        <br>
        <a href="https://github.com/ManojDjs/django-rest-api-vue-chat-application" style="margin-left: .5em"> LINK</a>
    </template>
</Card>
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