import React from 'react'
import axios from 'axios'

export default function Login() {

    const [inputVal, funcInput] = React.useState({
        username : "",
        password : ""
        })
        const [err, errFunc] = React.useState(false)
        const [succ, succFunc] = React.useState(false)

        let baseUrl = 'https://myserver-yoga-auth.herokuapp.com'

        function changeMe(event){
            const {name, value, checked, type} = event.target
            funcInput(prevValue =>{
                return {
                    ...prevValue,
                    [name] : type === "checkbox" ? checked : value
                }
            })
            errFunc('')
        }

    function logMeInPlease(e){
        e.preventDefault()
        const details ={
            username : e.target.username.value,
            password : e.target.password.value
          }

          axios.post('https://myserver-yoga-auth.herokuapp.com/login', {details})    
          .then(response => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.username)
            window.location.href = '/profile/' + e.target.username.value
          })
          .catch(error => errFunc(error.response.data))
    }
    const withoutQuotes = err ? err.replaceAll('"', ''): ''

  return (
    <div className='not-home'>
        <div className='flex justify-center w-screen h-[67vh] items-center flex-wrap'>
            <form  onSubmit={logMeInPlease} className='w-[60%] h-[75%] bg-slate-600 bg-opacity-25 text-center px-5 py-5 text-pink-50 xl:w-[40%] xl:h-[80%]'>
                <h1 className='uppercase text-[20px] font-black xl:text-[25px]'>Login</h1>
                <p className=' leading-4 text-[12px] opacity-30 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo culpa odio fuga atque alias voluptatum nemo dolorem vero amet fugiat</p>
            <div className='flex flex-col justify-center items-center'>

                <label className='mt-4 text-[14px]'>Username</label>
                <input type="text" onChange={changeMe} defaultValue={inputVal.username} name="username" className='w-[80%] mt-2 h-8 rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center'/>

                <label className='mt-3 text-[14px]'>Password</label>
                <input type="password" name='password' className='w-[80%] mt-2 h-8 rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center' defaultValue={inputVal.password} onChange={changeMe}/>
  
                <label className='opacity-50 text-xs cursor-pointer'>Forgot Password?</label>
                <button type="submit" className='my-7 w-[80%] py-2 bg-amber-800 rounded-sm hover:bg-amber-900 cursor-pointer'>Submit</button>
            </div>
            <p className='font-thin text-[13px]'>New Here? <a href='/signup'><span className='font-medium cursor-pointer' >Signup</span></a></p>
            </form>
            <div className='text-red-500 text-[15px] w-full text-center'>{withoutQuotes}</div>
        </div>
    </div>
  )
}
