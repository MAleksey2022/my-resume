<template>
  <h1 class="educationTitle">{{ title }}</h1>

  <div v-for="(education, index) in educations" :key="index" class="blockEducation">
    <p v-if="education.year" class="educationDate">{{ education.year }}</p>
    <div>
      <p v-if="education.title">{{ education.title }}</p>
      <p v-if="education.special">{{ education.special }}</p>
      <p v-if="education.qualification">{{ education.qualification }}</p>
    </div>
  </div>
  <hr class="horizontalLine">
</template>

<script>
import {ref} from "vue";

export default {
  data() {
    return {
      title: ref('Educations'),
      educations: ref([
        {
          year: '2022 - present',
          title: 'Vinnytsia IT-Academy',
          special: '',
          qualification: 'developer engineer',
        },
        {
          year: '2016 - 2018',
          title: 'Vinnytsia National Technical University,',
          special: 'Specialist in the speciality “Electrical engineering and electromechanics”,',
          qualification: 'qualification: electrical Engineer;',
        },
        {
          year: '2013 - 2015',
          title: 'Vinnytsia National Technical University,',
          special: 'Specialist in the speciality “Industrial and civil engineering”,',
          qualification: 'qualification: civil engineer in industrial and construction engineering;',
        },
        {
          year: '2004 - 2006',
          title: 'Vinnytsia National Technical University,',
          special: 'Specialist in the speciality “Management of Organization”,',
          qualification: 'qualification: manager - economist;',
        },
        {
          year: '2000 - 2005',
          title: 'Vinnytsia National Technical University,',
          special: 'Specialist in the speciality “Computer system and networks”,',
          qualification: 'qualification: engineer - system technician.',
        },
      ])
    }
  },
  watch:{
    '$store.state.language'(newValue) {
      if (newValue==='Ua') {
        this.title ='Освіта';
        this.educations[0].year='2022 - до тепер';
        this.educations[0].title='Вінницька IT-Академія';
        this.educations[0].qualification='інженер розробник';
        this.educations[1].year='2016 - 2018';
        this.educations[1].title='Вінницький національний технічний університет,';
        this.educations[1].special='спеціальність “Електроенергетика, електротехніка та електромеханіка”,';
        this.educations[1].qualification='кваліфікація: інженер-електрик;';
        this.educations[2].year='2013 - 2015';
        this.educations[2].title='Вінницький національний технічний університет,';
        this.educations[2].special='спеціальність “Промислове та цивільне будівництво”,';
        this.educations[2].qualification='кваліфікація: інженер-будівельник з промислового і цивільного будівництва;';
        this.educations[3].year='2004 - 2006';
        this.educations[3].title='Вінницький національний технічний університет,';
        this.educations[3].special='спеціальність “Менеджмент організацій”,';
        this.educations[3].qualification='кваліфікація: менеджер економіст;';
        this.educations[4].year='2000 - 2005';
        this.educations[4].title='Вінницький національний технічний університет,';
        this.educations[4].special='спеціальність “Комп`ютерні системи та мережі”,';
        this.educations[4].qualification='кваліфікація: інженер-системотехнік.';
      }
      else if (newValue==='En') {
        this.title ='Educations';
        this.educations[0].year='2022 - present';
        this.educations[0].title='Vinnytsia IT-Academy';
        this.educations[0].qualification='developer engineer';
        this.educations[1].year='2016 - 2018';
        this.educations[1].title='Vinnytsia National Technical University,';
        this.educations[1].special='Specialist in the speciality “Electrical engineering and electromechanics”,';
        this.educations[1].qualification='qualification: electrical Engineer;';
        this.educations[2].year='2013 - 2015';
        this.educations[2].title='Vinnytsia National Technical University,';
        this.educations[2].special='Specialist in the speciality “Industrial and civil engineering”,';
        this.educations[2].qualification='qualification: civil engineer in industrial and construction engineering;';
        this.educations[3].year='2004 - 2006';
        this.educations[3].title='Vinnytsia National Technical University,';
        this.educations[3].special='Specialist in the speciality “Management of Organization”,';
        this.educations[3].qualification='qualification: manager - economist;';
        this.educations[4].year='2000 - 2005';
        this.educations[4].title='Vinnytsia National Technical University,';
        this.educations[4].special='Specialist in the speciality “Computer system and networks”,';
        this.educations[4].qualification='qualification: engineer - system technician.';
      }
    }
  },
};
</script>

<style>
.educationTitle {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-weight: 600;
}
.blockEducation {
  display: flex;
  margin: 10px 5px 0 20px;
}
.educationDate {
  width: 110px;
  min-width: 110px;
  font-weight: 500;
}
</style>