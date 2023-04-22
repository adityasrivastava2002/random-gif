import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="w-full relative flex flex-col background items-center h-full">
      <h1 className="bg-white w-11/12 text-center rounded-sm mt-[40px] text-4xl font-bold py-2">RANDOM GIFS</h1>
      <div className="rounded-sm w-full flex flex-col items-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
