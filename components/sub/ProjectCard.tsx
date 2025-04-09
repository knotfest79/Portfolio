import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#2A0E61] max-w-sm">
      {/* Image shown with top part prioritized */}
      <div className="h-[250px] w-full relative rounded-t-lg">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover object-top rounded-t-lg"
        />
      </div>

      {/* Text content */}
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
