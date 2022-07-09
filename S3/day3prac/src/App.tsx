import "./App.css";
import { useState } from "react";
import axios from "axios";

const url = "https://api.github.com/search/users";

export type User = {
  id: number;
  login: string;
  avatar_url: string;
};

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState<User[]>([]);

  const handleClick = () => {
    return axios
      .get(url, {
        params: {
          per_page: 5,
          q: text,
        },
      })
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        {data.map((d) => (
          <div key={d.id}>
            {d.login}{" "}
            <div>
              <img width={200} height={200} alt="" src={d.avatar_url} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
