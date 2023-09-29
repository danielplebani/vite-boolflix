<script>

import HeaderSearchbar from './HeaderSearchbar.vue'

export default{
    name: 'AppHeader',

    components:{
        HeaderSearchbar
    }
}
</script>


<template>
    <div class="d-flex align-items-center">
        <div class="col-6 text-white d-flex justify-content-between align-items-center">
            <img id="logo-header" src="/src/assets/img/scritta.png" alt="logo netflix">
            <div class="col-8 d-flex justify-content-between">
              <span>Home</span>
              <span>Serie TV</span>
              <span>Film</span>
              <span>Nuovi e popolari</span>
              <span>La mia lista</span>
              <span>Sfoglia per lingua</span> 
            </div>
            
        </div>
        
        <div class="col-6 d-flex align-items-center justify-content-end text-white pe-5">
            <HeaderSearchbar id="HeaderSearchbar"></HeaderSearchbar>

            <i class="fa-regular fa-bell fs-3 me-3"></i>
            <img src="../assets/img/user.jpg" alt="user" class="me-2" id="UserImg">
            <i class="fa-solid fa-caret-down"></i>
        </div>
    </div>
</template> 



<style lang="scss" scoped>
#logo-header{
    width: 20%;
    margin-left: 5rem;
}

span{
    font-size: large;
    cursor: pointer;
}

span:hover, i:hover{
    color: red;
}

#UserImg{
    border-radius: 50%;
    border: 3px solid red;
    object-fit: cover;
    width: 50px;
    aspect-ratio: 1 / 1;
}
</style>