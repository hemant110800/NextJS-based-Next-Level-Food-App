import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

export default function MealDynamic({ params }) {
  const meal = getMeal(params.hemantMeal);
  if(!meal){
      notFound();
      //it will stop executing this component and it will give fallback page
  }
  meal.instructions = meal.instructions.replace(/\n/g,'<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailTo:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}
        ></p>
        {/* <p>{params.hemantMeal}</p> */}
      </main>
    </>
  );
}
