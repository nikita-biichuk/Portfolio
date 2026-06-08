"use client";
import React, { useState } from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/utils/cn";
import { sendEmail } from "@/actions/sendEmail.action";
import { Textarea } from "./ui/TextArea";
import { toast } from "sonner";
import { PhoneInput } from "./ui/PhoneInput";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendEmail(formData);
      console.log("Email sent successfully");
      toast.success("Successfully sent your message. I will contact you soon!");
      setLoading(false);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email", error);
      toast.error("Failed to send your message. Please try again later.");
      setLoading(false);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-xl md:rounded-2xl p-8 md:p-8 shadow-input bg-white dark:bg-black-200">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="cursor-text select-text">
              First name
            </Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              required
              minLength={2}
              maxLength={25}
              value={formData.firstname}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="cursor-text select-text">
              Last name
            </Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              required
              minLength={2}
              maxLength={25}
              value={formData.lastname}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="cursor-text select-text">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="examplemail@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone" className="cursor-text select-text">
            Phone Number
          </Label>
          <PhoneInput
            id="phone"
            required
            value={formData.phone}
            onChange={handlePhoneChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="select-text cursor-text">
            Message
          </Label>
          <Textarea
            id="message"
            rows={5}
            required
            placeholder="Your message"
            minLength={10}
            maxLength={1000}
            value={formData.message}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:text-slate-500"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Contact me →"}
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
