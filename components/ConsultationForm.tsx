"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

type FieldName = "name" | "phone" | "topic" | "message" | "consent";
type FormErrors = Partial<Record<FieldName, string>>;
const readField = (formData: FormData, key: FieldName): string => { const value = formData.get(key); return typeof value === "string" ? value.trim() : ""; };

export function ConsultationForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus("");
    const form = event.currentTarget; const formData = new FormData(form);
    const values = { name: readField(formData,"name"), phone: readField(formData,"phone"), topic: readField(formData,"topic"), message: readField(formData,"message"), consent: formData.get("consent") === "on" };
    const nextErrors: FormErrors = {};
    if (!values.name) nextErrors.name = "Укажите имя";
    if (!values.phone) nextErrors.phone = "Укажите номер телефона";
    if (!values.topic) nextErrors.topic = "Выберите направление";
    if (!values.message) nextErrors.message = "Опишите ситуацию";
    if (!values.consent) nextErrors.consent = "Подтвердите согласие на обработку персональных данных";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) { form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus(); return; }
    const message = ["Здравствуйте! Хочу записаться на юридическую консультацию.","",`Имя: ${values.name}`,`Телефон: ${values.phone}`,`Категория: ${values.topic}`,`Ситуация: ${values.message}`].join("\n");
    window.open(`${siteConfig.links.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setStatus("Открываем WhatsApp. Проверьте сообщение и нажмите «Отправить».");
  };

  return <form className="consultation-form" onSubmit={handleSubmit} noValidate>
    <div className="field-row">
      <label className={`field${errors.name ? " invalid" : ""}`}><span>Ваше имя</span><input type="text" name="name" autoComplete="name" required placeholder="Например, Алексей" aria-invalid={Boolean(errors.name)} onChange={() => setErrors((v)=>({...v,name:undefined}))}/><small className="field-error">{errors.name}</small></label>
      <label className={`field${errors.phone ? " invalid" : ""}`}><span>Телефон</span><input type="tel" name="phone" autoComplete="tel" required placeholder="+7 999 000-00-00" aria-invalid={Boolean(errors.phone)} onChange={() => setErrors((v)=>({...v,phone:undefined}))}/><small className="field-error">{errors.phone}</small></label>
    </div>
    <label className={`field${errors.topic ? " invalid" : ""}`}><span>Категория вопроса</span><select name="topic" required defaultValue="" aria-invalid={Boolean(errors.topic)} onChange={() => setErrors((v)=>({...v,topic:undefined}))}><option value="">Выберите направление</option><option>Арбитраж / бизнес</option><option>Наследство</option><option>Семейный спор</option><option>Жилищный / имущественный спор</option><option>Уголовное дело</option><option>Юридическое сопровождение бизнеса</option><option>Другое</option></select><small className="field-error">{errors.topic}</small></label>
    <label className={`field${errors.message ? " invalid" : ""}`}><span>Кратко опишите ситуацию</span><textarea name="message" rows={5} required placeholder="Что произошло, какие документы и сроки уже есть" aria-invalid={Boolean(errors.message)} onChange={() => setErrors((v)=>({...v,message:undefined}))}/><small className="field-error">{errors.message}</small></label>
    <label className={`consent-check${errors.consent ? " invalid" : ""}`}><input type="checkbox" name="consent" required aria-invalid={Boolean(errors.consent)} onChange={() => setErrors((v)=>({...v,consent:undefined}))}/><span>Согласен на обработку персональных данных и принимаю <Link href="/privacy">политику конфиденциальности</Link>.</span></label>
    <p className="form-status" role="status" aria-live="polite">{errors.consent ?? status}</p>
    <button className="button button-dark button-full" type="submit">Продолжить в WhatsApp <span aria-hidden="true">↗</span></button>
  </form>;
}
