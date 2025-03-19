'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/app/lib/supabase/server'


export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    first_name: formData.get('firstname') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log(error.message)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}