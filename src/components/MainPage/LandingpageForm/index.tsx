"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Terms from "./Terms";
import Detail from "./Detail";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import ReactInputMask from "react-input-mask";
import { useRouter } from "next/navigation";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome precisa ter no mínimo 2 caracteres" }),
  email: z.string().email("Esse não é um email válido"),
  phone: z.string().regex(phoneRegex, "Telefone inválido"),
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
  const router = useRouter();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.push(
      `/result?name=${values.name}&email=${values.email}&phone=${values.phone}`
    );
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue("phone", e.target.value);
  };

  const adjustValue = (v: string) => {
    const digitos = !v ? "" : v.replace(/[^\d]/g, "");
    if (!digitos || digitos.length < 10) return v;
    const corte = digitos.length === 10 ? 6 : 7;
    const max = digitos.length > 11 ? 11 : digitos.length;
    return `(${digitos.substring(0, 2)}) ${digitos.substring(
      2,
      corte
    )}-${digitos.substring(corte, max)}`;
  };

  const maskBuilder = () => {
    const v = form.getValues("phone");
    if (!v || v.length == 0) return "";
    const a = adjustValue(v);
    return a.length >= 6 && a[5] === "9" ? "(99) 99999-9999" : "(99) 9999-9999";
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mt-5 px-4 mb-2 md:mb-16 md:mt-0 md:w-[50%] md:px-24"
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
              <FormMessage />
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
                  <ReactInputMask
                    mask={maskBuilder()}
                    value={form.getValues("phone")}
                    onChange={handleChangePhone}
                  >
                    <Input type="text" placeholder="Digite o seu telefone" />
                  </ReactInputMask>
                </FormControl>
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Terms />
        <Detail />
        <Button
          type="submit"
          className=" bg-darkYellow hover:bg-lightGray w-full h-[48px] text-darkBlack font-sans text-sSm font-bold"
        >
          GERAR CARTÃO GRÁTIS <Icon icon="mdi:arrow-right-thin" width={36} />
        </Button>
      </form>
    </Form>
  );
};

export default LandingpageForm;
