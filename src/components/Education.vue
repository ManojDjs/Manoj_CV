<template>
      <div class="Education my-5 mx-0 md:mx-5 md:my-0 mb-3 p-3  bg-teal-700 border-round">
          <div class="card">
            <h1 class="text-center text-100 font-bold">Education</h1>
            <Timeline :value="events1" align="alternate" class="customized-timeline">
                 <template #marker="slotProps">
                    <span class="custom-marker p-shadow-2" :style="{backgroundColor: slotProps.item.color}">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>
                <template #content="slotProps">
                    <Card>
                        <template #title>
                            {{slotProps.item.status}}
                        </template>
                        <template #subtitle>
                            {{slotProps.item.date}}
                        </template>
                        <template #content>
                            <img v-if="slotProps.item.image" :src="slotProps.item.image" :alt="slotProps.item.name" width="100" class="p-shadow-2" />
                            <p class="font-bold w-10">
                                {{ slotProps.item.uni }}
                            </p>
                            <Button label="Read more" class="p-button-text"></Button>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            events1: [
                {status: "Master's in Advanced Computer Science", uni:'Northumbria Univeristy, NewCastle Upon Tyne', date: '01/10/2019-14/09/2021', icon: 'pi pi-check', color: '#9C27B0', image: 'https://northumbria-cdn.azureedge.net/-/media/corporate-website/new-sitecore-gallery/postgraduate/in-page-images/bl/half-width---cce.gif?modified=20201119194257'},
                {status: "Bachelor's in Computer Science",uni:'Gayatri Vidya Parishad School of engineering, India', date: '06/06/2014-03/02/2018', icon: 'pi pi-check', color: '#607D8B',image:'https://pbs.twimg.com/profile_images/1096439797554401280/ZBHjCt-__400x400.jpg'}
            ],
        }
    }
    
}
</script>
<style  lang='scss' scoped>
.custom-marker {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 50%;
    z-index: 1;
}

::v-deep(.p-timeline-event-content)
::v-deep(.p-timeline-event-opposite) {
    line-height: 1;
}

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
            .p-timeline-event:nth-child(even) {
                flex-direction: row !important;
                
                .p-timeline-event-content {
                    text-align: left !important;
                }
            }

            .p-timeline-event-opposite {
                flex: 0;
            }

            .p-card {
                margin-top: 1rem;
            }
        }
}
</style>