import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
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
    fetch("https://eval-proj.herokuapp.com/auth/login", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res._id);
        if (res.token) {
          localStorage.setItem("userid", JSON.stringify(res._id));
          navigate("/notes");
        } else {
          console.log(res.message);
          navigate("/signup");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login page</h1>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Password:</label>
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Loginpage;





















































// const Loginpage = () => {
//   const [cred, setCred] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     var credData = JSON.parse(localStorage.getItem("Creds")) || [];
//     console.log("credData:", credData);

//     if (
//       credData.username === cred.username &&
//       credData.password === cred.password
//     ) {
//       alert("Login Successful");
//       navigate("/notes");
//     } else if (credData.length === 0) {
//       alert("Please Create Account first.");
//     } else {
//       alert("Wrong cred");
//     }
//   };

//   const handleChange = (e) => {
//     setCred({ ...cred, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <h1>Login page</h1>
//       <div>
//         <form onClick={handleSubmit}>
//           <label>Username:</label>
//           <input type="text" name="username" onChange={handleChange} />
//           <label>Password:</label>
//           <input type="password" name="password" onChange={handleChange} />
//           <input type="submit" value="Login" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Loginpage;
