import ApiURL from './api'
export const PostUserData =(userData,callback) =>{
   
  fetch(ApiURL + "/userlogin",{
      method:"POST",
      headers:{
          "Content-Type": "application/json"
      },
      cache:"no-cache",
      body:JSON.stringify({userData:userData})
      
  })
  .then(response =>{
      console.log(response.data)
      if(response.data === 200)
      {
          return response.json()
      }
     else { 
      window.alert("check your input!")
      window.location="/Home" ;
  }
  })
  .then(data =>{
      callback(null, data)
  })
  .catch(error => console.error(error))
}
export default PostUserData