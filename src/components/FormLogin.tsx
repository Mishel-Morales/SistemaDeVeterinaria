"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { validationLogin } from "@/validations/Login"

const FormLogin = () => {

  const form = useForm<z.infer<typeof validationLogin>>({
    resolver: zodResolver(validationLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof validationLogin>) {
    console.log(data, 'Que envia??');
  }

  return (
    <Card className="w-full sm:max-w-md flex border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-center text-cyan-500">Use your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Email"
                    autoComplete="off"
                    className="placeholder:text-cyan-500 border-2 border-cyan-500 rounded-full text-sm focus:border-cyan-600 focus-visible:ring-0"
                  />
                  {fieldState.invalid && (
                    <FieldError className="text-red-800" errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mt-3">
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                 
                  <Input
                    {...field}
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                    className="placeholder:text-cyan-500 border-2 border-cyan-500 rounded-full text-sm focus:border-cyan-600 focus-visible:ring-0"
                  />
                  {fieldState.invalid && (
                    <FieldError className="text-red-800" errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field>
          <Button type="submit" form="form-rhf-demo" className="bg-sky-400 rounded-full text-white">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

export default FormLogin;