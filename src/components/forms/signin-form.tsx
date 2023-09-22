"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
// import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

// import { catchClerkError } from "@/lib/utils";
import { authSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";

import signIn from "@/services/authService";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { store } from "@/redux/store";
import { logIn } from "@/redux/features/authSlice";

type Inputs = z.infer<typeof authSchema>;

export function SignInForm() {
  const router = useRouter();
  const [error, setError] = React.useState("");
  //   const { isLoaded, signIn, setActive } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    return store.dispatch(logIn("bharat"));

    startTransition(async () => {
      try {
        const res = await signIn(data);
        const result: any = res.data;
        if (result) {
          Cookies.set("accessToken", result.accessToken, { expires: 7 });
          router.push("/");
        }
      } catch (error) {
        console.log("err", error);
        setError(
          (error as AxiosError<{ message: string }>)?.response?.data?.message ||
            (error as Error).toString()
        );
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <p>{error}</p>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>username</FormLabel>
              <FormControl>
                <Input placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  );
}
