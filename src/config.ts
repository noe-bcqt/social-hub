// Tout le contenu personnalisable du site est ici.
// Photo : déposez votre image dans /public (ex. avatar.jpg) puis mettez "/avatar.jpg".

export type SocialId = "instagram" | "snapchat" | "tiktok" | "spotify";

export interface Social {
  id: SocialId;
  name: string;
  description?: string; // laisser vide pour masquer
  url: string;
}

export const config = {
  defaultTheme: "system" as "light" | "dark" | "system",

  handle: "Bio.", // affiché dans le header
  name: "noe.bcqt", // titre principal
  avatar: `${import.meta.env.BASE_URL}avatar.png`,
  bio: "Tout mes réseaux",
  role: "Étudiant.",
  location: "Limoges, France",

  status: { show: true, label: "Disponible" },

  socialsTitle: "Réseaux",
  socials: [
    { id: "instagram", name: "Instagram", description: "Photos et stories", url: "https://www.instagram.com/noe.bcqt" },
    { id: "snapchat", name: "Snapchat", description: "Ajoutez-moi", url: "https://www.snapchat.com/@noe.bcqt" },
    { id: "tiktok", name: "TikTok", description: "Vidéos", url: "https://tiktok.com/@noe.bcqt" },
    { id: "spotify", name: "Spotify", description: "Mes playlists", url: "https://open.spotify.com/user/4l238yf2r2v79csg3tp0n5ru5?si=9f0b6548854f48b7" },
  ] satisfies Social[],

  now: {
    show: true,
    title: "En ce moment",
    track: "Lifestyle",
    artist: "Josman",
    url: "https://open.spotify.com/track/5pMXt9Nj2kmSilcLZuOHEO?si=a15cba730dc7426e",
    phrase: "Citation preférée",
    quote: "L’autre est le miroir où j’apprends à me connaître.",
    quoteAuthor: "André Gide",
  },

  contact: { label: "Contact", href: "noe.becquaert@gmail.com" },
  footer: { tagline: "End." },
};
