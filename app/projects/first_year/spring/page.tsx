import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Moveable plane in unity</h1>
      <p
        className="description"
        dangerouslySetInnerHTML={{
          __html:
            "How I got to the project:<br />I actually saw ori someone in my class coding and because it seemed quite interesting I decided to start<br /><br />What I did:<br />Right here I started coding and I followed along a course that at the end tought me how to build a plane that can fly in x, y, z dimensions in unity",
        }}
      />
      <div className="images">
        <div className="image-container">
          <Image className="image" src={require("./example_img.jpg")} alt="" />
        </div>
        <div className="image-container">
          <Image className="image" src={require("./example_img.jpg")} alt="" />
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
