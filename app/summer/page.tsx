import example from './example_img.jpg';

import Image from "next/image"

import Link from "next/link";

export default function Page(){

return <div className="container">

<h1 className="head">Tiod/ Stock algorithm</h1>

<p className="description">

How I got to the algo trading project:<br />
Since I already started it in the past I kept going with it this time I was sure everything would be fine because I realised I could create a simple algorithm and then apply ml to it but guess what, the api I wanted to use was from age 18+, so I just added some line in pycharm which told me to keep grinding one the project in a year and half when I'm 18.<br />
<br />
How I got to the project tiod:<br />
I actually got to this project because there was a hackathon and we needed to create some project that would help school and my friends and I thought it would be cool to create an application that would allow people to connect both in a friendly manner and professional mannner and because we so called "Won the hackathon", we got 3,000 nis for the project so we decided to keep working on it.<br />
<br />
What I did in the stock algorithm:<br />
As for the stock algorithm your more than welcome to check my previous pages to see more of it however I'm fairly certain I'll just keep working on it when I'm 18 because of the age restriction of the api<br />
<br />
What I'm currently doing in tiod:<br />
In tiod there are going to be multiple tasks my team and I must complete and the task I'm going to do is create the database using postgresql, and I'm probably going to do there other things as it advances 🗿

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
