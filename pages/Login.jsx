import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../src/api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();
  const messageRedirect = location.state?.message;
  const navigate = useNavigate();

  const locationBeforeRedirect = location.state?.from.pathname || "/host";

  function handleSubmit(e) {
    e.preventDefault();

    async function handleLogin() {
      setError(null);
      setStatus("submitting");
      try {
        const data = await loginUser(loginFormData);
        localStorage.setItem("loggedin", true);
        navigate(locationBeforeRedirect, { replace: true });
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
      } catch (err) {
        setError(err);
      } finally {
        setStatus("idle");
      }
    }

    handleLogin();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {messageRedirect && <h3 className="login-error">{messageRedirect}</h3>}
      <h1>Sign in to your account</h1>
      {error && <h3 className="login-error">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
