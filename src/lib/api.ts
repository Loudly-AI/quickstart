import { SongResponse, PromptSongResponse } from "@/types"
const API_KEY = process.env.NEXT_PUBLIC_LOUDLY_API_KEY;

if (!API_KEY) {
  throw new Error('LOUDLY_API_KEY environment variable is required');
}

export async function getGenres() {
  const res = await fetch('https://soundtracks.loudly.com/api/ai/genres', {
    headers: {
      'API-KEY': API_KEY,
      'Accept': 'application/json',
    } as HeadersInit,
  })

  if (!res.ok) throw new Error('Failed to fetch genres')

  return res.json()
}

export async function getSongs(): Promise<SongResponse> {
  const res = await fetch('https://soundtracks.loudly.com/api/songs', {
    headers: {
      'API-KEY': API_KEY,
      'Accept': 'application/json',
    } as HeadersInit,
  })

  if (!res.ok) throw new Error('Failed to fetch songs')

  return res.json()
}

export async function getRandomText(): Promise<SongResponse>{
  const res = await fetch('https://soundtracks.loudly.com/api/ai/prompt/random', {
    headers:{
      'API-KEY': API_KEY,
      'Accept': 'application/json',
    } as HeadersInit,
  })
  if (!res.ok) throw new Error('Failed to fetch text')
  return res.json()
}

export async function getSongfromPrompt(promptText: string): Promise<PromptSongResponse> {
  const formData = new FormData();
  formData.append('prompt', promptText);
  formData.append('duration', '');
  formData.append('test', '');
  formData.append('structure_id', '');

  const res = await fetch('https://soundtracks.loudly.com/api/ai/prompt/songs', {
    method: 'POST',
    headers: {
      'API-KEY': API_KEY,
      'Accept': 'application/json',
    } as HeadersInit,
    body: formData,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to fetch song: ${res.status} ${errText}`);
  }
  return res.json();
}