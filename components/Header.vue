<template>
  <div class="containerHeader">
    <div class="blockName">{{ myName }}</div>
    <div>{{ position }}</div>
    <div class="headerLanguage">
      <span class="language" :class="{ activeLanguage : language }" @click="clickLanguage">En</span> | <span class="language" :class="{ activeLanguage : !language }" @click="clickLanguage">Ua</span>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  data() {
    return {
      myName: ref('Oleksii Melnyk'),
      position: 'Junior frontend-developer',
      language: true,
    };
  },
  watch:{
    '$store.state.language'(newValue) {
      if (newValue==='Ua') {
        this.myName='Олексій Мельнк';
        this.position='Junior frontend-розробник';
      }
      else if (newValue==='En') {
        this.myName='Oleksii Melnyk';
        this.position='Junior frontend-developer';
      }
    }
  },
  mounted() {
    this.returnInfo();
  },
  methods:{
    returnInfo() {

    },
    clickLanguage() {
      this.language=!this.language;
      if (this.language) {this.$store.state.language = 'En';}
      else {this.$store.state.language = 'Ua';}
    },
  },
}
</script>

<style>
  .containerHeader {
    padding-top: 10px;
    text-align: center;
    height: 80px;
    background-color: indianred;
    position: relative;
  }
  .blockName {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .headerLanguage {
    position: absolute;
    right: 20px;
    top: 35px;
  }
  .language {
    cursor: pointer;
    color: black;
  }
  .activeLanguage {
   color: blue;
    font-weight: 600;
  }
</style>