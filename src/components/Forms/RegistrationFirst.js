import img from '../../Images/pic.jpg'
import React, { useState } from 'react'

const RegistrationFirst = () => {

    const [user, setuser] = useState({
        name: "",
        email: "",
        password: "",
        cpassorrd: "",
        religion: "",
        toung: "",
        pin: "",
        number: ""


    })
    let name, value

    const eventhandle = (e) => {


        name = e.target.name
        value = e.target.value

        setuser({ ...value, [name]: value })
    }

    const postData = async (e) => {

        e.preventDefault();

        const { name, email, password, cpassorrd, religion, toung, pin, number } = user

        const resp = await fetch("/singup", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name, email, password, cpassorrd, religion, toung, pin, number

            })

        }
        )
        const data = await resp.json();

        if (data) {

            window.alert("resitration sucseeful")
        }

    }

    return (
        <>

            <div
                style={{ backgroundImage: `url(${img})` }}
                className="h-screen bg-no-repeat w-full m-auto bg-cover flex justify-center items-center  "
            >
                <div
                    className='w-9/12 bg-white bg-opacity-10 rounded-3xl shadow-5xl border  border-r-0 border-b-0 border-opacity-30 backdope-filter backdrop-blur-sm text-white p-3'
                >

                    <div className='flex
                    flex-col justify-center items-center m-auto w-11/12  p-1' >

                        <div className='flex justify-center items-center   uppercase' >
                            <h3 className='font-bold text-2xl  ' >Register for free</h3>
                        </div>
                        <div className='flex
                    justify-center items-center' >
                            line
                        </div>

                    </div  >
                    {/* Form */}
                    <div className='w-11/12 m-auto' >
                        <form method="POST">
                            {/* Email */}
                            <div className='grid gap-2 ' >

                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Email :</label>
                                    <input
                                        value={user.email}
                                        onChange={eventhandle}
                                        className='rounded-3xl text-black '
                                        type="email" placeholder='Enter Email' />
                                </div>
                                {/* Password */}
                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Password :</label>
                                    <input
                                        value={user.password}
                                        onChange={eventhandle}
                                        className='rounded-3xl text-black '
                                        type="password" placeholder='Password' />
                                </div>
                                {/* Name */}
                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Name :</label>
                                    <input

                                        onChange={eventhandle}
                                        value={user.name}
                                        className='rounded-3xl text-black '
                                        type="text" placeholder='Enter Name' />
                                </div>
                                {/* Date of birth */}
                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Date of birth :</label>
                                    <input
                                        value={user.date}
                                        onOnchange={eventhandle}
                                        className='rounded-3xl text-black '
                                        type="date" placeholder='Enter Your Date Birth' />
                                </div>
                                {/* Gender */}
                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Gender :</label>
                                    <select
                                        value={user.gender}
                                        onChange={eventhandle}
                                        className='text-black
                                        rounded-3xl'
                                        name="gender" id="">
                                        <option value="male">Male</option>
                                        <option value="female">FeMale</option>
                                    </select>
                                </div>
                                {/* Marital startu */}

                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Marital Status :</label>
                                    <select
                                        value={user.marital}
                                        onChange={eventhandle}
                                        className='
                                        text-black
                                           rounded-3xl'
                                        name="material" id="">
                                        <option value="married">Married </option>
                                        <option value="UnMarried">UnMarried</option>
                                    </select>
                                </div>

                                {/*  Religion */}

                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Religion Status :</label>
                                    <select
                                        value={user.religion}
                                        onChange={eventhandle}
                                        className='
                                         text-black
                                           rounded-3xl'
                                        name="religion" id="">
                                        <option value="sindhi">Sindhi </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                {/* Mother Toung */}

                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Mother Toung :</label>
                                    <select
                                        value={user.toung}
                                        onChange={eventhandle}
                                        className='
                                    text-black
                                    rounded-3xl'
                                        name="toung" id="">
                                        <option value="hindi">Hindi </option>
                                        <option value="english">English</option>
                                    </select>
                                </div>

                                {/* pincode */}
                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Pincode :</label>
                                    <input
                                        value={user.pin}
                                        onChange={eventhandle}
                                        className='rounded-3xl text-black '
                                        type="number" placeholder='Pincode' />
                                </div>

                                {/* Mobile Number */}

                                <div className='grid   grid-cols-2 justify-end  items-center ' >

                                    <label htmlFor="">Mobile Number :</label>
                                    <input
                                        value={user.number}
                                        onChange={eventhandle}
                                        className='rounded-3xl text-black '
                                        type="number" placeholder='Mobile Number' />
                                </div>

                            </div>

                        </form>

                        {/* Button  */}

                        <div className='flex justify-between p-2' >

                            <span  >Previous</span>
                            <button
                                onClick={postData}
                                type='submit'
                                className=' bg-red-800 px-12   rounded-3xl ' >
                                Next
                            </button>
                        </div>
                    </div>


                </div>



            </div >

        </>
    )
}

export default RegistrationFirst