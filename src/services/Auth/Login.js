export const loginService = async (user)=>{
    console.log('login user', user);
    
    var response= await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    var data = await response.json()
    console.log(data);
    
    return data
  }

  