class EasyHttp{
    get(url){
        return new  Promise((resolve,reject)=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));

        })
    }

    post(url,data)
    {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
               .then(data=>resolve(data))
               .catch(err=>console.log(err))
        })
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
               .then(data=>resolve(data))
               .catch(err=>reject(err));

        })
    }
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'DELETE',
                header:{
                    'content-type':'application/json'
                },
                
            }).then(res=>res.json())
              .then(data=>resolve(data))
              .catch(err=>reject(err));
        })
    }
}