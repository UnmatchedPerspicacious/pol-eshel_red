import example from './example_img.jpg';
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Penguin game in unity</h1>
      <p className="description">
        How I got to the project:&lt;br /&gt;
        I actually got to the project by ending my course in unity and then I decided to make a game with aviv a student from my class&lt;br /&gt;
        &lt;br /&gt;
        What I did:&lt;br /&gt;
        Me and aviv someone in my class created a penguin game, where the penguin essentially tries to dodge objects flying from the sky, if I still have the project I&apos;ll let you play but I warn you it&apos;s quite bad &amp;#128517;.
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
