const closeBtn = document.querySelector('.close-btn');

const sidebar = document.querySelector('.sidebar');

const toggleBtn = document.querySelector('.sidebar-toggle')

toggleBtn.addEventListener('click',()=>{
    sidebar.classList.toggle("show-sidebar");
   /*  if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
    else{
        sidebar.classList.add('show-sidebar')
    } */
})

closeBtn.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar')
})