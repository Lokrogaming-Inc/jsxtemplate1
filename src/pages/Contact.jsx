import { useState } from "react";
import { Mail, Send, MessageSquare } from "lucide-react";
import config from "../data/json/config.json";

export default function Contact() {
  const [isValid, setIsValid] = useState(false);

  const handleInput = (e) => {
    setIsValid(e.currentTarget.form.checkValidity());
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <Mail
            size={64}
            className="mx-auto mb-6 text-white"
          />

          <h1 className="text-5xl font-black text-white">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Have a question, project idea or partnership request?
            We'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div
          className="
            bg-[#001111]
            rounded-3xl
            border
            border-blue-600
            shadow-2xl
            shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_40px_rgba(6,182,212,0.6),0_0_60px_rgba(168,85,247,0.4)]
            p-8
            sm:p-10
          "
        >
          <form
            action={`https://formsubmit.co/${config.formsubmitEmail}`}
            method="POST"
            className="space-y-6"
          >
            {/* Spam Protection */}
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />
            <input
  type="hidden"
  name="_next"
  value={'${window.location.href}/success'}
/>
            <input
              type="hidden"
              name="_subject"
              value="New Contact Request"
            />

            {/* Name */}
            <div>
              <label className="flex flex-row gap-2 text-blue-600 font-semibold mb-2">
                Name <p className="text-pink-800">*</p>
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                onInput={handleInput}
                className="
                  w-full
                  rounded-xl
                  border
                  border-blue-600/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  duration-150
                  ease-in-out
                  focus:border-blue-300
                  focus:shadow-lg
                  focus:shadow-violet-800
                  hover:shadow-lg
                  hover:shadow-violet-600
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex flex-row gap-2 text-blue-600 font-semibold mb-2">
                Email <p className="text-pink-800">*</p>
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                onInput={handleInput}
                className="
                  w-full
                  rounded-xl
                  border
                  border-blue-600/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  duration-150
                  ease-in-out
                  focus:valid:border-blue-300
                  focus:invalid:border-pink-800
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                "
              />
            </div>

            {/* Subject */}
            <div>
              <label className="flex flex-row gap-2 text-blue-600 font-semibold mb-2">
                Subject <p className="text-pink-800">*</p>
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Project Inquiry"
                onInput={handleInput}
                className="
                  w-full
                  rounded-xl
                  border
                  border-blue-600/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  duration-150
                  ease-in-out
                  focus:border-blue-300/20
                  focus:shadow-lg
                  focus:shadow-violet-800
                  hover:shadow-lg
                  hover:shadow-violet-600
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="flex flex-row gap-2 text-blue-600 font-semibold mb-2">
                Message <p className="text-pink-800">*</p>
              </label>

              <textarea
                name="message"
                rows="7"
                required
                placeholder="Tell us about your project..."
                onInput={handleInput}
                className="
                  w-full
                  rounded-xl
                  border
                  border-blue-600/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  resize-none
                  transition
                  duration-300
                  ease-in-out
                  focus:border-blue-300/20
                  focus:shadow-lg
                  focus:shadow-violet-800
                  hover:shadow-lg
                  hover:shadow-violet-600
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                  
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                px-6
                py-3
                transition
                duration-150
                ease-in-out
                text-lg
                font-bold
                enabled:bg-sky-700
                enabled:text-white
                enabled:border-sky-700
                enabled:shadow-lg
                enabled:shadow-sky-700
                hover:enabled:text-blue-300
                hover:enabled:shadow-[0_10px_40px_rgba(59,130,246,0.35),0_0_70px_rgba(34,211,238,0.25),0_0_100px_rgba(168,85,247,0.2)]
                hover:disabled:border
                hover:disabled:border-pink-700 
                hover:disabled:shadow-md
                hover:disabled:shadow-pink-700
                disabled:cursor-not-allowed
                disabled:shadow-lg
                disabled:shadow-black
                disabled:bg-slate-800
                disabled:text-slate-300
                disabled:border-slate-900
              "
            >
              <span
                className="
                  enabled:absolute
                  enabled:inset-0
                  enabled:bg-blue-900
                  enabled:origin-left
                  enabled:scale-x-0
                  enabled:transition-transform
                  enabled:duration-300
                  enabled:group-hover:scale-x-100
                "
              />

              <span className="relative z-10 flex items-center gap-2">
                <Send size={18} />
                Send Message
              </span>
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10">

          <div className="bg-blue-900/40 backdrop-blur rounded-2xl p-6">
            <MessageSquare
              size={28}
              className="mb-3 text-blue-700"
            />

            <h3 className="font-bold text-lg text-white">
              Fast Response
            </h3>

            <p className="text-blue-400/70 mt-2">
              We usually reply within 24 hours.
            </p>
          </div>

          <div className="bg-blue-900/40 backdrop-blur rounded-2xl p-6">
            <Mail
              size={28}
              className="mb-3 text-blue-700"
            />

            <h3 className="font-bold text-lg text-white">
              Direct Contact
            </h3>

            <p className="text-blue-400/70 mt-2 break-all">
              {config.formsubmitEmail}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
