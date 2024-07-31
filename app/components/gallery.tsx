import SiteCard from "./site-card";

const Gallery = () => {
  const data = [
    {
      author: "Jed Peek",
      title: "Music Store",
      description: "This is a website for a music store",
      imgURL: "/assets/drums_01.jpg",
      link: "https://www.youtube.com/",
    },
    {
      author: "Jed Peek",
      title: "Music Store",
      description: "This is a website for a music store",
      imgURL: "/assets/drums_01.jpg",
      link: "https://www.youtube.com/",
    },
    {
      author: "Jed Peek",
      title: "Music Store",
      description: "This is a website for a music store",
      imgURL: "/assets/drums_01.jpg",
      link: "https://www.youtube.com/",
    },
    {
      author: "Jed Peek",
      title: "Financial Blog",
      description: "This is a website for a financial blog",
      imgURL: "/assets/finance_01.jpg",
      link: "https://www.youtube.com/",
    },
    {
      author: "Jed Peek",
      title: "Music Store",
      description: "This is a website for a music store",
      imgURL: "/assets/drums_01.jpg",
      link: "https://www.youtube.com/",
    },
    {
      author: "Jed Peek",
      title: "Financial Blog",
      description: "This is a website for a financial blog",
      imgURL: "/assets/finance_01.jpg",
      link: "https://www.youtube.com/",
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
        <div className="flex flex-wrap p-2">
          {data.map((site, i) => {
            return (
              <SiteCard
                author={site.author}
                title={site.title}
                description={site.description}
                imgURL={site.imgURL}
                link={site.link}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
