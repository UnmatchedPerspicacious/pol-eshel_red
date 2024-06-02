import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">kiosk in school</h1>
      <p className="description">
        How I got to the project:<br />
        The reason I got to make this project was because I was interested in business and I knew it could teach me a lot and it could also make some money<br />
        <br />
        What I did:<br />
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
            <Link href={"https://www.linkedin.com/in/eshel-nagar-3a8294259/"}>LinkedIn</Link>
          </li>
          <li className="linkprj"><Link href={"https://github.com/UnmatchedPerspicacious"}>Github</Link></li>
          <li className="linkprj"><Link href={"https://www.instagram.com/eshesthenics/"}>Instagram</Link></li>
        </ul>
      </div>
    </div>
  );
}
