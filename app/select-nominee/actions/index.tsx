// 'use server'

import { SubmitHandler } from "react-hook-form";

export const selectNominee: SubmitHandler<FormValues> = async (data) => {
   console.log('what', data)
};

export async function getNominees() {
   // const 
}
