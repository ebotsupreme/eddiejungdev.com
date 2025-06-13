import { teddyData } from "@/app/lib/teddy-data";

const Teddy = () => (
  <span className="group/teddy inline-flex lg:cursor-[url('/images/teddy.png'),_pointer] lg:font-medium lg:text-slate-200">
    <span className="sr-only">Teddy</span>
    {teddyData.map((teddy) => (
      <span
        key={teddy.color}
        className={`${`group-hover/teddy:${teddy.color} transition duration-75 group-hover/teddy:-translate-y-px ${teddy.delay}`}`}
        aria-hidden={true}
      >
        {teddy.character}
      </span>
    ))}
  </span>
);

export default Teddy;
