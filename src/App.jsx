import { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setFullName({
      ...fullName,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.firstName !== undefined && fullName.lastName !== undefined) {
      setIsSubmit(true);
    }
  };

  const divStyle = {
    paddingTop: "10px",
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <div style={divStyle}>
        {isSubmit
          ? `Full Name: ${fullName.firstName} ${fullName.lastName}`
          : ""}
      </div>
    </form>
  );
}