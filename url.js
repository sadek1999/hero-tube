let s = false
let a=0;
let c=0;

const loadData =async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data =await res.json()
    // console.log(data.data)
   const category=data.data;
//    display(category)

// ......for category Button---------

   const categoryButton=document.getElementById("category-button")
   category.forEach(name => {
    // console.log(name)
    const buttons=document.createElement('button')
    buttons.classList=''
    buttons.innerHTML=`
    <button onclick="loadCards('${name.category_id}')" class="btn btn-outline btn-error text-cente">${name.category}</button>`
       loadCards(1000);
      categoryButton.appendChild(buttons)
      
   });
}




// ...use the function for load the card info by API...

const loadCards=async(id)=>{
    a=id;
    
    
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`) ;
    const data = await res.json();
    const dataCards=data.data
    // console.log(dataCard)
    // console.log(s);
    

    if(dataCards.length>0 ){
        const noData=document.getElementById('no-data');
        noData.innerHTML=''
        if(s){
            let x =dataCards.sort((a,b)=>( parseFloat(b.others.views)-parseFloat(a.others.views) ))
            //  console.log(x)
    
            displayCard(x)
        }
        else{
            displayCard(dataCards)
        }
        
    }
    else{ nothing() }
    
}
 

// .....use the function for show data in ui....

    const displayCard =(dataCard)=>{

    
    const display=document.getElementById("display-card")
     display.innerHTML=''  

    dataCard.forEach(item=>{
        
        
        const cardDisplay =document.createElement('div');
        cardDisplay.classList='card card-compact  bg-base-100 shadow-xl '
        cardDisplay.innerHTML=`
        <figure><img class='w-full h-48 md:h-40 lg:h-60' src="${item.thumbnail}" alt="Shoes" />
        
        </figure>
        <div class="grid justify-end ">
        <p class=" bg-black text-white  h-7 -mt-10 mr-8 text-xl rounded-lg"> ${item?.others?. posted_date?  Math.floor(item?.others?.posted_date/3600)+'  hours'+ Math.floor((item?.others?.posted_date%3600)/60)+'  min ago' :''} </p>
      </div>
        
        <div class="flex gap-4 p-3">
         <div class="">
        <img class='rounded-full h-20 w-28' src="${item.authors[0].profile_picture}" alt="">
           </div>
    <div class="space-y-2 w-full ">
        <h2 class="card-title font-semibold text-2xl">${item.title}</h2>
        <div class="flex gap-3">
            <p class='text-xl'>${item.authors[0].profile_name} </p>

            <img class='' src="${item.authors[0]?.verified?'fi_10629607.png':''} " alt="">
            
        </div>
        <p class='text-xl'> <span>${item?.others?.views}</span> views</p>
       </div>
          </div>
            
        </div>
        `;
        display.appendChild(cardDisplay)
        
    });
   
}

// ....use the function when can't find data...
const nothing=()=>{
    document.getElementById('no-data').innerHTML='';
    const display=document.getElementById("display-card")
      display.innerHTML=''
      const noData=document.getElementById('no-data');
      const notFound=document.createElement('div');
         notFound.innerHTML=`
         <img class="mx-auto mb-10 md:h-60 " src="Icon.png" alt="">
            <h3 class=" text-2xl md:text-6xl text-center font-bold">Oops!! Sorry, There is no <br> content here</h3>
         `;
         noData.appendChild(notFound);
}




//  for show data in sort ....
const sorttheData=()=>{
    s=true
    loadCards(a)
}

loadData()


            