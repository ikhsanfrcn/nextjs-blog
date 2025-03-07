export const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col h-[50vh] md:h-[80vh] justify-center">
      <div className="flex justify-center">
        <div className="border border-black">
          <div className="flex p-2 md:p-5 text-3xl md:text-6xl">
            <div className="flex items-center px-2 bg-black text-white">
              <p>Lorem</p>
            </div>
            <div className="flex items-center px-2 font-bold">
              <p>Ipsum</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-center">A publishing company that focuses on the essentials.</p>
      </div>
    </div>
  );
};
