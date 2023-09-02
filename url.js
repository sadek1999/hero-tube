

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
    
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`) ;
    const data = await res.json();
    const dataCard=data.data
    console.log(dataCard)
    // dataCard.forEach(v=>{
    //     console.log(v?.others?.views)
    // })
    
 
    console.log(dataCard[1].others.views)
    let x =dataCard.sort((a,b) => (b.others.views) ? 1 : ((a.others.views > b.others.views) ? -1 : 0));
    console.log(x)



    if(dataCard.length>0){
        const noData=document.getElementById('no-data');
        noData.innerHTML=''
        displayCard(dataCard)
    }
    else{
        nothing()
    }
    
}
 const img =()=>{

    const img=document.createElement('img');
    img.innerHTML=` <img class='' src=" fi_10629607.png" alt="">
    <p class='text-xl  '>'hi'</p>`
    document.getElementById('in').appendChild(img)
 }

// .....use the function for show data in ui....

    const displayCard =(dataCard)=>{

    
    const display=document.getElementById("display-card")
     display.innerHTML=''  

    dataCard.forEach(item=>{
        // console.log(item)
        // console.log(item.authors[0].verified)
        // console.log(item?.others?.posted_date)
        //  console.log(item?.others?.views)
        

        if(item?.others?.posted_date){
            let time=item?.others?.posted_date;
            let hours = Math.floor(time/3600) ;
            let   sec= time%3600;
            let min =Math.floor(sec/60)
            // console.log(hours ,'hours', min ,+'min ago')
        }
        else{
        //    console.log('no')
        }


        // console.log(item.title)
        // console.log( item.title)
        
        
        
        const cardDisplay =document.createElement('div');
        cardDisplay.classList='card card-compact  bg-base-100 shadow-xl '
        cardDisplay.innerHTML=`
        <figure><img class='w-full h-60' src="${item.thumbnail}" alt="Shoes" />
            
        </figure>
        
        
            

       
        
       
        
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

const timeCount=(time)=>{

}


loadData()
{/* <div class="card-body  ">
            <div id='time-card' class=" grid justify-items-end ">
              <p class="bg-black text-white rounded-lg p-2 h-10 w-40 -mt-20 "> 2 hours 36 min ago</p>
            </div>
            </div> */}