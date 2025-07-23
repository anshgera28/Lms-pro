// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


//  const COURSE_API = "http://localhost:8080/api/v1/course"
// export const courseApi = createApi({
//     reducerPath: "courseApi",
//     tagTypes: ["refetch_Creator_Courses"],
//     baseQuery: fetchBaseQuery({
//         baseUrl: COURSE_API,
//         credentials: "include"
//     }),
//     endpoints: (builder) => ({
//         createCourse: builder.mutation({
//             query: (data) => ({
//                 url: "/",
//                 method: "POST",
//                 body: data,
           
//             }),                                                                                                                 
//             invalidatesTags: ["refetch_Creator_Courses"],
//         }),
//         getCreatorCourses: builder.query({
//             query: () => ({
//                 url: "",
//                 method: "GET",
//             }),
//             invalidatesTags: ["refetch_Creator_Courses"],
//         })
//     })
// })

// export const { useCreateCourseMutation, useGetCreatorCoursesQuery } = courseApi 


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API endpoint
const COURSE_API = "http://localhost:8080/api/v1/course";

// Create the API slice
export const courseApi = createApi({
  reducerPath: "courseApi", // Unique key for the reducer
  tagTypes: ["refetch_Creator_Courses","Refetch_Lecture"], // Tag used to trigger re-fetches
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_API,
    credentials: "include", // include cookies for auth/session
  }),
  endpoints: (builder) => ({
    // Mutation for creating a course
    createCourse: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      // When createCourse is called, invalidate this tag
      invalidatesTags: ["refetch_Creator_Courses"],
    }),
    getPublicCourses: builder.query({
      query: () => ({
        url: "/published-courses",
        method: "GET",
      }),
      providesTags: ["refetch_Creator_Courses"],
    }),

    // Query for getting all creator courses
    getCreatorCourses: builder.query({
      query: () => ({
        url: "", // gets all courses from base URL
        method: "GET",
      }),
     
      providesTags: ["refetch_Creator_Courses"],
    }),
    editCourse: builder.mutation({
      query: ({ formData, courseId }) => ({
        url: `/${courseId}`,
        method: "PUT",

        body: formData,
      }),
      invalidatesTags: ["refetch_Creator_Courses"],
    }),
    getCourseById: builder.query({
      query: (courseId) => ({ 
        url: `/${courseId}`,
        method: "GET",
      }),
    }),
    createLecture: builder.mutation({
      query: ({lectureTitle, courseId}) => ({
        url: `/${courseId}/lecture`,
        method: "POST",
        body: { lectureTitle },
      }),
      invalidatesTags: ["refetch_Creator_Courses"],
    }),
    getCourseLecture: builder.query({
      query: (courseId) => ({
        url: `/${courseId}/lecture`,
        method: "GET",
      }),
      providesTags: ["Refetch_Lecture"],
    }),
    editLecture: builder.mutation({
      query: ({ lectureTitle, videoInfo, isPreviewFree, courseId, lectureId }) => ({
        url: `/${courseId}/lecture/${lectureId}`,
        method: "POST",

        body: { lectureTitle, videoInfo, isPreviewFree },
      }),
      invalidatesTags: ["refetch_Creator_Courses"],
    }),
    removeLecture: builder.mutation({
      query: (lectureId) => ({
        url: `/lecture/${lectureId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Refetch_Lecture"],
    }),
    getLectureById: builder.query({
      query: (lectureId) => ({
        url: `/lecture/${lectureId}`,
        method: "GET",
      }),
    }), 
    publishCourse: builder.mutation({
      query: ({ courseId, query }) => ({
        url: `/${courseId}?publish=${query}`,
        method: "PATCH",
      }),
      invalidatesTags: ["refetch_Creator_Courses"],
    }),
    
  }),
});

export const {
  useCreateCourseMutation,
  useGetCreatorCoursesQuery,
  useGetPublicCoursesQuery,
  useGetLectureByIdQuery,
  useEditCourseMutation,
  usePublishCourseMutation,
  useGetCourseByIdQuery,
  useEditLectureMutation,
  useCreateLectureMutation,
  useGetCourseLectureQuery,
  useRemoveLectureMutation
} = courseApi;
