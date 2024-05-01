<template>
  <div class="container-Experience">
    <h1 class="experience-Title">{{ title }}</h1>
    <div class="block-Experience">
      <div class="font-Weight">{{ titleE1 }}</div>
      <a target="_blank" href="https://beautydancestudio.intita.com/">
        https://beautydancestudio.intita.com
      </a>
      <div>{{ techno }}: html, css, js, github, google meet, trello, figma.</div>
      <div>{{ role }}: - development of the block "about us";</div>
      <div class="text-Margin-Left">- development of the block "our team";</div>
      <div class="text-Margin-Left">- development "Header";</div>
      <div class="text-Margin-Left">- 404 error page development;</div>
      <div class="text-Margin-Left">- developing a developer page.</div>
    </div>
    <div class="block-Experience">
      <div class="font-Weight">{{ titleE2 }}</div>
      <a target="_blank" href="https://oksanaplakosh.intita.com/">
        https://oksanaplakosh.intita.com
      </a>
      <div>{{ techno }}: html, css, js, github, google meet, trello, figma, wow effects, swiper.js.</div>
      <div>{{ role }}: - development of the block "about us";</div>
      <div class="text-Margin-Left">- development of the block "reviews";</div>
      <div class="text-Margin-Left">- development of the block "subjects";</div>
      <div class="text-Margin-Left">- 404 error page development;</div>
      <div class="text-Margin-Left">- developing a developer page.</div>
    </div>
    <div class="block-Experience">
      <div class="font-Weight">{{ titleE4 }}</div>
      <a target="_blank" href="https://guide.intita.com/">
        https://guide.intita.com
      </a>
      <div>{{ techno }}: html, css, js, github, google meet, trello, figma, Vue.js, Nuxt.js, Vuetify, d3, vue-carusel, maska, Sass.</div>
      <div>{{ role }}: - development form of communication, validation and mask";</div>
      <div class="text-Margin-Left">- development header;</div>
      <div class="text-Margin-Left">- developing a developer page.</div>
    </div>
    <div class="block-Experience">
      <div class="font-Weight">{{ titleE3 }}</div>
      <a target="_blank" href="https://bday.intita.com/">
        https://bday.intita.com
      </a>
      <div>{{ techno }}: html, css, js, github, google meet, jira, figma, Nuxt.js, Vuetify, axios.</div>
    </div>
    <div class="block-Experience">
      <div class="font-Weight">{{ experienceEnd }}</div>
    </div>
  </div>
  <hr class="horizontalLine">
  <div style="margin-bottom: 20px"></div>
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
      titleE4: ref('Guide by specializations – specialty review website'),
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
        this.titleE4= 'Guide by specializations – гід по спеціальностях';
        this.techno='технології';
        this.role='моя роль';
        this.experienceEnd='Маю досвід роботи з документами на нерухомість. Також у виконанні креслень будівель у програмних комплексах.';
      }
      else if (newValue==='En') {
        this.title ='Professional Experience';
        this.titleE1='Beauty Dance Studio - website Dance Studio Vinnytsia';
        this.titleE2='Oksana Plakosh – website math teacher`s';
        this.titleE3='B-day - the website for greetings in the company is currently under development';
        this.titleE4= 'Guide by specializations – specialty review website';
        this.techno='technologies';
        this.role='my role';
        this.experienceEnd='I have experience working with real estate documents. Also in execution of drawings of buildings in software complexes.';
      }
    }
  },
};
</script>

<style>
  .container-Experience{
    margin-left: 20px;
  }
  .experience-Title {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-weight: 600;
  }
  .block-Experience{
    margin-top: 10px;
  }
  .font-Weight{
    font-weight: 500;
  }
  .container-Experience a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .text-Margin-Left {
    margin-left: 54px;
  }
</style>