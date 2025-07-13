import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

 const COURSE_API = "http://localhost:8080/api/v1/course"
export const courseApi = createApi({
    reducerPath: "courseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: COURSE_API,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: "/",
                method: "POST",
                body: data,
                credentials: "include"
            })
        })
    })
})

export const { useCreateCourseMutation } = courseApi 