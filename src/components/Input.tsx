const Input = () => {


  return (
    <div className=" m-auto mt-7 w-[70%] sm:w-[60%] md:w-[50%] shadow-[-1px_4px_16px_0px_#718096] rounded-lg bg-white">
        <form className="flex flex-col">
          <div className="flex gap-3 flex-col my-4 mx-5">
            <input
              type=""
              required
              placeholder="Title"
              className="outline-none text-xs focus:border-b p-3"
            />
            <textarea
              placeholder="Take a note..."
              required
              className="outline-none h-14 text-xs focus:border-b p-3"
            />
          </div>
          <button className="bg-yellow-400 text-white font-semibold mb-2 rounded-md p-3 w-[30%] m-auto duration-300 hover:scale-105 ">Submit</button>
        </form>
      </div>
  )
}

export default Input