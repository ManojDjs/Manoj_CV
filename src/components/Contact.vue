<template>
<div>
<div class="card bg-orange-600 my-6 mx-2 md:mx-6 md:my-2 mb-3  border-round">
    <div class="text-3xl font-bold text-100  w-10 text-center m-5 pt-3 uppercase">Contact me</div>
    <div class="flex flex-wrap  m-5 border-round align-items-center pb-3 justify-content-center card-container blue-container">
        <div class=" w-12rem m-3 border-round">
            <div class="mt-0 border-round-bottom  text-white font-bold p-3 flex align-items-center justify-content-center">
            <s-facebook-messenger
                :window-features="windowFeatures"
                :share-options="shareOptions"
                :use-native-behavior="useNativeBehavior"
                @popup-close="onClose"
                @popup-open="onOpen"
                @popup-block="onBlock"
                @popup-focus="onFocus"
            > <Button label="facebook" class="mr-3  bg-blue-600 w-10rem shadow-5"  icon="pi pi-facebook"></Button>
            </s-facebook-messenger>



            </div>
        </div>
        <div class=" w-12rem m-3 border-round">
            <div class="mr-0 border-round-left  text-white font-bold p-3 flex align-items-center justify-content-center">
                <s-email :share-options="shareOptionsEmail">
                    <Button label="Email" class="mr-3 p-button-raised bg-yellow-600  w-10rem shadow-5"  icon="pi pi-envelope"></Button>
                </s-email>
            </div>
        </div>
        <div class=" w-12rem m-3 border-round">
            <div class="mb-0 border-round-top text-white font-bold p-3 flex align-items-center justify-content-center">
                <s-whats-app
    :window-features="windowFeatures"
    :share-options="shareOptionsWhstapp"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
  
   <Button label="Whtsapp" class="mr-3 p-button-raised bg-green-700  w-10rem shadow-5"  icon="pi pi-phone"></Button>
  
  </s-whats-app>
            </div>
        </div>
        <div class=" w-12rem m-3 border-round">
            <div class="m-0 border-round-right  text-white font-bold p-3 flex align-items-center justify-content-center">
                <s-linked-in
    :window-features="windowFeatures"
    :share-options="shareOptionsLin"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  > <Button label="Linked In" class="mr-3 p-button-raised bg-blue-700  w-10rem shadow-5"  icon="pi pi-info"></Button>
  </s-linked-in>
            </div>
        </div>
    </div>
</div>
    <div class="bg-100 p-4 shadow-2 border-round">
        
</div>
</div>
</template>
<script>
import { SFacebookMessenger } from 'vue-socials';
 import { SEmail } from 'vue-socials';
 import { SWhatsApp } from 'vue-socials';
 import { SLinkedIn } from 'vue-socials'
export default {
    components:{
     SFacebookMessenger,
     SEmail,
     SWhatsApp,
     SLinkedIn
     
  },
  data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          redirectUri: 'https://www.domain.com/',
          appId: 123456789,
          to: undefined,
        },
        useNativeBehavior: false,
        shareOptionsEmail: {
          mail: 'djsmanoj0000@gmail.com',
          cc: ['djsmanoj12345678910@gmail.com'],
          bcc: [],
          subject: 'Subject',
          body: 'Hello\nWorld',
        },
        shareOptionsWhstapp: {
          number: '+44-7404089651',
          text: 'Hello Manoj, I just viewed your portifolio, can we talk further?',
        },
        shareOptionsLin: {
          url: 'https://github.com/ManojDjs',
        },
      }
    },

    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},

    }
    
}
</script>
<style scoped>

</style>