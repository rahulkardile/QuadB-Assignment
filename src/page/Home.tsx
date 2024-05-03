import { useSelector } from "react-redux";
import Input from "../components/Input";
import Note from "../components/Note";
import { UserStates } from "../Redux/Store";
import { FaArrowCircleUp } from "react-icons/fa"

const Home = () => {
  const { todos } = useSelector((state: UserStates) => state.Todos);

  return (
    <section className="w-screen m-auto flex flex-col">
      <Input />

      <div className="p-4 mt-5">
        <h1 className="font-semibold text-lg mx-3">To-Do</h1>

        <section className="flex flex-row my-4 gap-5 flex-wrap overflow-hidden items-center justify-center">
          { todos.length > 0 ? todos.map((item, i) => (
            <Note
              key={i}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          )) : (
            <div className="p-3 mt-7 flex flex-col items-center gap-1">
              <FaArrowCircleUp className="text-yellow-300 animate-bounce w-7 h-7" />
              <h2 className="font-semibold">Please add todo...</h2>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Home;
