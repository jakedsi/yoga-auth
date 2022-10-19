import React from 'react'
import axios from 'axios'

export default function Signup() {

    const [inputVal, funcInput] = React.useState({
        fullname : "",
        username : "",
        password : "",
        repeat_password : ""
        })
        
        const [err, errFunc] = React.useState(false)
        const [succ, succFunc] = React.useState(false)

        let baseUrl = 'https://myserver-yoga-auth.herokuapp.com/'

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
    function signMeUp(e){
        e.preventDefault()
        if(e.target.password.value !== e.target.repeat_password.value) return errFunc("Password doesn't match")
        const details ={
            fullname : e.target.fullname.value,
            username : e.target.username.value,
            password : e.target.password.value,
        }
        axios.post(baseUrl + '/add', {details})
        .then(response => {
            console.log(response.data)
            succFunc('Successfully Registered')
        })
        .catch(error => errFunc(error.response.data))
    }
  return (
    <div className='not-home'>
        <div className='flex justify-center w-screen h-screen items-center xl:h-[80vh]'>
            <form  onSubmit={signMeUp} className='w-[60%] h-[70%] bg-slate-600 bg-opacity-25 text-center px-5 py-5 text-pink-50 xl:w-[40%] xl:h-[85%] lg:w-[40%] 2xl:w-[35%] mb-auto mt-[10vh]'>
                <h1 className='uppercase text-[20px] font-black xl:text-[25px]'>Signup</h1>
                <p className=' leading-4 text-[12px] opacity-30 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo culpa odio fuga atque alias voluptatum nemo dolorem vero amet fugiat</p>
            <div className='flex flex-col justify-center items-center'>

                <label className='mt-4 text-[14px]'>Fullname</label>
                <input type="text" onChange={changeMe} defaultValue={inputVal.fullname} name="fullname" className='w-[80%] mt-2 h-8 rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center'/>

                <label className='mt-4 text-[14px]'>Username</label>
                <input type="text" onChange={changeMe} defaultValue={inputVal.username} name="username" className='w-[80%] mt-2 h-8 rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center'/>

                <label className='mt-3 text-[14px]'>Password</label>
                <input type="password" onChange={changeMe} defaultValue={inputVal.password} name="password" className='w-[80%] mt-2 h-8 rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center'/>

                <label className='mt-3 text-[14px]'>Repeat Password</label>
                <input type="password" onChange={changeMe} defaultValue={inputVal.repeat_password} name="repeat_password" className='w-[80%] mt-2 h-8 rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center'/>

                <button type="submit" className='my-7 w-[80%] py-2 bg-amber-800 hover:bg-amber-900 rounded-sm'>Submit</button>
            </div>
            <div className='text-red-500 text-[15px] mt-3'>{err}</div>
            <div className={succ ? 'text-green-500 text-[15px] mt-3 transition ease-in-out delay-150' : 'hidden'}>{succ}
            </div>
            </form>
        </div>
    </div>
  )
}
