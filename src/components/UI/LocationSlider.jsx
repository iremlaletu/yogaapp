import { location } from "../../utils/data";

const LocationSlider = () => {
  const chunkLocation = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groupedLocation = chunkLocation(location, 3);

  return (
    <div className="flex justify-center">
      <div className="space-y-3 w-full max-w-4xl">
        {groupedLocation.map((group, idx) => (
          <div
            data-aos={
              idx === 0 ? "fade-left" : idx === 1 ? "fade-right" : "fade-left"
            }
            className="flex justify-between gap-4"
            key={idx}
          >
            {group.map((city, idx) => {
              const { image, name } = city;
              return (
                <div key={idx} className="w-1/3 relative">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 text-white bg-neutral-500 bg-opacity-50 px-2 py-1 rounded-lg">
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSlider;
