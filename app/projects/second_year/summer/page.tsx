import Image from 'next/image';
import Link from 'next/link';
import mlImage from './ml_trading.png';

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Tiod/ Stock algorithm</h1>
      <p className="description">
        How I got to the algo trading project:
        <br />
        Since I already started it in the past I kept going with it this time I was sure everything would be fine because I realised I could create a simple algorithm and then apply ml to it but guess what, the api I wanted to use was from age 18+, so I just added some line in pycharm which told me to keep grinding on the project in a year and half when I&apos;m 18.
        <br />
        What I did in the stock algorithm:
        <br />
        As for the stock algorithm your more than welcome to check my previous pages to see more of it however I&apos;m fairly certain I&apos;ll just keep working on it when I&apos;m 18 because of the age restriction of the api
        <br />
        How I got to the projet tiod:
        <br />
        I actually got to this project because there was a hackathon and we needed to create some project that would help school and my friends and I thought it would be cool to create an application that would allow people to connect both in a friendly manner and professional manner and because we so called &quot;Won the hackathon&quot;, we got 3,000 nis for the project so we decided to keep working on it.
        <br />
        What I&apos;m currently doing in tiod:
        <br />
        In tiod there are going to be multiple tasks my team and I must complete and the task I&apos;m going to do is create the database using postgresql, and I&apos;m probably going to do there other things as it advances &rang;
      </p>
      <ul className="linksprj">
        <li className="linkprj">
          <Link href="https://www.linkedin.com/in/eshel-nagar-3a8294259/">LinkedIn</Link>
        </li>
        <li className="linkprj">
          <Link href="https://github.com/UnmatchedPerspicacious">Github</Link>
        </li>
        <li className="linkprj">
          <Link href="https://www.instagram.com/eshesthenics/">Instagram</Link>
        </li>
      </ul>
    </div>
  );
}
