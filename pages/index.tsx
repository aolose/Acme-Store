import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 700,
          height: 400,
          position: "relative",
          overflow: "hidden",
          borderRadius: "2em",
          boxShadow: "0 0 20px rgb(0 0 0 / 20%)",
        }}
      >
        <Image src="/gl.jpeg" alt="Good Luck!" layout="fill" />
      </div>
    </div>
  );
};

export default Home;
