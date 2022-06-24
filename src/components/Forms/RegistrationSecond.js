import React, { useState } from 'react'
import img from '../../Images/pic.jpg'
const RegistrationSecond = () => {



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

                    <div className='grid grid-col-1 justify-center items-center gap-3  ' >

                        <div className='flex justify-center w-full sm:w-96 md:w-[550px] xl:w-[800px]' >
                            Registration
                        </div>
                        <div className='flex justify-center' >
                            line
                        </div>
                        {/* Form */}
                        <form action="">
                            <div className='grid  gap-4' >

                                <div className='grid grid-cols-2  ' >
                                    <label
                                        htmlFor="">Education</label>
                                    <select
                                        className='rounded-xl'
                                        name=""
                                        id=""
                                    >
                                        <option value=""> </option>
                                        <option value=""></option>

                                    </select>
                                </div>

                                <div className='grid grid-cols-2' >
                                    <label
                                        htmlFor="">Occupation</label>
                                    <select
                                        className='rounded-xl'
                                        name=""
                                        id=""
                                    >
                                        <option value=""> </option>
                                        <option value=""></option>

                                    </select>
                                </div>


                                <div className='grid grid-cols-2 ' >
                                    <label
                                        htmlFor="">Employ In</label>
                                    <select
                                        className='rounded-xl'
                                        name=""
                                        id=""
                                    >
                                        <option value=""> </option>
                                        <option value=""></option>

                                    </select>
                                </div>



                                <div className='grid grid-cols-2 ' >
                                    <label
                                        htmlFor="">Designation</label>
                                    <select
                                        className='rounded-xl'
                                        name=""
                                        id=""
                                    >
                                        <option value=""> </option>
                                        <option value=""></option>

                                    </select>
                                </div>


                                <div className='grid grid-cols-2 ' >
                                    <label
                                        htmlFor="">Annual Income</label>
                                    <select
                                        className='rounded-xl
                                     '
                                        name=""
                                        id=""
                                    >
                                        <option value=""> </option>
                                        <option value=""></option>

                                    </select>
                                </div>

                                <div className='flex  justify-between  ' >
                                    <div  >Privew</div>
                                    <div className=
                                        'bg-red-700 p-2  px-16 rounded-xl ' >Next</div>
                                </div>

                            </div>

                        </form>


                    </div  >



                </div>



            </div >

        </>
    )
}

export default RegistrationSecond