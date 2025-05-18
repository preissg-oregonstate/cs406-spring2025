import { useParams } from "react-router-dom";

const GamePage = () => {
  const { gameName } = useParams();

  return (
    <div>
      <iframe
        src={`/games/${gameName}/index.html`}
        title={gameName}
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
      />
    </div>
  );
};

export default GamePage;
