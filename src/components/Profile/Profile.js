import React from 'react'
import axios from 'axios'

export const parseJwt = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};


export const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else{
      delete axios.defaults.headers.common["Authorization"];
      window.location.href = '/login'
  }
}

export default function Profile() {

  const [profileData, funcProfileData] = React.useState()
  const [inputVal, funcInput] = React.useState({
    fullname : "",
    username : ""
    })

  const tokenNum = localStorage.getItem("token")
  setAuthToken(tokenNum)
  const g = parseJwt(tokenNum)
  const user = localStorage.getItem("username")

  React.useEffect(()=>{
    axios.get('https://myserver-yoga-auth.herokuapp.com/profile/' + user + '/id/' + g._id)
    .then(response =>{
      funcProfileData(response.data)
    }).catch(err => {
      console.error(err)
    })
  }, [g._id, user])

  function bye(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    setAuthToken(localStorage.getItem("token"));
  }

  function deleteAccount(id){
    axios.delete('https://myserver-yoga-auth.herokuapp.com/delete/' + id)
    .then(response => {
      console.log('Successfully Deleted!')
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      setAuthToken(localStorage.getItem("token"));
      window.location.reload()
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const [formVisible, formVisibleFunc] = React.useState(false)
  function editMe(){
      formVisibleFunc(bool => !bool)
  }

  function changeMe(event){
    const {name, value, checked, type} = event.target
    funcInput(prevValue =>{
        return {
            ...prevValue,
            [name] : type === "checkbox" ? checked : value
        }
    })
  }

  function updateProfile(e){
    e.preventDefault(e)
    const newData = {
      username : e.target.username.value,
      fullname : e.target.fullname.value
    }

    axios.put('https://myserver-yoga-auth.herokuapp.com/update/' + e.target.id.value, {newData} )
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.error(err)
    })
  }

  return (
    <div className='not-home text-pink-50'>
        <div className='flex flex-col h-[70vh] justify-center items-center'>
        {
          profileData ? 
        <>
            <h1 className='text-[34px] font-bold sm:text-center lg:text-left'>Welcome, &nbsp;{profileData.fullname}</h1>
            <h1 className='cursor-pointer px-2 py-1 text-[15px] text-gray-300 underline mb-2' onClick={editMe}>{formVisible ? 'Exit' : 'Edit' }</h1>
            {formVisible ? 
            <>
            <form onSubmit={updateProfile} className='flex flex-col items-center'>
            <input type="text" onChange={changeMe} name="id" placeholder="id" value={g._id} hidden/><br/>
            Username : <input type="text" onChange={changeMe} name="username" placeholder="username" className='text-black text-center' defaultValue={profileData.username}/><br/>
            Fullname : <input type="text" onChange={changeMe} name="fullname" placeholder="fullname" className='text-black text-center placeholder:text-center' defaultValue={profileData.fullname}/>
            <br/>
            <button type='submit' className=' px-3 py-1  bg-amber-800 hover:bg-amber-900 rounded'>Update</button><br/>
            </form>
            </> 
            : 
            <>            
            <h1 className='cursor-pointer px-2 py-1  bg-amber-800 hover:bg-amber-900 rounded' onClick={bye}>Logout</h1>
            </>}
            <h1 className='cursor-pointer px-2 py-1 mt-10 text-[13px] font-thin text-gray-400' onClick={()=>deleteAccount(g._id)}>Delete My Account</h1>
        </>
        :
        <>
        <h1 className='text-[25px] font-thin sm:text-center lg:text-left'>Please wait..</h1>
        </>
        }

        </div>
    </div>
  )
}
