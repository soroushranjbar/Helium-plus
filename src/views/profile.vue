<template>
<main>
<TheProfile/>
<HorizontalPost/>
</main>
</template>

<script>
import HorizontalPost from '@/components/common-components/HorizontalPost.vue'
import TheProfile from '@/components/view-components/TheProfile.vue'
export default {
    name: "profile",
    data(){
        return{
            isActive: 'hide',
        }
    },
    components:{
        HorizontalPost,
        TheProfile,
    },
}
</script>

<style>
</style>