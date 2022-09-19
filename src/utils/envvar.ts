const unsplashApiKeys =
  process.env.NEXT_PUBLIC_UNSPLASH_API_KEY?.split(",") || [];
export const unsplashApiKeyRandom =
  unsplashApiKeys[Math.floor(Math.random() * unsplashApiKeys.length)];
