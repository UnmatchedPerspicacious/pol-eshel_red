import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Stock algorithm</h1>
      <p className="description"/>
        How I got to the project:
        <br/>
        Because my last project was basically doing the same thing just that now I had more knowledge I decided to keep going with this project.
        <br/>
        What I did:
        <br/>
        I learned here a lot about matplotlib as well as plotting and although I didn&apos;t build an algorithm I improved much towards my goal and it also taught me how to plot stocks so I can also incorporate machine learning to it.
      <p/>
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
  );
}
