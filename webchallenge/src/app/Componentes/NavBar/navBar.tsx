import ThemeSelector from "../ThemeSelector/ThemeSelector";

export default function NavBar() {
  return (
    <>
      <div className="bg-verdeSE dark:bg-azulSE h-26 z-50 sticky top-0  border-b-4 border-rosaC dark:border-amareloC flex flex-row justify-center items-center h-20 ">
        <div className="text-center">
          <h1 className="text-2xl text-verdeNeon dark:text-azulNeon">
            buildbox
          </h1>
          <p className="text-xs">Web Challenge</p>
        </div>
      </div>
    </>
  );
}
