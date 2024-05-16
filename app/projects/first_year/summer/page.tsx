import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Penguin game in unity</h1>
  <p className="description">

    Me and aviv someone in my class created a penguin game, where the penguin essentially tries to dodge objects flying from the sky, if I still have the project I'll let you play but I warn you it's quite bad 🤣.

  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"#"}>LinkedIn</Link>
  </li>
  <li className="linkprj"><Link href={"#"}>Github</Link></li>
  <li className="linkprj"><Link href={"#"}>Facebook</Link></li>
</ul>
    
  </div>
  </div>

  
}
