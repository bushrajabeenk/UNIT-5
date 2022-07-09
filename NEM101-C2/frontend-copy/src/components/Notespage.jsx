import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notespage = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("userid"));
  const [data, setData] = useState([]);
  const [note, setNote] = useState({});

  useEffect(() => {
    if (!userid) {
      navigate("/login");
    }
    getNote();
  }, [userid, data]);

  // get
  const getNote = () => {
    fetch(`https://eval-proj.herokuapp.com/user/${userid}/notes`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let payload = JSON.stringify(note);

    // post
    fetch(`https://eval-proj.herokuapp.com/user/${userid}/notes`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getNote();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Notespage</h1>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="note"
          placeholder="Enter note"
          onChange={handleChange}
        />
        <input
          type="text"
          name="label"
          placeholder="Enter label"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          ADD NOTES
        </button>
        <hr />
        <div>
          {data &&
            data.length > 0 &&
            data.map((onenote) => {
              return (
                <ul key={onenote._id}>
                  <li>
                    <b>Title:</b> {onenote.title}
                  </li>
                  <li>
                    {" "}
                    <b>Note:</b> {onenote.note}
                  </li>
                  <li>
                    <b>Label:</b> {onenote.label}
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Notespage;
