import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { Form, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [error, setError] = useState(false);
  const idRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const admin = localStorage.getItem("artikel-boost");
  const isAdmin = admin === "admin";

  useEffect(() => {
    if (isAdmin) {
      navigate("/dashboard");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredId = idRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const response = await fetch(
      `http://localhost:5000/api/login?id=${enteredId}&password=${enteredPassword}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    if (data.message == "Success") {
      localStorage.setItem("artikel-boost", `admin`);
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100">
      <div className="bg-neutral-50 p-8 rounded-lg shadow-lg w-96">
        <img
          src={logo}
          className="w-auto h-auto max-w-full object-contain mb-10"
        />
        {error && (
          <p className="flex justify-center text-rose-600 font-semibold bg-rose-100 rounded-lg p-2 my-2">
            Error
          </p>
        )}
        <Form onSubmit={submitHandler}>
          <div className="sm:col-span-4">
            <label
              htmlFor="id"
              className="block text-sm/6 font-medium text-neutral-900"
            >
              ID
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 mb-2 outline-1 -outline-offset-1 outline-neutral-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                <input
                  id="id"
                  name="id"
                  type="text"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none sm:text-sm/6"
                  ref={idRef}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-neutral-900"
            >
              Password
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-neutral-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none sm:text-sm/6"
                  ref={passwordRef}
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-full bg-rose-600 text-white text-2xl font-nanum font-semibold shadow-md hover:bg-rose-500 hover:text-shadow-lg hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 border-8 border-double border-bground flex justify-center items-center cursor-pointer"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
