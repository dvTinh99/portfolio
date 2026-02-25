export function useBaseUrl(): string {
  return import.meta.env.BASE_URL.replace('_nuxt/', '');
}
