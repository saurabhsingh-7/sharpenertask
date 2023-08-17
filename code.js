var uRL = "https://crudcrud.com/api/fcba314908b3413580b4bb82783dae22/itemsInfo";
        
        //to display existing items
        window.addEventListener("DOMContentLoaded",async ()=>{
            try{
                let res = await axios.get(uRL);
                //console.log(res.data);
                for(let i=0;i<res.data.length;i++){
                    showOnScreen(res.data[i]);
                }
            }catch(err){
                console.log(err);
            }
        })

        //show Data on screen
        function showOnScreen(obj){
            if(obj.cat=="food"){
                let list = document.getElementById("foodList");
                list.innerHTML= list.innerHTML + 
                    `<li id=${obj._id}> Name: ${obj.pname} ----- Price: ${obj.price} Rs  --- <button onclick="deleteFun('${obj._id}')">Delete</button></li>`;
            }else if(obj.cat=="skincare"){
                let list = document.getElementById("skincareList");
                list.innerHTML= list.innerHTML + 
                    `<li id=${obj._id}> Name: ${obj.pname} ----- Price: ${obj.price} Rs  --- <button onclick="deleteFun('${obj._id}')">Delete</button></li>`;
            }
            else{
                let list = document.getElementById("elecronicsList");
                list.innerHTML= list.innerHTML + 
                    `<li id=${obj._id}> Name: ${obj.pname} ----- Price: ${obj.price} Rs  --- <button onclick="deleteFun('${obj._id}')">Delete</button></li>`;
            }
        }

        //After submit button
        async function onsubmit1(event){
            event.preventDefault();
            try{
                let myobj = {
                    price: event.target.nprice.value,
                    pname: event.target.npname.value,
                    cat: event.target.ncat.value
                }

                let op = await axios.post(uRL,myobj);
                showOnScreen(op.data);

                event.target.nprice.value="";
                event.target.npname.value="";
                event.target.ncat.selectedIndex = 0;
            }catch(err){
                console.log(err);
            }
            
        }

        //Delete funcion
        async function deleteFun(objid){
            try{
                //console.log("inside ");
                let del = await axios.delete(`${uRL}/${objid}`);
                let todel = document.getElementById(objid);
                todel.remove();
            }catch(err){
                console.log(err);
            }
        }
