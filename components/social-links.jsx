import { socialLinks } from "@/data/social-links";

const SocilaLinks = () => {
  return (
    <ul className="flex gap-4">
      {socialLinks.map((link) => (
        <li key={link.name} className=" flex items-center justify-center">
          <a
            target="_blank"
            href={link.link}
            className="bg-colors-quinary p-2  rounded-full shadow-lg hover:bg-blue-800 transition"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocilaLinks;
