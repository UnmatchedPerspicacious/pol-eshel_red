import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Ml stock prediction </h1>
  <p className="description">
    I built a machine learning model and taught it to predict stocks open, high, low, volume, and close values and it actually got a very low loss function which is good because basically the lower it is the more accurate the model 🗿.

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
