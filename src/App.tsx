import { useState } from "react";
import "./App.css";

const _activities = [
  { title: "go", status: "pending" },
  { title: "come", status: "in-progress" },
  { title: "sit", status: "in-progress" },
  { title: "eat", status: "pending" },
  { title: "dance", status: "completed" },
  { title: "move", status: "completed" },
];

function App() {
  const [value, setValue] = useState("");
  const [activities, setActivities] = useState(_activities);

  const onSubmit = () => {
    setActivities((prev) => [{ title: value, status: "pending" }, ...prev]);
    setValue("");
  };

  return (
    <div className="main_wrapper">
      <div className="wrapper">
        <h1>Adams Activities</h1>
        <ul>
          {activities.map((activity) => (
            <li key={activity.title}>
              <label htmlFor={activity.title}>{activity.title}</label>
              <input
                type="checkbox"
                name="check"
                checked={activity.status === "completed"}
                id={activity.title}
              />
            </li>
          ))}
        </ul>
        <div className="inputs">
          <label htmlFor="user_input">Enter an activity</label>
          <input
            type="text"
            name="user_input"
            id="user_input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={onSubmit}>submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
