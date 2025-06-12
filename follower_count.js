export let iscritti_tiktok = 407;
export let iscritti_instagram = 1612;

const youtubeChannelID = "UCS7kt-sPzn--kLM-f_TVPGw";
const url = `https://api.socialcounts.org/youtube-live-subscriber-count/${youtubeChannelID}`;

export function getIscrittiYouTube() {
  const youtubeChannelID = "UCS7kt-sPzn--kLM-f_TVPGw";
  const url = `https://api.socialcounts.org/youtube-live-subscriber-count/${youtubeChannelID}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.est_sub)
    .catch(error => {
      console.error("Errore nel recupero dei follower:", error);
      return 0;
    });
}