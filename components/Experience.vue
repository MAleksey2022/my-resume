<template>
  <div class="containerExperience">
    <h1 class="experienceTitle">{{ title }}</h1>
    <div class="blockExperience">
      <div class="fontWeight">{{ titleE1 }}</div>
      <a target="_blank" href="https://beautydancestudio.intita.com/">
        https://beautydancestudio.intita.com
      </a>
      <div>{{ techno }}: html, css, js, github, google meet, trello, figma.</div>
      <div>{{ role }}: - development of the block "about us";</div>
      <div class="textMarginLeft">- development of the block "our team";</div>
      <div class="textMarginLeft">- development "Header";</div>
      <div class="textMarginLeft">- 404 error page development;</div>
      <div class="textMarginLeft">- developing a developer page.</div>
    </div>
    <div class="blockExperience">
      <div class="fontWeight">{{ titleE2 }}</div>
      <a target="_blank" href="https://oksanaplakosh.intita.com/">
        https://oksanaplakosh.intita.com
      </a>
      <div>{{ techno }}: html, css, js, github, google meet, trello, figma, wow effects, swiper.js.</div>
      <div>{{ role }}: - development of the block "about us";</div>
      <div class="textMarginLeft">- development of the block "reviews";</div>
      <div class="textMarginLeft">- development of the block "subjects";</div>
      <div class="textMarginLeft">- 404 error page development;</div>
      <div class="textMarginLeft">- developing a developer page.</div>
    </div>
    <div class="blockExperience">
      <div class="fontWeight">{{ titleE3 }}</div>
      <a target="_blank" href="https://bday.intita.com/">
        https://bday.intita.com
      </a>
      <div>{{ techno }}: html, css, js, github, google meet, jira, figma, Nuxt.js, Vuetify, axios.</div>
    </div>
    <div class="blockExperience">
      <div class="fontWeight">{{ experienceEnd }}</div>
    </div>
  </div>
  <hr class="horizontalLine">
</template>

<script>
import {ref} from "vue";

export default {
  data() {
    return {
      title: ref('Professional Experience'),
      titleE1: ref('Beauty Dance Studio - website Dance Studio Vinnytsia'),
      titleE2: ref('Oksana Plakosh – website math teacher`s'),
      titleE3: ref('B-day - the website for greetings in the company is currently under development'),
      techno: ref('technologies'),
      role: ref('my role'),
      experienceEnd: ref('I have experience working with real estate documents. Also in execution of drawings of buildings in software complexes.'),
    };
  },
  watch:{
    '$store.state.language'(newValue) {
      if (newValue==='Ua') {
        this.title ='Професійний досвід';
        this.titleE1='Beauty Dance Studio - вебсайт Вінницької студії танцю';
        this.titleE2='Oksana Plakosh – вебсайт вчителя математики';
        this.titleE3='B-day - сайт для привітань в компанії наразі в розробці';
        this.techno='технології';
        this.role='моя роль';
        this.experienceEnd='Маю досвід роботи з документами на нерухомість. Також у виконанні креслень будівель у програмних комплексах.';
      }
      else if (newValue==='En') {
        this.title ='Professional Experience';
        this.titleE1='Beauty Dance Studio - website Dance Studio Vinnytsia';
        this.titleE2='Oksana Plakosh – website math teacher`s';
        this.titleE3='B-day - the website for greetings in the company is currently under development';
        this.techno='technologies';
        this.role='my role';
        this.experienceEnd='I have experience working with real estate documents. Also in execution of drawings of buildings in software complexes.';
      }
    }
  },
};
</script>

<style>
  .containerExperience{
    margin-left: 20px;
  }
  .experienceTitle {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-weight: 600;
  }
  .blockExperience{
    margin-top: 10px;
  }
  .fontWeight{
    font-weight: 500;
  }
  .containerExperience a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .textMarginLeft {
    margin-left: 54px;
  }
</style>