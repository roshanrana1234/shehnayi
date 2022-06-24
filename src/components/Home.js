import React from 'react'

const Home = () => {
    return (
        <>
            <div className="w-full h-96 relative " >
                <div className=" bg-[url('https://wallpaperaccess.com/full/1315673.jpg')] w-full h-full bg-no-repeat bg-center bg-cover" >
                    <div className="absolute top-1/3 left-1/4  "  >
                        <div className=" flex flex-col justify-center items-center gap-4   text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold "  >
                            <h2>
                                Exclusively for
                            </h2>
                            <h2>
                                Sindhi community
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Self Information */}

            <div className="p-1 boder-1 bg-[#AD0909] w-10/12  m-auto my-10 rounded-lg " >
                <form action="">
                    <div className="grid grid-cols-2 gap-2 sm:gap-x-5 md:grid-cols-4  md:gap-1  " >

                        <div className="p-2 " >
                            <div className="flex flex-col" >
                                <label className="p-2 text-white" htmlFor="">I'm looking for a </label>
                                <select className="p-2 rounded-lg " name="" id="">
                                    <option value="women">women</option>
                                    <option value="men">men</option>
                                </select>
                            </div>
                        </div>

                        {/* ================================================== */}
                        <div className="p-2 border-black-500"  >
                            <div className="flex justify-center items-center" >
                                <div className="flex flex-col" >
                                    <label className="p-2 text-white " htmlFor="">aged</label>
                                    <select className=" p-2 w-14 rounded-md " name="" id="">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                                <span className="p-2 text-white " >To</span>
                                <div>
                                    <div className="flex flex-col" >
                                        <label className="p-2 text-white" htmlFor="">aged</label>
                                        <select className=" p-2 w-14 rounded-md" name="" id="">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ============================================ */}
                        <div className="p-2 col-span-2   md:col-span-1 " >
                            <div className="grid grid-cols-2 gap-2 space-x-4 justify-between md:mt-5" >
                                <div className="flex flex-col justify-end  " >
                                    <label className="text-white" htmlFor=""> Religion</label>
                                    <select className="p-1 rounded-md" name="" id="">
                                        <option value="">Hindu</option>
                                        <option value="">Hindu</option>
                                        <option value="">Hindu</option>
                                    </select>
                                </div>
                                <div className="flex flex-col" >
                                    <label className="text-white" htmlFor="">Language</label>
                                    <select className="p-1 rounded-md" name="" id="">
                                        <option value="">Hindu</option>
                                        <option value="">Hindu</option>
                                        <option value="">Hindu</option>
                                    </select>
                                </div>


                            </div>
                        </div>

                        <div className="p-2 col-span-2   md:col-span-1  md:grid " >
                            <div className=" grid md:flex md:justify-center md:h-9 md:mt-10  " >
                                <button className="bg-green-500 p-2 rounded-md" >Let's Begin</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Home