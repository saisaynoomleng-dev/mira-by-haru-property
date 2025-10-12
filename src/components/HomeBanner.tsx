const HomeBanner = () => {
  return (
    <div className="grid grid-cols-3 gap-y-3 gap-x-3 md:gap-x-5 lg:gap-x-8 text-center text-fs-300 text-brand-black/60">
      <div className="flex flex-col bg-brand-purple/5 p-4 rounded-md gap-y-2 items-center">
        <div>
          <img src="/botique_design.png" alt="" />
        </div>
        <p className="font-medium">Botique Design</p>
      </div>

      <div className="flex flex-col bg-brand-purple/5 p-4 rounded-md gap-y-2 items-center">
        <div>
          <img src="/tranquil_spaces.png" alt="" />
        </div>
        <p className="font-medium">Tranquil Spaces</p>
      </div>

      <div className="flex flex-col bg-brand-purple/5 p-4 rounded-md gap-y-2 items-center">
        <div>
          <img src="/prime_location.png" alt="" />
        </div>
        <p className="font-medium">Prime Location</p>
      </div>
    </div>
  );
};

export default HomeBanner;
