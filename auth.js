const SUPABASE_URL = 'https://ltusvgdxhkccdxentorz.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Tu5bmyeztA1R6ajbYkJaJQ_mAng6cyr';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Funkcja logowania - podepnij pod przycisk w HTML
async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Błąd: " + error.message);
  } else {
    console.log("Zalogowano:", data.user);
    window.location.href = "/dashboard.html"; // albo inna strona po zalogowaniu
  }
}

// Sprawdzanie czy użytkownik jest zalogowany (wrzuć na każdą stronę)
async function checkUser() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session && window.location.pathname.includes('dashboard')) {
      window.location.href = "/"; // Wypad na główną jeśli nie ma sesji
  }
}
checkUser();