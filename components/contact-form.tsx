"use client";

import { useState, type FormEvent } from "react";
import type { Language } from "@/lib/i18n";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/fydrych.robert.w@gmail.com";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({ language }: { language: Language }) {
  const pl = language === "pl";
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_honey")) {
      form.reset();
      setStatus("success");
      return;
    }

    formData.append("_subject", "New message from //RF Platform");
    formData.append("_template", "table");
    setStatus("sending");

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null) as { success?: boolean | string } | null;

      if (!response.ok || result?.success === false || result?.success === "false") {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      onInput={() => {
        if (status === "success" || status === "error") setStatus("idle");
      }}
    >
      <div className="contact-form-field">
        <label htmlFor={`contact-name-${language}`}>
          <span>{pl ? "Imię lub nick" : "Name or nickname"}</span>
          <span>{pl ? "Opcjonalnie" : "Optional"}</span>
        </label>
        <input
          id={`contact-name-${language}`}
          name="name"
          type="text"
          autoComplete="name"
          maxLength={80}
          placeholder={pl ? "Jak mam się do Ciebie zwracać?" : "How should I address you?"}
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`contact-email-${language}`}>
          <span>E-mail</span>
          <span>{pl ? "Wymagany" : "Required"}</span>
        </label>
        <input
          id={`contact-email-${language}`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          maxLength={160}
          placeholder="name@example.com"
          required
        />
      </div>

      <div className="contact-form-field contact-form-field-message">
        <label htmlFor={`contact-message-${language}`}>
          <span>{pl ? "Wiadomość" : "Message"}</span>
          <span>{pl ? "Wymagana" : "Required"}</span>
        </label>
        <textarea
          id={`contact-message-${language}`}
          name="message"
          rows={7}
          minLength={10}
          maxLength={3000}
          placeholder={pl ? "Napisz kilka słów o projekcie lub pomyśle..." : "Tell me a little about your project or idea..."}
          required
        />
      </div>

      <label className="contact-form-honey" aria-hidden="true">
        Website
        <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-form-footer">
        <button type="submit" disabled={status === "sending"}>
          <span>{status === "sending" ? (pl ? "Wysyłanie..." : "Sending...") : (pl ? "Wyślij wiadomość" : "Send message")}</span>
          <span aria-hidden="true">↗</span>
        </button>
        <p>
          {pl
            ? "Podane dane zostaną użyte wyłącznie do odpowiedzi. Formularz korzysta z usługi FormSubmit."
            : "Your details will only be used to reply. This form is delivered through FormSubmit."}
        </p>
      </div>

      <p
        className={`contact-form-status${status === "success" ? " is-success" : status === "error" ? " is-error" : ""}`}
        aria-live="polite"
      >
        {status === "success"
          ? (pl ? "Dziękuję. Wiadomość została wysłana." : "Thank you. Your message has been sent.")
          : status === "error"
            ? (pl ? "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę." : "The message could not be sent. Please try again in a moment.")
            : ""}
      </p>
    </form>
  );
}
