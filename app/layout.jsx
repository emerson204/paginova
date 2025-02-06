import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import "aos/dist/aos.css";

const poppinsLight = localFont({
  src: "./fonts/Poppins-Light.woff2",
  variable: "--font-poppins-light",
  display: "swap", // Mejora el rendimiento.
});

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff2",
  variable: "--font-poppins-regular",
  display: "swap",
});

const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.woff2",
  variable: "--font-poppins-medium",
  display: "swap",
});

const poppinsSemiBold = localFont({
  src: "./fonts/Poppins-SemiBold.woff2",
  variable: "--font-poppins-semibold",
  display: "swap",
});

const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.woff2",
  variable: "--font-poppins-bold",
  display: "swap",
});

export const metadata = {
  title: "Paginova",
  description:
    "Pagina que ofrece servicios de crear paginas web y aplicaciones web",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?=4"],
    shortcut: ["/shortcuts/shortcut.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppinsLight.variable} ${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
