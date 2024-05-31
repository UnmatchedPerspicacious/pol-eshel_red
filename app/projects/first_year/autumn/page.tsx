import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">kiosk in school</h1>
      <p
        className="description"
        dangerouslySetInnerHTML={{
          __html:
            "How I got to the project:<br />The reason I got to make this project was because I was interested in business and I knew it could teach me a lot and it could also make some money<br /><br />What I did:<br />I created a kiosk in school. Essentially I just sold cola and other light drinks and at the same time seeing where I could land higher sales and profit margins.",
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
            <Link href={"https://www.linkedin.com/feed/"}>LinkedIn</Link>
          </li>
          <li className="linkprj">
            <Link href={"https://github.com/UnmatchedPerspicacious"}>Github</Link>
          </li>
          <li className="linkprj">
            <Link href={"#"}>Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
