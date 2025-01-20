import { defu } from 'defu'
import type { NitroFetchOptions } from 'nitropack'

export function useCustomFetch<T extends string, K>(
  url: string,
  options: NitroFetchOptions<T> = {}
): Promise<K> {
  const config = useRuntimeConfig()
  const defaults: NitroFetchOptions<T> = {
    baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-API-KEY': 'P2XPCG5-WTBMXVN-P8NGB0W-7ZRDB7Z',
    },
  }
  const params = defu(options, defaults)

  return $fetch(url, params)
}