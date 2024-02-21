import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  lnk,
  badges,
}: {
  imageSrc: string;
  title: string;
  description: string;
  lnk: string;
  badges: any;
}) => {
  return (
    <>
      <div
        key={title}
        className="card lg:card-side  shadow-xl p-3 m-5 hover:scale-110 duration-200"
      >
        <a href={lnk} target="_blank">
          <figure>
            <Image
              width={100}
              height={100}
              src={imageSrc}
              alt="Album"
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-between">
              {badges.map((badge: any) => {
                return (
                  <div key={badge} className="badge badge-outline">
                    {badge}
                  </div>
                );
              })}
              {/* <div className="badge badge-outline">HTML</div>
              <div className="badge badge-outline">CSS</div>
              <div className="badge badge-outline">Javascript</div>
              <div className="badge badge-outline">Next.js</div> */}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
