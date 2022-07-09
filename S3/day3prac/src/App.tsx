import "./App.css";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

const url = "https://api.github.com/search/users";

export type User = {
  id: number;
  login: string;
  avatar_url: string;
};

function App() {
  const [text, setText] = useState("");

  const { loading, data, err } = useFetch(url, {
    per_page: 5,
    q: text || "Masai-codes",
  });

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : err ? (
          <div>Something went wrong...</div>
        ) : (
          data.map((d) => (
            <div key={d.id}>
              {d.login}{" "}
              <div>
                <img width={200} height={200} alt="" src={d.avatar_url} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
