"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

const Form = () => {
  const t = useTranslations("Form");

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold">
          {t("GetInTouch").split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-primary">
            {t("GetInTouch").split(" ").slice(2).join(" ")}
          </span>
        </h2>
        <p className="mt-2 text-zinc-400">{t("IWillGetInTouch")}</p>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        rel="noopener noreferrer"
        method="POST"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        aria-labelledby="form-title"
      >
        <input
          type="hidden"
          name="access_key"
          value="bfbdf089-247e-4db6-8f78-839865c0c63d"
        />
        <input type="hidden" name="from_name" value="Portfolio Contact" />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="sr-only">
            {t("FullName")}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={t("FullName")}
            required
            autoComplete="name"
            className="bg-background/50 focus:border-primary rounded-xl border border-white/10 p-4 transition-all outline-none placeholder:text-zinc-600"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="sr-only">
            {t("EmailAddress")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t("EmailAddress")}
            required
            autoComplete="email"
            className="bg-background/50 focus:border-primary rounded-xl border border-white/10 p-4 transition-all outline-none placeholder:text-zinc-600"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="sr-only">
            {t("PhoneNumber")}
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder={t("PhoneNumber")}
            autoComplete="tel"
            className="bg-background/50 focus:border-primary rounded-xl border border-white/10 p-4 transition-all outline-none placeholder:text-zinc-600"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="sr-only">
            {t("Subject")}
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder={t("Subject")}
            className="bg-background/50 focus:border-primary rounded-xl border border-white/10 p-4 transition-all outline-none placeholder:text-zinc-600"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="sr-only">
            {t("YourMessage")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("DescribeProject")}
            rows={5}
            required
            className="bg-background/50 focus:border-primary w-full resize-none rounded-xl border border-white/10 p-4 transition-all outline-none placeholder:text-zinc-600"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-primary hover:bg-primary/80 mx-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-105 active:scale-95 md:w-fit"
          >
            {t("SendMessage")}
            <Send size={18} aria-hidden="true" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
