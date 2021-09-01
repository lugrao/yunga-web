import styles from "./Redes.module.css";
import Image from "next/image";

const redes = [
  {
    nombre: "facebook",
    url: "https://www.facebook.com/yunga.audiovisual/",
  },
  {
    nombre: "spotify",
    url: "https://open.spotify.com/artist/6eD88Q8ph7zUGQvqAQBIjq",
  },
  {
    nombre: "youtube",
    url: "https://www.youtube.com/channel/UC6mpjFP43E-xoeRP4lm1pNg",
  },
  {
    nombre: "instagram",
    url: "https://www.instagram.com/yunga.audiovisual/",
  },
];

export default function Redes() {
  return (
    <div className={styles.redes}>
      {redes.map((red, idx) => (
        <a key={idx} href={red.url} target="_blank">
          <Image
            src={`/static/svg/redes/${red.nombre}.svg`}
            alt=""
            height={50}
            width={50}
          />
        </a>
      ))}
    </div>
  );
}
