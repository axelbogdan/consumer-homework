import { ServiceResponse } from "../interfaces/serviceResponse";

const apiUrl = 'https://gutendex.com/books/';

export const restApi = (searchQuery: string) => fetch(`${apiUrl}${searchQuery}`).then<ServiceResponse<string>>(resp => {
    if (resp.status === 200) {
        return resp.json().then(data => ({
            success: true,
            data
        }))
    } else {
        return {
            success: false,
            error: `Something happened. Api sends us status: ${resp.status}`
        }
    }
})

export const fetchBooks = (searchQuery: string) => {
    return restApi(`?search=${searchQuery}`).then<ServiceResponse<any>>(response => {
        const { success, error, data } = response;
        if (success) {
            return {
                ...response,
                data
            }
        }
        return { success, error }
    })
}

export const fetchBookById = (id: string | undefined) => {
    return restApi(`?ids=${id}`).then<ServiceResponse<any>>(response => {
        const { success, error, data } = response;
        if (success) {
            return {
                ...response,
                data
            }
        }
        return { success, error }
    })

}