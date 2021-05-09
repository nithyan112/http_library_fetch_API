const http = new EasyHttp();
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// http.post('https://jsonplaceholder.typicode.com/users',{name:'nithyan'})
// .then(data=>console.log(data))

http.put('https://jsonplaceholder.typicode.com/users/1',{name:'Nithyan G R'})
.then(data=>console.log(data))
.catch(err=>console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data=>console.log(data))
.catch(err=>console.log(err));