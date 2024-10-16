


function button(){
    let content = document.getElementById("content")
    content.textContent="This is hello"
    setTimeout(function (){
    for(i=1;i<=5;i++){
            content.innerHTML +=`<div style="display: flex; flex-direction: column; align-items: center; 
                        border: 2px solid black; border-radius: 12px; padding: 20px; 
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); width: 300px;">
            <h2>Joggers</h2>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr57LQn0LqEJE2K97z-e6aoTKuLYRYQ2CKvA&s" width="250"style="border-radius: 8px;">
            
            <button style="margin-top: 10px; padding: 10px 20px; background-color: #28a745; 
                               color: white; border: none; border-radius: 5px; cursor: pointer;">BuyNow</button>
                               </div>`
        
            }
    },2000)

}






