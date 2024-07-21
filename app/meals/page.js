import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from '@/lib/meals';
import {Suspense} from 'react';
import styles from './loading.module.css';

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>;
}

export default function Meal(params) {
    
    return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite reciepe and cook it yurself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Reciepe</Link>
        </p>
      </header>
      <main className={classes.main}>
         <Suspense fallback={<h4 className={styles.loading}>Fetching Meals.....</h4>}>
             <Meals></Meals>
         </Suspense>
      </main>
    </>
  );
}

//Use Suspense for loading