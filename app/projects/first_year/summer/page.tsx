import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Penguin game in unity</h1>
      <p className="description">
        How I got to the project:<br />
        I actually got to the project by ending my course in unity and then I decided to make a game with aviv a student from my class<br />
        <br />
        What I did:<br />
        Me and aviv someone in my class created a penguin game, where the penguin essentially tries to dodge objects flying from the sky, if I still have the project Ill let you play but I warn you it&apos;s quite bad 🤣.
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
