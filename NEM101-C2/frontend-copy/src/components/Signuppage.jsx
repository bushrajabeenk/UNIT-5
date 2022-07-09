import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let payload = JSON.stringify(user);
    fetch("https://eval-proj.herokuapp.com/auth/signup", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Signuppage</h1>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <label>Password:</label>
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signuppage;





























































// const Signuppage = () => {
//   const [data, setData] = useState({});
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postData();
//   };

//   const postData = async () => {
//     alert("Account Created Successfully");
//     localStorage.setItem("Creds", JSON.stringify(data));
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1>Signuppage</h1>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input type="text" name="name" onChange={handleChange} />
//           <label>Username:</label>
//           <input type="text" name="username" onChange={handleChange} />
//           <label>Email:</label>
//           <input type="text" name="email" onChange={handleChange} />
//           <label>Password:</label>
//           <input type="text" name="password" onChange={handleChange} />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signuppage;
