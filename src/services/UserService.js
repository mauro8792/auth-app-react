export const getTodosUsers = async (token) => {
    
    let results = await fetch('http://localhost:3000/api/users/'
    ,
    {
        headers:{
          'Content-Type':'application/json',
          'authorization' : `Bearer ${token}`

        }
    }
    )
    let data = await results.json()
    return data
}