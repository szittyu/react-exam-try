import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

const Subscription = (props) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const subscribe = () => {
    setLoading(true)
    fetch("https://seriescharacters.com/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: value })
    })
      .then((r) => r.json())
      .then(() => {
        setLoading(false);
        setSuccess(true);
        props.onSubscribed();
      });
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>Subscribe to our newsletter</h1>
      {success && <h2>Subscribed.</h2>}
      {loading ? <LoadingMask />
        :
        <>
          <input type="email" value={value} onChange={handleChange} />
          <button onClick={subscribe}>Subscribe</button>
        </>
      }
    </div>
  );
};
export default Subscription;