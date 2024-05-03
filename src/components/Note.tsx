import { FC } from "react";
import { NoteInterface } from "../TypeScript/Interface";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNote } from "../Redux/slice/NoteSlice";
import { useNavigate } from "react-router-dom";

const Note: FC<NoteInterface> = (props) => {
  
  const edit = {
    id: props.id,
    title: props.title,
    content: props.content,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDelete(id: string) {
    dispatch(deleteNote(id));
    console.log("delete triggred");
  }

  function handleEdit() {
    navigate("/edit", { state: edit });
  }

  return (
    <>
      <div
        className={`w-[350px] sm:w-[270px] md:w-[300px] lg:w-[370px] h-auto flex flex-col border rounded-lg`}
      >
        <div className="p-4 flex flex-col gap-1 h-auto border-b mx-2">
          <h1 className="font-semibold text-sm">{props.title}</h1>
          <p className="line-clamp-4 text-xs">{props.content}</p>
        </div>
        <div className="flex flex-row gap-5 m-auto p-4">
          <FaRegEdit
            onClick={() => handleEdit()}
            className="duration-300 cursor-pointer hover:text-green-500"
          />

          <MdDeleteForever
            onClick={() => handleDelete(props.id)}
            className="duration-300 cursor-pointer text-lg hover:text-red-500 "
          />
        </div>
      </div>
    </>
  );
};

export default Note;
