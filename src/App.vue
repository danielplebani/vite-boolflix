<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default{
  components:{
    AppHeader,
    AppMain
  }
}
</script>


<template>
    <AppHeader id="AppHeader"></AppHeader>
    <AppMain id="AppMain"></AppMain>
</template> 



<style lang="scss" scoped>
#AppHeader{
  height: 7rem;
  background-image: url(./assets/img/33.jpg);
}

#AppMain{
  height: calc(100vh - 7rem);
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
</style>
