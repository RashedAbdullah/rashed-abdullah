import { Roboto_Condensed, Aref_Ruqaa, Hind_Siliguri } from "next/font/google";
import "@/css/css.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-provider";
import { getManageLangs } from "@/manage-langs/manage-langs";

const roboto = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

const ruqaa = Aref_Ruqaa({
  weight: ["400"],
  subsets: ["arabic"],
});

const siliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300"],
});

export const metadata = {
  title: "Rashed Abdullah",
  description: "Rashed Abdullah's Portfolio website",
};

export default async function RootLayout({ children, params: { lang } }) {
  const langs = await getManageLangs(lang);
  return (
    <html lang={lang}>
      <body
        className={`${
          lang === "en"
            ? roboto.className
            : lang === "ar"
            ? ruqaa.className
            : siliguri.className
        } bg-colors-primary selection:text-colors-quinary`}
      >
        <LanguageProvider language={langs}>
          <Header lang={lang} />
          {children}
          <Footer lang={lang} />
        </LanguageProvider>
      </body>
    </html>
  );
}
