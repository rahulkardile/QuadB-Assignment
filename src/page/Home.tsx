import Input from "../components/Input";
import Note from "../components/Note";

const Home = () => {
  return (
    <section className="w-screen m-auto flex flex-col">
      <Input />

      <div className="p-4 mt-5">
        <h1 className="font-semibold text-lg mx-3">To-Do</h1>

        <section className="flex flex-row my-4 gap-5 flex-wrap overflow-hidden items-center justify-center">
          
          <Note
            id="1"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ratione
          neque vero itaque quia explicabo labore quibusdam nulla voluptatem,
          soluta modi, cumque asperiores fugiat, minima dolorum! Rerum incidunt
          accusamus sequi."
            title="Today's Work"
          />

          <Note
            id="1"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ratione
          neque vero itaque quia explicabo labore quibusdam nulla voluptatem,
          soluta modi, cumque asperiores fugiat, minima dolorum! Rerum incidunt
          accusamus sequi."
            title="Today's Work"
          />

          <Note
            id="1"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ratione
          neque vero itaque quia explicabo labore quibusdam nulla voluptatem,
          soluta modi, cumque asperiores fugiat, minima dolorum! Rerum incidunt
          accusamus sequi."
            title="Today's Work"
          />

          <Note
            id="1"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ratione
          neque vero itaque quia explicabo labore quibusdam nulla voluptatem,
          soluta modi, cumque asperiores fugiat, minima dolorum! Rerum incidunt
          accusamus sequi."
            title="Today's Work"
          />
        </section>
      </div>
    </section>
  );
};

export default Home;
