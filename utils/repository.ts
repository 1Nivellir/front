import type { $Fetch, NitroFetchRequest } from 'nitropack'
import type { MovieResponse } from '~/types/app';

export const repositoryApi = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
	async films(): Promise<MovieResponse> {
		return fetch<MovieResponse>('movie', {
		  method: 'GET',
		  params: {
			page: 1,
			limit: 10,
			type: 'movie',
			year: 2024,
			'rating.kp': '8.5-10',
			notNullFields: ['poster.url'],
		  },
		});
	  },
	  async top(): Promise<MovieResponse> {
		return fetch<MovieResponse>('movie', {
		  method: 'GET',
		  params: {
			page: 1,
			limit: 10, 
			notNullFields: ['top10','poster.url'],
		  },
		});
	  },
	  async getMovieById(id: number): Promise<any> {
		return fetch<any>(`movie/${id}`, {
		  method: 'GET',
		});
	  },
})