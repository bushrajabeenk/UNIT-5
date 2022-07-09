import "./App.css";
import { useState } from "react";
// import axios from "axios";
import { useFetch } from "./hooks/useFetch";

const URL = "https://api.github.com/search/users";

export type User = {
  id: number;
  login: string;
  avatar_url: string;
};

function App() {
  const [text, setText] = useState("");

  const { data, loading, error } = useFetch(URL, {
    per_page: 5,
    q: text || "Masai-codes",
  });

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Something went wrong</div>
        ) : (
          data.map((el) => {
            return (
              <div key={el.id}>
                {el.login}{" "}
                <div>
                  <img width={200} height={200} alt="" src={el.avatar_url} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;

//------------------------------------------------------------------------------------------------------

// without custom hooks

// import "./App.css";
// import { useState } from "react";
// import axios from "axios";

// const URL = "https://api.github.com/search/users";

// export type User = {
//   id: number;
//   login: string;
//   avatar_url: string;
// };

// function App() {
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [data, setData] = useState<User[]>([]);

//   return loading ? (
//     <div>Loading.....</div>
//   ) : error ? (
//     <div>Something went wrong</div>
//   ) : (
//     <div className="App">
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setLoading(true);
//           axios
//             .get(URL, {
//               params: {
//                 per_pag: 5,
//                 q: text,
//               },
//             })
//             .then(({ data }) => {
//               setLoading(false);
//               setData(data.items);
//             });
//         }}
//       >
//         Search
//       </button>
//       <div>
//         {data.map((el) => (
//           <div key={el.id}>
//             {el.login}{" "}
//             <div>
//               <img width={200} height={200} alt="" src={el.avatar_url} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------------------------------------------

// useTimeout custom hook

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
