import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Buying a kettle for school</h1>
  <p className="description">
    I was meant to buy a kettle for school as the mini project but not enough people wanted it
    so I decided I wouldn't. But if enough people will want it and will also donate a few shekels towards it I'll buy it 🗿!!


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
  <li className="linkprj"><Link href={"https://www.instagram.com/eshesthenics/"}>Instagram</Link></li>
</ul>
    
  </div>
  </div>

  
}
