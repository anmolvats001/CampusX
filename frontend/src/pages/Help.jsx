const Help =()=>{
    return(
           <div className='w-full min-h-fit px-20 pt-28 flex justify-center bg-[#F9FAFB]'>
      <div className='border border-[#3B82F6] shadow-lg px-8 py-10 w-[70%] rounded-2xl bg-white h-fit'>
        <h1 className='text-center text-[#1E293B] text-4xl font-extrabold tracking-wide'>
           🙋‍♀️ HELP US TO IMPROVE
        </h1>

        <div className='text-[18px] flex flex-col gap-6 mt-8 p-3 text-[#475569]'>
            <div >
                <input type="radio" name="hello" id="hello" />
            <label htmlFor="hello">hello</label>
            </div>
        </div>
      </div>
    </div>
    )

}
export default Help;