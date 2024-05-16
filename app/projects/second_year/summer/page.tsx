import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Tiod/ Stock algorithm</h1>
  <p className="description">
   I'm actually working on two projects, Tiod and a Stock algorithm. Tiod is going to be an application for networking and creating friends with messaging, and the Stock algorithm is going to be an algorithm that based on x commands will trade STOCKS 🗿🗿.

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
