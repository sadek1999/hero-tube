

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
    <button onclick="showCard(${name.category_id})" class="btn btn-outline btn-error text-cente">'${name.category}'</button>`
    
      categoryButton.appendChild(buttons)
   });
}

const showCard=async(id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`) ;
    const data = await res.json();
    const dataCard=data.data
    // console.log(dataCard)
    const display=document.getElementById("display-card")
     display.innerHTML=''  

    dataCard.forEach(item=>{
        console.log(item)
        console.log(item.authors[0].verified)
        
        
        const cardDisplay =document.createElement('div');
        cardDisplay.classList='card card-compact  bg-base-100 shadow-xl'
        cardDisplay.innerHTML=`
        <figure><img class='w-full h-60' src="${item.thumbnail}" alt="Shoes" /></figure>
        
        <div class="card-body ">
        <div class="flex gap-4">
        <div class="">
        <img class='rounded-full h-20 w-20' src="${item.authors[0].profile_picture}" alt="">
    </div>
    <div class="space-y-2 w-full ">
        <h2 class="card-title text-2xl">'${item.title}'</h2>
        <div class="flex">
            <p class='text-xl  '>'${item.authors[0].profile_name}'</p>
            <img class='' src=" fi_10629607.png" alt="">
        </div>
        <p class='text-xl'> <span>'${item?.others?.views}'</span> views</p>
    </div>
          </div>
            
        </div>
        `;
        display.appendChild(cardDisplay)
    })
}

// const display=(data)=>{
//     // console.log(data)
//     const cards =document.getElementById("display-card")
     
//     data.forEach(card=>{
//     console.log(card.category_id);
//     loadCards(card.category_id)
    

//     })

// }
// const loadCards =async(id)=>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
//     const data= await res.json();
//     console.log(data)
// }

loadData()