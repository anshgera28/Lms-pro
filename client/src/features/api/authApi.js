import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";


const USER_API = "http://localhost:8080/api/v1/user"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "/register",
                method: "POST",
                body: inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "/login",
                method: "POST",
                body: inputData
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('Login successful, user data:', data.user);
                    dispatch(userLoggedIn({ 
                        user: data.user,
                        isAuthenticated: true 
                    }));
                } catch (error) {
                    console.error('Login error:', error);
                }
            }
        }),
        loadUser: builder.query({
            query: () => ({
                url: "/profile",
                method: "GET"
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({ user: result.data.user }));
                } catch (error) {
                    console.log(error);
                }
            }
        }),











        updateUser: builder.mutation({
            query: (formData) => ({
                url: "/profile/update",
                method: "PUT",
                body: formData,
                credentials: "include"
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "GET"
            }),
            async onQueryStarted(_, {queryFulfilled , dispatch }) {
                try {
                    dispatch(userLoggedOut());
                } catch (error) {
                    console.log(error);
                }
            }
            
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useLoadUserQuery, useUpdateUserMutation, useLogoutUserMutation } = authApi
