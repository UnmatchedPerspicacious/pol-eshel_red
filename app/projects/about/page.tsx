import Link from "next/link";


export default function socials(){
  
  return <div className="container">
    <h1 className="head">About me</h1>
    <div className="descriptions">
    <div className="aboutme">
     <h1 className="whoami">Who am i?</h1>
    <p className="description">
        Hello, my name is Eshel Nagar. My main hobbies are fitness, chess, coding, and finances. While these started as hobbies, they&apos;re slowly becoming professions. You can learn more about me through the links below. I haven&apos;t uploaded anything to LinkedIn or GitHub yet, but I frequently post on Instagram.
    </p>
    </div>
    <div className="CV">
      <h1 className="CV-head">CV</h1>
      <p className="CV-text">
         At this school, I&apos;m majoring in computer science with a focus on algorithmic trading. My achievements include developing programming projects and gaining knowledge of cryptocurrency. In the future, I aim to create a lucrative stock-trading algorithm that incorporates machine learning. Additionally, I&apos;m working on a groundbreaking application called Tiod with my team. You&apos;ll be hearing more about it soon!🗿
      </p>
    </div>
    </div>
    <ul className="links">
  
      <li className="link">
        <Link href={"https://www.linkedin.com/feed/"}>LinkedIn</Link>
      </li>
      <li className="link"><Link href={"https://github.com/UnmatchedPerspicacious/UnmatchedPerspicacious"}>Github</Link></li>
      <li className="link"><Link href={"https://www.instagram.com/eshesthenics/"}>Instagram</Link></li>
    </ul>
    </div>
}
