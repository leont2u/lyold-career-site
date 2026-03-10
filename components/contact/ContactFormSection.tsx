"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type ContactFormData = {
  name: string;
  projectType: string;
  email: string;
  details: string;
};

type InlineInputProps = {
  name: keyof ContactFormData;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: React.HTMLInputTypeAttribute;
};

function InlineInput({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: InlineInputProps) {
  return (
    <span className="mx-2 inline-block min-w-50 border-b border-white/20 pb-1 transition-colors focus-within:border-white">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-[#698675] outline-none placeholder:text-white/10"
      />
    </span>
  );
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    projectType: "",
    email: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextareaInput = (
    e: React.FormEvent<HTMLTextAreaElement>,
  ): void => {
    const target = e.currentTarget;
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <form className="space-y-12">
            <div className="text-4xl font-bold uppercase leading-[1.3] sm:text-6xl lg:text-[45px]">
              <div className="flex flex-wrap items-end">
                <span>HELLO, MY NAME IS</span>
                <InlineInput
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span>AND I&apos;M</span>
              </div>

              <div className="mt-3 flex flex-wrap items-end">
                <span>LOOKING FOR</span>
                <InlineInput
                  name="projectType"
                  placeholder="TYPE OF PROJECT"
                  value={formData.projectType}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-3 flex flex-wrap items-end">
                <span>YOU CAN REACH ME AT</span>
                <InlineInput
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                />
              </div>

              <div className="mt-3">
                <span>HERE ARE SOME DETAILS:</span>
              </div>
            </div>

            <div className="mt-8 border-b border-white/10 pb-4">
              <textarea
                name="details"
                placeholder="TELL ME ABOUT THE VISION..."
                value={formData.details}
                onChange={handleChange}
                onInput={handleTextareaInput}
                rows={1}
                className="w-full resize-none overflow-hidden bg-transparent text-4xl font-bold tracking-[-0.04em] text-[#698675] outline-none placeholder:text-white/10 focus:text-[#698675] sm:text-6xl"
              />
            </div>

            <div className="flex flex-col gap-10 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="group flex items-center gap-6">
                <span className="text-xl font-bold uppercase tracking-widest transition group-hover:text-white/70">
                  Send Message
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#698675] transition group-hover:scale-110 group-hover:border-white">
                  <ArrowRight className="h-6 w-6 text-[#698675]" />
                </div>
              </button>

              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-right">
                  Or email directly
                </p>
                <a
                  href="mailto:info@lyoldndebele.com"
                  className="block text-lg font-medium text-[#698675] transition hover:text-white sm:text-right"
                >
                  info@lyoldndebele.com
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
