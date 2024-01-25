import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to={"/users"}>Open Users List Page</Link>
    </div>
  );
};
export default Home;
