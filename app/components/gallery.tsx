const Gallery = () => {
  const data = [
    {
      author: "Jed Peek",
      title: "Music Store",
      description: "This is a website for a music store",
      imgURL: "/assets/drums_01.jpg",
    },
    {
      author: "Jed Peek",
      title: "Financial Blog",
      description: "This is a website for a financial blog",
      imgURL: "/assets/finance_01.jpg",
    },
    {
      author: "Jed Peek",
      title: "Music Store",
      description: "This is a website for a music store",
      imgURL: "/assets/drums_01.jpg",
    },
    {
      author: "Jed Peek",
      title: "Financial Blog",
      description: "This is a website for a financial blog",
      imgURL: "/assets/finance_01.jpg",
    },
  ];
  return (
    <section className="text-gray-600 body-font" id="portfolio">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sm:text-3xl  title-font mb-4  relative whitespace-nowrap text-blue-500">
            Recent Websites
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-lg text-zinc-700">
            A collection of our recent websites showcasing our designs.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((site) => {
            return (
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={site.imgURL}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Designed by: {site.author}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {site.title}
                    </h1>
                    <p className="leading-relaxed">{site.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
