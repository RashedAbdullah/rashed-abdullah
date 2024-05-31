"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathName = usePathname();
  const handleLangs = (lang) => {
    router.push(`/${lang}/${pathName.slice(3)}`);
  };
  return (
    <div>
      <div>
        <ul className="mx-4 flex bg-colors-primary text-colors-quaternary p-2 rounded mt-1 justify-center align-middle">
          <li>
            <button
              onClick={() => handleLangs("en")}
              className={`px-2 py-1 hover:text-green-500 ${
                pathName.slice(1, 3) === "en" && "text-colors-quinary"
              }`}
            >
              English
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLangs("ar")}
              className={`px-2 py-1 hover:text-green-500 ${
                pathName.slice(1, 3) === "ar" && "text-colors-quinary"
              }`}
            >
              العربية
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLangs("bn")}
              className={`px-2 py-1 hover:text-green-500 ${
                pathName.slice(1, 3) === "bn" && "text-colors-quinary"
              }`}
            >
              বাংলা
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
