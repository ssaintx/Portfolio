import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import { email } from "../data/index";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const INITIAL_STATE = Object.fromEntries(
    Object.keys(email.contact.form).map((input) => [input, ""])
);

const Email = () => {
    const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
    const [form, setForm] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
    ) => {
        if (e === undefined) return;
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
        if (e === undefined) return;
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_szptega',
                'template_ltm9m0x',
                {
                    form_name: form.name,
                    to_name: 'Lazizbek',
                    from_email: form.email,
                    to_email: 'saintx.git@gmail.com',
                    message: form.message,
                },
                'W8tAzC5CNen6MUdYa'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm(INITIAL_STATE);
                },
                (error: any) => {
                    setLoading(false);

                    console.log(error);
                    alert("Something went wrong.");
                }
            );
    };

    return (
        <div
            className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
        >

            <form
                // @ts-expect-error
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                {Object.keys(email.contact.form).map((input) => {
                    const { span, placeholder } =
                        email.contact.form[input as keyof typeof email.contact.form];
                    const Component = input === "message" ? "textarea" : "input";

                    return (
                        <label key={input} className="flex flex-col">
                            <span className="mb-4 font-medium text-white">{span}</span>
                            <Component
                                type={input === "email" ? "email" : "text"}
                                name={input}
                                value={form[`${input}`]}
                                onChange={handleChange}
                                placeholder={placeholder}
                                className="bg-black-100 border border-purple placeholder:white-100 rounded-lg px-4 py-3 text-white outline-none"
                                {...(input === "message" && { rows: 7 })}
                            />
                        </label>
                    );
                })}
                <MagicButton type="submit" title={loading ? "Sending..." : "Send"} icon={<FaLocationArrow />} position="right" />
            </form>


        </div>
    );
};

export default Email;
