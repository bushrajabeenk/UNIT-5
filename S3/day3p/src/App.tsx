import "./App.css";
import { useState } from "react";
import axios from "axios";

const URL = "https://api.github.com/search/users";

type User = {
  id: number;
  login: string;
  avatar_url: string;
};

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState<User[]>([]);

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          axios
            .get(URL, {
              params: {
                per_pag: 5,
                q: text,
              },
            })
            .then(({ data }) => {
              setData(data.items);
            });
        }}
      >
        Search
      </button>
      <div>
        {data.map((el) => (
          <div key={el.id}>
            {el.login}{" "}
            <div>
              <img width={200} height={200} alt="" src={el.avatar_url} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// import "./App.css";
// import {useTimeout} from "./hooks/useTimeout";

// function App() {
//   const toShow = useTimeout(5);

//   if (!toShow) {
//     return <div>Waiting for timer</div>;
//   }

//   return (
//     <div className="App">
//       <h1 style={{ color: "red" }}>Hello</h1>
//     </div>
//   );
// }

// export default App;
