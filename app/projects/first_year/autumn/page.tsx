import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";

export default function Page(){
  return <div className="container">
  <h1 className="head">kiosk in school</h1>
  <p className="description">
<<<<<<< HEAD
    I created a kiosk in school. Essentially I just sold cola and other light drinks and at the same time seeing where I could land higher sales and profit margins.
=======
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
  voluptas quae quasi amet dolorum aliquid minus quaerat error 
  similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
  voluptas quae quasi amet dolorum aliquid minus quaerat error 
  similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur
>>>>>>> 311b268a7a260f2c7bfd7402f6d51bf00f2469ee
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
