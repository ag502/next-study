import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./meal-item.module.css";

export default function MealItem({ title, image, summary, creator }: any) {
  const router = useRouter();

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image alt={title} fill src={image} />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${router.query["meal-id"]}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
