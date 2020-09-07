<template>
  <div>
    <p @click="routerPush" style="cursor: pointer">{{hellText}}</p>
  </div>
</template>

<script>
export default {
  name:'firstChildren',
  props:{
    hellText:{
      type:String,
      default:''
    }
  },
  data(){
    return {
    };
  },
  methods:{
    routerPush(){
      this.$router.push('/HelloWorld');
    }
  }

};
</script>

<style>

</style>