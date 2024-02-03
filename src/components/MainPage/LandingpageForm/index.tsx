"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Terms from "./Terms";
import Detail from "./Detail";
import { Button } from "@/components/ui/button";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome precisa ter no mínimo 2 caracteres" }),
  email: z.string().email("Esse não é um email válido"),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
});

const LandingpageForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mt-5 md:mb-16 md:mt-0 md:w-[60%] md:px-24"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome *</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Digite o seu nome" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row md:justify-between">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="md:w-[45%]">
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o seu telefone"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:w-[45%]">
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Digite o seu email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Terms />
        <Detail />
        <Button type="submit">Gerar Cartão Grátis</Button>
      </form>
    </Form>
  );
};

export default LandingpageForm;
