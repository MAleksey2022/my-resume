import{t as a,v as o,x as t,L as r,y as e,M as d,r as n,N as m,_ as f,O as u,z as _}from"./entry.BOaVJinU.js";const y=""+new URL("email.5nL2NhQt.png",import.meta.url).href,b=""+new URL("phone.CucHrdYY.png",import.meta.url).href,S=""+new URL("address.kjrKM5Tv.png",import.meta.url).href,w=""+new URL("git.DO6Hzav4.png",import.meta.url).href,x=""+new URL("linkedin.DcG7cmAw.png",import.meta.url).href,E={class:"blockContact"},$={class:"contactImg"},q=["src"],L=t("a",{href:"mailto:maleksey09@gmail.com"},"maleksey09@gmail.com",-1),U={class:"blockContact"},M={class:"contactImg"},T=["src"],V=t("a",{href:"tel:+38(068)040 03 13"}," 068 040 03 13 ",-1),j={class:"blockContact"},N={class:"contactImg"},I=["src"],C={target:"_blank",href:"https://maps.app.goo.gl/mmUJrLoQKC3QR8HM8"},z={class:"blockContact"},B={class:"contactImg"},H=["src"],G=t("a",{target:"_blank",href:"https://github.com/MAleksey2022"}," https://github.com ",-1),D={class:"blockContact"},O={class:"contactImg"},R=["src"],A=t("a",{target:"_blank",href:"https://www.linkedin.com/in/melnyk-oleksii-0b9796253/"}," https://www.linkedin.com ",-1),P=t("hr",{class:"horizontalLine"},null,-1),J={data(){return{address:n("Ukraine, Vinnitsa")}},watch:{"$store.state.language"(s,l){s==="Ua"?this.address="Україна, Вінниця":s==="En"&&(this.address="Ukraine, Vinnitsa")}}},Q=Object.assign(J,{__name:"Contacts",setup(s){return(l,h)=>(a(),o(d,null,[t("div",E,[t("div",$,[t("img",{alt:"img",src:r(y)},null,8,q)]),L]),t("div",U,[t("div",M,[t("img",{alt:"img",src:r(b)},null,8,T)]),V]),t("div",j,[t("div",N,[t("img",{alt:"img",src:r(S)},null,8,I)]),t("a",C,e(l.address),1)]),t("div",z,[t("div",B,[t("img",{alt:"img",src:r(w)},null,8,H)]),G]),t("div",D,[t("div",O,[t("img",{alt:"img",src:r(x)},null,8,R)]),A]),P],64))}}),W=Q,g=""+new URL("checkmark.C5MlzluQ.png",import.meta.url).href,F={class:"skillsTitle"},K={class:"blockSkills"},Y={class:"blockSkills"},X={class:"skillsImg"},Z=["src"],tt={class:"blockSkills"},et={class:"skillsImg"},it=["src"],st=t("hr",{class:"horizontalLine"},null,-1),nt={data(){return{title:n("Skills"),titleSoftSkills:n("Soft Skills"),softSkills:n("Sociable, quick learner, have experience working in a team, good interaction with the Back-end development team."),titleHardSkills:n("Hard Skills"),hardSkills:n(["frontend: Html, Css, JS, Vue.js, Nuxt.js, d3.js, swiper.js, axios, fetch, wow effects, vuex, vuetify, pinia, Scss, Sass.","backend: PHP, Laravel, MySQL.","other: Google meet, Figma, Trello, Git hub, Jira."])}},watch:{"$store.state.language"(s){s==="Ua"?(this.title="Навички",this.titleSoftSkills="Софт скіли",this.softSkills="Комунікабельний, швидко навчаюсь, маю досвід роботи в команді, гарно взаємодію з командою Back-end розробки.",this.titleHardSkills="Хард скіли",this.hardSkills[2]="інші: Google meet, Figma, Trello, Git hub, Jira."):s==="En"&&(this.title="Skills",this.titleSoftSkills="Soft Skills",this.softSkills="Sociable, quick learner, have experience working in a team, good interaction with the Back-end development team.",this.titleHardSkills="Hard Skills",this.hardSkills[2]="other: Google meet, Figma, Trello, Git hub, Jira.")}}},at=Object.assign(nt,{__name:"Skills",setup(s){return(l,h)=>(a(),o(d,null,[t("h1",F,e(l.title),1),t("div",K,e(l.titleSoftSkills),1),t("div",Y,[t("div",X,[t("img",{alt:"img",src:r(g)},null,8,Z)]),t("p",null,e(l.softSkills),1)]),t("div",tt,e(l.titleHardSkills),1),(a(!0),o(d,null,m(l.hardSkills,(p,i)=>(a(),o("div",{key:i,class:"blockSkills"},[t("div",et,[t("img",{alt:"img",src:r(g)},null,8,it)]),t("p",null,e(p),1)]))),128)),st],64))}}),ot=at,lt={data(){return{title:n("Educations"),educations:n([{year:"2022 - present",title:"Vinnytsia IT-Academy",special:"",qualification:"developer engineer"},{year:"2016 - 2018",title:"Vinnytsia National Technical University,",special:"Specialist in the speciality “Electrical engineering and electromechanics”,",qualification:"qualification: electrical Engineer;"},{year:"2013 - 2015",title:"Vinnytsia National Technical University,",special:"Specialist in the speciality “Industrial and civil engineering”,",qualification:"qualification: civil engineer in industrial and construction engineering;"},{year:"2004 - 2006",title:"Vinnytsia National Technical University,",special:"Specialist in the speciality “Management of Organization”,",qualification:"qualification: manager - economist;"},{year:"2000 - 2005",title:"Vinnytsia National Technical University,",special:"Specialist in the speciality “Computer system and networks”,",qualification:"qualification: engineer - system technician."}])}},watch:{"$store.state.language"(s){s==="Ua"?(this.title="Освіта",this.educations[0].year="2022 - до тепер",this.educations[0].title="Вінницька IT-Академія",this.educations[0].qualification="інженер розробник",this.educations[1].year="2016 - 2018",this.educations[1].title="Вінницький національний технічний університет,",this.educations[1].special="спеціальність “Електроенергетика, електротехніка та електромеханіка”,",this.educations[1].qualification="кваліфікація: інженер-електрик;",this.educations[2].year="2013 - 2015",this.educations[2].title="Вінницький національний технічний університет,",this.educations[2].special="спеціальність “Промислове та цивільне будівництво”,",this.educations[2].qualification="кваліфікація: інженер-будівельник з промислового і цивільного будівництва;",this.educations[3].year="2004 - 2006",this.educations[3].title="Вінницький національний технічний університет,",this.educations[3].special="спеціальність “Менеджмент організацій”,",this.educations[3].qualification="кваліфікація: менеджер економіст;",this.educations[4].year="2000 - 2005",this.educations[4].title="Вінницький національний технічний університет,",this.educations[4].special="спеціальність “Комп`ютерні системи та мережі”,",this.educations[4].qualification="кваліфікація: інженер-системотехнік."):s==="En"&&(this.title="Educations",this.educations[0].year="2022 - present",this.educations[0].title="Vinnytsia IT-Academy",this.educations[0].qualification="developer engineer",this.educations[1].year="2016 - 2018",this.educations[1].title="Vinnytsia National Technical University,",this.educations[1].special="Specialist in the speciality “Electrical engineering and electromechanics”,",this.educations[1].qualification="qualification: electrical Engineer;",this.educations[2].year="2013 - 2015",this.educations[2].title="Vinnytsia National Technical University,",this.educations[2].special="Specialist in the speciality “Industrial and civil engineering”,",this.educations[2].qualification="qualification: civil engineer in industrial and construction engineering;",this.educations[3].year="2004 - 2006",this.educations[3].title="Vinnytsia National Technical University,",this.educations[3].special="Specialist in the speciality “Management of Organization”,",this.educations[3].qualification="qualification: manager - economist;",this.educations[4].year="2000 - 2005",this.educations[4].title="Vinnytsia National Technical University,",this.educations[4].special="Specialist in the speciality “Computer system and networks”,",this.educations[4].qualification="qualification: engineer - system technician.")}}},ct={class:"educationTitle"},rt={key:0,class:"educationDate"},dt={key:0},ht={key:1},ut={key:2},_t=t("hr",{class:"horizontalLine"},null,-1);function pt(s,l,h,p,i,k){return a(),o(d,null,[t("h1",ct,e(i.title),1),(a(!0),o(d,null,m(i.educations,(c,v)=>(a(),o("div",{key:v,class:"blockEducation"},[c.year?(a(),o("p",rt,e(c.year),1)):u("",!0),t("div",null,[c.title?(a(),o("p",dt,e(c.title),1)):u("",!0),c.special?(a(),o("p",ht,e(c.special),1)):u("",!0),c.qualification?(a(),o("p",ut,e(c.qualification),1)):u("",!0)])]))),128)),_t],64)}const gt=f(lt,[["render",pt]]),mt={data(){return{title:n("Professional Experience"),titleE1:n("Beauty Dance Studio - website Dance Studio Vinnytsia"),titleE2:n("Oksana Plakosh – website math teacher`s"),titleE3:n("B-day - the website for greetings in the company is currently under development"),titleE4:n("Guide by specializations – specialty review website"),techno:n("technologies"),role:n("my role"),experienceEnd:n("I have experience working with real estate documents. Also in execution of drawings of buildings in software complexes.")}},watch:{"$store.state.language"(s){s==="Ua"?(this.title="Професійний досвід",this.titleE1="Beauty Dance Studio - вебсайт Вінницької студії танцю",this.titleE2="Oksana Plakosh – вебсайт вчителя математики",this.titleE3="B-day - сайт для привітань в компанії наразі в розробці",this.titleE4="Guide by specializations – гід по спеціальностях",this.techno="технології",this.role="моя роль",this.experienceEnd="Маю досвід роботи з документами на нерухомість. Також у виконанні креслень будівель у програмних комплексах."):s==="En"&&(this.title="Professional Experience",this.titleE1="Beauty Dance Studio - website Dance Studio Vinnytsia",this.titleE2="Oksana Plakosh – website math teacher`s",this.titleE3="B-day - the website for greetings in the company is currently under development",this.titleE4="Guide by specializations – specialty review website",this.techno="technologies",this.role="my role",this.experienceEnd="I have experience working with real estate documents. Also in execution of drawings of buildings in software complexes.")}}},ft={class:"container-Experience"},kt={class:"experience-Title"},vt={class:"block-Experience"},yt={class:"font-Weight"},bt=t("a",{target:"_blank",href:"https://beautydancestudio.intita.com/"}," https://beautydancestudio.intita.com ",-1),St=t("div",{class:"text-Margin-Left"},'- development of the block "our team";',-1),wt=t("div",{class:"text-Margin-Left"},'- development "Header";',-1),xt=t("div",{class:"text-Margin-Left"},"- 404 error page development;",-1),Et=t("div",{class:"text-Margin-Left"},"- developing a developer page.",-1),$t={class:"block-Experience"},qt={class:"font-Weight"},Lt=t("a",{target:"_blank",href:"https://oksanaplakosh.intita.com/"}," https://oksanaplakosh.intita.com ",-1),Ut=t("div",{class:"text-Margin-Left"},'- development of the block "reviews";',-1),Mt=t("div",{class:"text-Margin-Left"},'- development of the block "subjects";',-1),Tt=t("div",{class:"text-Margin-Left"},"- 404 error page development;",-1),Vt=t("div",{class:"text-Margin-Left"},"- developing a developer page.",-1),jt={class:"block-Experience"},Nt={class:"font-Weight"},It=t("a",{target:"_blank",href:"https://guide.intita.com/"}," https://guide.intita.com ",-1),Ct=t("div",{class:"text-Margin-Left"},"- development header;",-1),zt=t("div",{class:"text-Margin-Left"},"- developing a developer page.",-1),Bt={class:"block-Experience"},Ht={class:"font-Weight"},Gt=t("a",{target:"_blank",href:"https://bday.intita.com/"}," https://bday.intita.com ",-1),Dt={class:"block-Experience"},Ot={class:"font-Weight"},Rt=t("hr",{class:"horizontalLine"},null,-1),At=t("div",{style:{"margin-bottom":"20px"}},null,-1);function Pt(s,l,h,p,i,k){return a(),o(d,null,[t("div",ft,[t("h1",kt,e(i.title),1),t("div",vt,[t("div",yt,e(i.titleE1),1),bt,t("div",null,e(i.techno)+": html, css, js, github, google meet, trello, figma.",1),t("div",null,e(i.role)+': - development of the block "about us";',1),St,wt,xt,Et]),t("div",$t,[t("div",qt,e(i.titleE2),1),Lt,t("div",null,e(i.techno)+": html, css, js, github, google meet, trello, figma, wow effects, swiper.js.",1),t("div",null,e(i.role)+': - development of the block "about us";',1),Ut,Mt,Tt,Vt]),t("div",jt,[t("div",Nt,e(i.titleE4),1),It,t("div",null,e(i.techno)+": html, css, js, github, google meet, trello, figma, Vue.js, Nuxt.js, Vuetify, d3, vue-carusel, maska, Sass.",1),t("div",null,e(i.role)+': - development form of communication, validation and mask";',1),Ct,zt]),t("div",Bt,[t("div",Ht,e(i.titleE3),1),Gt,t("div",null,e(i.techno)+": html, css, js, github, google meet, jira, figma, Nuxt.js, Vuetify, axios.",1)]),t("div",Dt,[t("div",Ot,e(i.experienceEnd),1)])]),Rt,At],64)}const Jt=f(mt,[["render",Pt]]),Qt={class:"containerAll"},Wt={class:"containerLeft"},Ft={class:"containerRight"},Yt={__name:"index",props:{layout:"default"},setup(s){return(l,h)=>(a(),o("div",Qt,[t("div",Wt,[t("div",null,[_(W)]),t("div",null,[_(ot)])]),t("div",Ft,[t("div",null,[_(gt)]),t("div",null,[_(Jt)])])]))}};export{Yt as default};