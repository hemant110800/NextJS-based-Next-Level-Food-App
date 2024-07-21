'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";


export async function ShareMeal(formData){
    // 'use server'
     //Server Action Function
    // Server executing function will exceute on server only
 /*
 Next and React here that will ensure that when this form is submitted, Next.js will, behind the scenes,
 create a request and send it to this Next.js server that's serving the website so that this function
  gets triggered, and you can then handle the form submission there, but on the server.
  So, that function will then execute on the server, not in the client. And this function will then 
 automatically receive that formData that was submitted.
   */
 
    // console.log("Share Meal!");
    const meal = {
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      title:formData.get('title'),
      image:formData.get('image'),
      creator:formData.get('name'),
      creator_email:formData.get('email'),
    }
 
    console.log(meal);
    await saveMeal(meal);
    revalidatePath('/meals'); // ==> to revalidate path for NextJS Caching.
    redirect('/meals');
   }
 