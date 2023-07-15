import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: {},
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id,
                        },
                        method: 'GET'
                    };
                }
            }),
            addPhoto: builder.mutation({
                query: (album) => {
                    return {
                        url: '/photos',
                        body: {
                            albumId: album.id,
                            url: faker.image.urlLoremFlickr('abstract', 150, 150)
                        },
                        method: 'POST'
                    };
                }
            }),
            removePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE'
                    };
                }
            })
        };
    }
});

export const { 
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photosApi;
export { photosApi };

