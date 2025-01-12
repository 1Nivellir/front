import { BASE_TOKEN } from '~/token'

export default defineNuxtPlugin({
    setup() {
        const apiFilms = $fetch.create({
            baseURL: 'https://api.kinopoisk.dev/v1.4/',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-KEY': BASE_TOKEN,
            },
        })
        return {
            provide: {
                apiFilms,
            },
        }
    },
})