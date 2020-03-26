export const registerService = async(user)=>{
    return fetch('http://localhost:3000/api/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(res => {
        return res;
    }).catch(err => err);
  }