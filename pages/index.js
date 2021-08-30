import Head from "next/head";
import Portada from "../components/Portada";
import Audiovisuales from "../components/Audiovisuales";
import Discografía from "../components/Discografía";
import Bio from "../components/Bio";
import Contacto from "../components/Contacto";

export default function Inicio() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone"
          rel="stylesheet"
        />
      </Head>
      <Portada />
      <Audiovisuales />
      <Discografía />
      <Bio />
      <Contacto />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
}
