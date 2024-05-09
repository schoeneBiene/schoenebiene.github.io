"use client";

import BlogPostContent from "@/components/BlogPostContent";
import {redirect} from "next/navigation";
import {useRef, useState} from "react";
import {SubmitHandler, set, useForm} from "react-hook-form";
import { Turnstile } from "@marsidev/react-turnstile";

type CreateBlogForm = {
    slug: string
    title: string
    body: string
    turnstileToken: string
    secret: string
}

export default function CreateBlogPage() {
    const {
        register,
        handleSubmit,
        watch,
        setValue
    } = useForm<CreateBlogForm>();
    
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit: SubmitHandler<CreateBlogForm> = (data) => {
        if(!data.turnstileToken) {
            setErrorMsg("Please solve the captcha!");
            return;
        }

        fetch("/api/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(res.status === 200) {
                redirect(`/blog/${data.slug}`);
            } else if(res.status === 401) {
                setErrorMsg("Wrong secret!");
            } else if(res.status === 500) {
                setErrorMsg("Internal Server Error!");
            } else {
                setErrorMsg(res.statusText || "An unknown error occured.");
            }
        }).catch((err) => {
            console.error(err);
            setErrorMsg("An unknown error occured");
        });
    };

    return(
        <div className="flex w-full h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
                <label className="text-white">Slug</label> <br />
                <input {...register("slug", { required: true })} /> <br />
                <label className="text-white">Title</label> <br />
                <input {...register("title", { required: true })} /> <br />
                <label className="text-white">Body</label> <br />
                <textarea {...register("body", { required: true })} className="w-80"/> <br />
                <label className="text-white">Secret</label> <br />
                <input {...register("secret", { required: true })} type="password"/> <br />
                <Turnstile 
                    siteKey="0x4AAAAAAAZuV-T70N8SJe1i"
                    onSuccess={(token) => {
                        setValue("turnstileToken", token);
                    }}
                    onError={() => {
                        setErrorMsg("An error occured while loading the captcha. Please try again.");
                    }}
                />
                <label className="text-red-500">{errorMsg}</label> <br />
                <input type="submit" className="underline text-white" />
                <br />
                <div className="text-white">
                    <BlogPostContent content={watch("body")} />
                </div>
            </form>
        </div>
    );
}
