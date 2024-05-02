import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Redux/slice/NoteSlice";
import { NoteInterface } from "../TypeScript/Interface";

const Input = () => {
  const [formData, setFormData] = useState<NoteInterface>({
    content: "",
    title: "",
  });

  const dispath = useDispatch();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleManual = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(addNote(formData));
  };

  return (
    <div className=" m-auto mt-7 w-[70%] sm:w-[60%] md:w-[50%] shadow-[-1px_4px_16px_0px_#718096] rounded-lg bg-white">
      <form onSubmit={handleManual} className="flex flex-col">
        <div className="flex gap-3 flex-col my-4 mx-5">
          <input
            type="text"
            required
            onChange={handleChange}
            id="title"
            placeholder="title"
            className="outline-none text-xs focus:border-b p-3"
          />
          <textarea
            placeholder="Take a note..."
            required
            id="content"
            onChange={handleChange}
            className="outline-none h-14 text-xs focus:border-b p-3"
          />
        </div>
        <button
          className="bg-yellow-400 text-white font-semibold mb-2 rounded-md p-3 w-[30%] m-auto duration-300 hover:scale-105"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
