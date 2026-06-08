"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { sendEmail } from "@/actions/sendEmail.action";
import { cn } from "@/utils/cn";

import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { PhoneInput } from "./ui/PhoneInput";
import { Textarea } from "./ui/TextArea";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(formData);
      toast.success(t("success"));
      resetForm();
    } catch (error) {
      console.error("Failed to send email", error);
      toast.error(t("error"));
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-xl md:rounded-2xl p-8 md:p-8 shadow-input border border-border bg-background dark:bg-card">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="cursor-text select-text">
              {t("firstName")}
            </Label>
            <Input
              id="firstname"
              placeholder={t("firstNamePlaceholder")}
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
              {t("lastName")}
            </Label>
            <Input
              id="lastname"
              placeholder={t("lastNamePlaceholder")}
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
            {t("email")}
          </Label>
          <Input
            id="email"
            placeholder={t("emailPlaceholder")}
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone" className="cursor-text select-text">
            {t("phone")}
          </Label>
          <PhoneInput
            id="phone"
            required
            value={formData.phone}
            onChange={handlePhoneChange}
            searchPlaceholder={t("searchCountry")}
            emptyMessage={t("countryNotFound")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="select-text cursor-text">
            {t("message")}
          </Label>
          <Textarea
            id="message"
            rows={5}
            required
            placeholder={t("messagePlaceholder")}
            minLength={10}
            maxLength={1000}
            value={formData.message}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-primary to-primary/80 block w-full text-primary-foreground rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_rgba(255,255,255,0.15)_inset,0px_-1px_0px_0px_rgba(0,0,0,0.15)_inset] hover:shadow-[0_0_28px_2px_var(--color-primary)] hover:brightness-110 transition-all duration-500 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          {loading ? t("submitting") : t("submit")}
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
      <span className="group-hover/btn:opacity-100 block transition-opacity duration-700 ease-out opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary/70 dark:via-primary-foreground/50 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition-opacity duration-700 ease-out opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary/70 dark:via-primary-foreground/50 to-transparent" />
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
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
