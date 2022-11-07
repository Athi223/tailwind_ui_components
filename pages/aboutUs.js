import Head from "next/head";

import Navbar from "../components/navbar";
import AboutUs from "../components/aboutUs";
import Footer from "../components/footer";
import SocialButtons from "../components/socialbuttons";
import Contributors from "../components/contributors";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Bootstrap | About US</title>
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
        <meta name="title" content="Tailwind Bootstrap" />
        <meta name="description" content="TailwindCSS ui component bootstrap" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tailwindcsscomponents.vercel.app/"
        />
        <meta property="og:title" content="Tailwind Bootstrap" />
        <meta
          property="og:description"
          content="TailwindCSS ui component bootstrap"
        />

        <meta
          property="twitter:url"
          content="https://tailwindcsscomponents.vercel.app/"
        />
        <meta property="twitter:title" content="Tailwind Bootstrap" />
        <meta
          property="twitter:description"
          content="TailwindCSS ui component bootstrap"
        />
      </Head>

      <div className=" bg-slate-100 w-full min-h-screen font-poppins">
        <Navbar />
        <AboutUs />
        <div className="social_buttons">
          <SocialButtons />
        </div>
        <Footer />
      </div>
    </>
  );
}
