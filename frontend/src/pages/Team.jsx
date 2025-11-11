import React from "react";

const Team = () => {
  const faculty = [
    { name: "Dr. M. R. Panda" },
    { name: "Dr. Mohit Rastogi" },
    { name: "Dr. Kanchan Dixit" },
    { name: "Dr. Rahul Verma" },
  ];

  const devs = [
    { name: "Anmol Vats" },
    { name: "Rahul Sharma" },
    { name: "Priya Singh" },
  ];

  const img =
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&fm=jpg&q=60&w=400";

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] pt-28 flex justify-center">
      <div className="w-[65%] bg-white border border-gray-500 rounded-2xl shadow-lg px-10 py-10">
        {/* Faculty Section */}
        <h1 className="text-center text-4xl font-extrabold text-[#1E293B] uppercase tracking-wide mb-8">
          🎓 Faculty
        </h1>

        <div className="flex flex-col mt-6 gap-6">
          {faculty.map((f, index) => (
            <div
              key={index}
              className="flex gap-5 items-center border-b border-gray-200 pb-5 hover:bg-[#F3F4F6] transition-all rounded-xl px-3 py-2"
            >
              <img
                className="rounded-full w-28 h-28 object-cover border-2 border-[#3B82F6] shadow-md"
                src={img}
                alt={f.name}
              />
              <div>
                <h2 className="text-xl font-semibold text-[#1E3A8A]">
                  {f.name}
                </h2>
                <h3 className="text-gray-600 italic text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio rerum incidunt quam deleniti doloribus adipisci
                  ducimus deserunt pariatur reprehenderit molestias.
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Section */}
        <h1 className="text-center text-4xl font-extrabold text-[#1E293B] uppercase tracking-wide mt-14 mb-8">
          👨‍💻 Developers
        </h1>

        <div className="flex flex-col gap-6">
          {devs.map((d, index) => (
            <div
              key={index}
              className="flex gap-5 items-center border-b border-gray-200 pb-5 hover:bg-[#F3F4F6] transition-all rounded-xl px-3 py-2"
            >
              <img
                className="rounded-full w-28 h-28 object-cover border-2 border-[#3B82F6] shadow-md"
                src={img}
                alt={d.name}
              />
              <div>
                <h2 className="text-xl font-semibold text-[#1E3A8A]">
                  {d.name}
                </h2>
                <h3 className="text-gray-600 italic text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio rerum incidunt quam deleniti doloribus adipisci
                  ducimus deserunt pariatur reprehenderit molestias.
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
