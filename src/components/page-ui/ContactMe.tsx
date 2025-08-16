"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

import { sendContactForm } from "@/app/actions";
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
import { Textarea } from "@/components/ui/textarea";

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Name is requred." })
    .trim()
    .min(2, "Please enter a valid name.")
    .max(50),
  email: z
    .string({ required_error: "Email is requred." })
    .email("Must be a valid email address."),
  message: z
    .string()
    .trim()
    .min(20, "Please enter a message containing at least 20 characters.")
    .max(500),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

export function ContactMeForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormSchemaType) {
    try {
      const response = await sendContactForm(values);

      if (response.success) {
        form.reset();
        toast("Your message has been sent successfully.");
      } else {
        toast(
          "An error occurred while sending your message. Please try again later.",
        );
      }
      form.reset();
    } catch (error) {
      console.error(error);
      form.reset();
    }
  }

  return (
    <div
      id="contact-me"
      className="mx-auto h-screen max-w-5xl px-8 py-20 md:py-32"
    >
      <h1
        id="skills"
        className="pb-8 text-2xl font-bold dark:text-white md:text-7xl"
      >
        Contact Me
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={7}
                    placeholder="Type your message here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>

      {/* Social Media Links */}
      <div className="mt-12">
        {/* Full-width separator line */}
        <div className="w-full border-t border-neutral-200 dark:border-neutral-700 mb-8"></div>
        
        <h2 className="mb-8 text-center text-xl font-semibold text-neutral-800 dark:text-white">
          Connect with me
        </h2>
        
        {/* Evenly spaced social links */}
        <div className="flex justify-center space-x-8 md:space-x-12">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mian-abd/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 rounded-lg border-2 border-neutral-300 bg-transparent px-6 py-3 text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
          >
            <FaLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
            <span className="font-medium">LinkedIn</span>
            <FaExternalLinkAlt className="text-xs opacity-60" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mian-abd"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 rounded-lg border-2 border-neutral-300 bg-transparent px-6 py-3 text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
          >
            <FaGithub className="text-xl text-neutral-800 dark:text-neutral-200" />
            <span className="font-medium">GitHub</span>
            <FaExternalLinkAlt className="text-xs opacity-60" />
          </a>

          {/* Website */}
          <a
            href="https://www.mian-abdullah.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 rounded-lg border-2 border-neutral-300 bg-transparent px-6 py-3 text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
          >
            <FaExternalLinkAlt className="text-xl text-green-600 dark:text-green-400" />
            <span className="font-medium">Website</span>
            <FaExternalLinkAlt className="text-xs opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
}
