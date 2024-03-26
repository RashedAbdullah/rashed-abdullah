import { Roboto_Condensed } from "next/font/google";
import "@/css/css.css";

const roboto = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rashed Abdullah",
  description: "Rashed Abdullah's Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-colors-primary`}>
        {children}
      </body>
    </html>
  );
}
