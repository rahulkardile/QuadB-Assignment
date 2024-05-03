import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateNote } from "../Redux/slice/NoteSlice";
import { NoteInterface } from "../TypeScript/Interface";

const Edit = () => {
  const location = useLocation();
  const Note: NoteInterface = location.state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState<NoteInterface>({
    id: Note.id,
    content: Note.content,
    title: Note.title,
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
    dispath(updateNote(formData));
    setFormData({
      id: "",
      content: "",
      title: "",
    });
    navigate("/");
  };

  return (
    <div className=" m-auto mt-7 w-[70%] sm:w-[60%] md:w-[50%] shadow-[-1px_4px_16px_0px_#718096] rounded-lg bg-white">
      <form onSubmit={handleManual} className="flex flex-col">
        <div className="flex gap-3 flex-col my-4 mx-5">
          <input
            type="text"
            value={formData.title}
            required
            onChange={handleChange}
            id="title"
            placeholder="Title is here..."
            className="outline-none text-xs focus:border-b p-3"
          />
          <textarea
            placeholder="Take a note..."
            value={formData.content}
            id="content"
            onChange={handleChange}
            className="outline-none h-36 text-xs focus:border-b p-3"
          />
        </div>
        <button
          className="bg-yellow-400 text-white font-semibold mb-2 rounded-md p-3 w-[30%] m-auto duration-300 hover:scale-105"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
