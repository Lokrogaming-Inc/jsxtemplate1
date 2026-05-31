import { Mail, Send, MessageSquare } from "lucide-react";
import config from "../data/json/config.json";

export default function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <Mail
            size={64}
            className="mx-auto mb-6 text-black"
          />

          <h1 className="text-5xl font-black text-black">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-black/70 max-w-2xl mx-auto">
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
            border-yellow-400
            shadow-xl
            shadow-yellow-400/10
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
              <label className="block text-yellow-300 font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  focus:border-yellow-300
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-yellow-300 font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  focus:border-yellow-300
                "
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-yellow-300 font-semibold mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  focus:border-yellow-300
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-yellow-300 font-semibold mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows="7"
                required
                placeholder="Tell us about your project..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  resize-none
                  transition
                  focus:border-yellow-300
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-yellow-400
                px-6
                py-3
                text-yellow-300
                transition
                hover:text-black
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-yellow-300
                  origin-left
                  scale-x-0
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
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

          <div className="bg-white/40 backdrop-blur rounded-2xl p-6">
            <MessageSquare
              size={28}
              className="mb-3"
            />

            <h3 className="font-bold text-lg">
              Fast Response
            </h3>

            <p className="text-black/70 mt-2">
              We usually reply within 24 hours.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur rounded-2xl p-6">
            <Mail
              size={28}
              className="mb-3"
            />

            <h3 className="font-bold text-lg">
              Direct Contact
            </h3>

            <p className="text-black/70 mt-2 break-all">
              {config.formsubmitEmail}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
