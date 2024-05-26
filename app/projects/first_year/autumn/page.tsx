import example from './example_img.jpg';
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">kiosk in school</h1>
      <p className="description">
        How I got to the project:&lt;br /&gt;
        The reason I got to make this project was because I was interested in business and I knew it could teach me a lot and it could also make some money&lt;br /&gt;
        &lt;br /&gt;
        What I did:&lt;br /&gt;
        I created a kiosk in school. Essentially I just sold cola and other light drinks and at the same time seeing where I could land higher sales and profit margins.
      </p>
      <div className="images">
        <div className="image-container">
          <Image className="image" src={example} alt="" />
        </div>
        <div className="image-container">
          <Image className="image" src={example} alt="" />
        </div>
        <ul className="linksprj">
          <li className="linkprj">
            <Link href={"#"}>LinkedIn</Link>
          </li>
          <li className="linkprj">
            <Link href={"#"}>Github</Link>
          </li>
          <li className="linkprj">
            <Link href={"#"}>Facebook</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
