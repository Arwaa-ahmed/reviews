let array=[
    {
        img:"./pics/1000_F_121937450_E3o8jRG3mKbMaAFprSuNOlyrLraSVVua.jpg",
        name:'Susan Smith',
        job:'Web Develober',
        title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis ipsum aut, eveniet corporis nulla exercitationem unde sapiente magnam quis facilis harum obcaecati voluptas laborum repellendus? Illo eos laudantium odio"
    },
    {
        img:"./pics/pic2.jpg",
        name:'Arwa Ahmed',
        job:'Front end',
        title:"Students have a diverse range of personal and contextual factors that influence their access to and achievement in their education. A new global study calls for a re-evaluation of education systems to promote personalised education."
    },
    {
       img:"pics/pic3.webp",
       name:'Afnan Ata',
       job:'Flutter',
       title:"Satyam Mishra was one of two educators from India to make it into the prestigious Global Teacher Prize Top 50 for 2021. In today’s article, he shares practical examples for making mathematics more engaging and relevant for students."
    },
    {
        img:'./pics/pic4.png',
        name:'Ebtsam Adam',
        job:'Data analysis',
        title:"A recent longitudinal study in the Philippines has followed a cohort of 4,500 public elementary school students for 5 years. The study found that children who attended preschool consistently outperformed those who did not in literacy, mathematics and social-emotional skills."
    }
]
let pic=document.getElementById('pic');
let name=document.getElementById('name');
let job=document.getElementById('job');
let title=document.getElementById('title');
function showperson(indx){
    let arr=array[indx];
    pic.src=arr.img;
    name.textContent=arr.name;
    job.textContent=arr.job;
    title.textContent=arr.title;
}
let prev=document.querySelector('.prev-btn');
let next=document.querySelector('.next-btn');
let random=document.querySelector('.random-btn');
let i=0;
prev.addEventListener('click',function(){
    i--;
    if(i<0){
        i=(array.length)-1;
    }
    showperson(i);
})
next.addEventListener('click',function(){
    i++;
    if(i>(array.length)-1){
        i=0;
    }
    showperson(i);
})
random.addEventListener('click',function(){
    i=Math.floor(Math.random()*array.length)
    showperson(i);
})