<template>
  <h1 class="skillsTitle">{{ title }}</h1>
  <div class="blockSkills">{{ titleSoftSkills }}</div>
  <div class="blockSkills">
    <div class="skillsImg"><img alt="img" :src=check /></div>
    <p>{{ softSkills }}</p>
  </div>
<!--  <div class="blockSkills">-->
<!--    <div class="skillsImg"><img alt="img" :src=check /></div>-->
<!--    <p>backend: PHP, Laravel, MySQL.</p>-->
<!--  </div>-->
<!--  <div class="blockSkills">-->
<!--    <div class="skillsImg"><img alt="img" :src=check /></div>-->
<!--    <p>{{ other }}</p>-->
<!--  </div>-->
  <div class="blockSkills">{{ titleHardSkills }}</div>
  <div v-for="(skills, index) in hardSkills" :key="index" class="blockSkills">
    <div class="skillsImg"><img alt="img" :src=check /></div>
    <p>{{ skills }}</p>
  </div>
  <hr class="horizontalLine">
</template>

<script setup>
  import check  from '~/assets/checkmark.png';
</script>

<script>
import {ref} from "vue";

export default {
  data() {
    return {
      title: ref('Skills'),
      titleSoftSkills: ref('Soft Skills'),
      softSkills: ref('Sociable, quick learner, have experience working in a team, good interaction with the Back-end development team.'),
      titleHardSkills: ref('Hard Skills'),
      hardSkills: ref([
        'frontend: Html, Css, JS, Vue.js, Nuxt.js, d3.js, swiper.js, axios, fetch, wow effects, vuex, vuetify, pinia, Scss, Sass.',
        'backend: PHP, Laravel, MySQL.',
        'other: Google meet, Figma, Trello, Git hub, Jira.',
      ]),
    };
  },
  watch:{
    '$store.state.language'(newValue) {
      if (newValue==='Ua') {
        this.title ='Навички';
        this.titleSoftSkills='Софт скіли';
        this.softSkills='Комунікабельний, швидко навчаюсь, маю досвід роботи в команді, гарно взаємодію з командою Back-end розробки.';
        this.titleHardSkills='Хард скіли';
        this.hardSkills[2] ='інші: Google meet, Figma, Trello, Git hub, Jira.';
      }
      else if (newValue==='En') {
        this.title ='Skills';
        this.titleSoftSkills='Soft Skills';
        this.softSkills='Sociable, quick learner, have experience working in a team, good interaction with the Back-end development team.';
        this.titleHardSkills='Hard Skills';
        this.hardSkills[2] ='other: Google meet, Figma, Trello, Git hub, Jira.';
      }
    }
  },
};
</script>

<style>
  .skillsTitle {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-weight: 600;
  }
  .blockSkills {
    display: flex;
    margin: 10px 0 0 20px;
  }
  .skillsImg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .skillsImg img {
    width: 20px;
  }
</style>