 const access_key="ZxCMVcZqSxJTaEK53tYGybhMyqoIdsZ-I5NrVfm8rI8";
const formele=document.querySelector('form');
 const search_ele=document.getElementById('search-input');
 const search_results=document.querySelector('.search_results')
 const showmore=document.getElementById('showmore');

 let inputdata=""
 let page=1;

 async function searchImages()
 {
    inputdata=search_ele.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${access_key}`
    const response=await fetch(url);
    const data=await response.json();

    const results=data.results;

    if(page==1)
    {
        search_results.innerHTML=""
    }
  results.map((result)=>
  {
    const imagewrappr=document.createElement('div');
   imagewrappr.classList.add("search_result","card");
    const image =document.createElement('img');
    image.src= result.urls.small ;
    image.alt=result.alt_description;
    const imagelink=document.createElement('a');
    imagelink.href=result.links.html
    imagelink.classList.add('downstyle');
    imagelink.target = "_blank";
    imagelink.textContent="DOWNLOAD";
    const para=document.createElement('p');
    para.textContent= result.alt_description;
    para.classList.add('desc');


    imagewrappr.appendChild(image);
    imagewrappr.appendChild(imagelink);
    imagewrappr.appendChild(para);
    search_results.appendChild(imagewrappr);
  });
  page++;
  
 }

 formele.addEventListener("submit",(event)=>
 {
    event.preventDefault();
    page=1;
    searchImages()
 });

 showmore.addEventListener("click",(event)=>
 {

    event.preventDefault();
    page++;
    searchImages()
    console.log("here")
 });
  


