const HomeBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-5 lg:gap-x-8">
      <div className="flex flex-col bg-brand-purple/20 p-2 rounded-md gap-y-2">
        <div>
          <img src="/botique_design.png" alt="" />
        </div>
        <p className="font-medium">Botique Design</p>
        <p className="text-brand-black/40">
          Only 24 thoughtfully finished units
        </p>
      </div>

      <div className="flex flex-col bg-brand-purple/20 p-2 rounded-md gap-y-2">
        <div>
          <img src="/tranquil_spaces.png" alt="" />
        </div>
        <p className="font-medium">Botique Design</p>
        <p className="text-brand-black/40">
          Light-filled interiors and rooftop views
        </p>
      </div>

      <div className="flex flex-col bg-brand-purple/20 p-2 rounded-md gap-y-2">
        <div>
          <img src="/prime_location.png" alt="" />
        </div>
        <p className="font-medium">Botique Design</p>
        <p className="text-brand-black/40">
          5-min walk to transit, cafes, and green spaces
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
