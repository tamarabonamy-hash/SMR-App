import supabase from './supabase'

// Sign up
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password })
  return { data, error }
}

// Sign in
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return { data, error }
}

// Sign out
export const signOut = async () => {
  await supabase.auth.signOut()
}

// Get current user
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
