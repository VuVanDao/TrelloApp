import { mockData } from "./data/mock-data";
import Board from "./Components/Boards/Board";

function App() {
  return (
    <>
      <Board board={mockData.board}></Board>
    </>
  );
}

export default App;
