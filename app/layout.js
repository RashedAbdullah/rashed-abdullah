import { Roboto } from "next/font/google";
import "@/css/css.css";

const roboto = Roboto({
  weight: ["100", "300"],
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
