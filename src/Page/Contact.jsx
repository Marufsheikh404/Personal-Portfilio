import { useForm } from "react-hook-form";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import Swal from "sweetalert2";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your mail has been sent successfully!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <section className="min-h-screen w-full bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-12">
            <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl gap-12">
                {/* Left Side - Contact Info */}
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">Contact Information</h2>
                    <p className="text-gray-400 leading-relaxed">
                        We’d love to hear from you! Whether it’s a question, feedback, or just saying hi —
                        feel free to reach out anytime.
                    </p>

                    <div className="flex flex-col gap-6 mt-6">
                        {/* Phone */}
                        <div className="flex items-center gap-6 p-5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] transition">
                            <div className="bg-red-500 p-3 rounded-full inline-flex items-center justify-center">
                                <FiPhoneCall className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Contact on Phone</h3>
                                <p className="text-gray-400">01719199642</p>
                            </div>
                        </div>

                        {/* Mail */}
                        <div className="flex items-center gap-6 p-5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] transition">
                            <div className="bg-red-500 p-3 rounded-full inline-flex items-center justify-center">
                                <IoMailOpenOutline className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Contact on Mail</h3>
                                <p className="text-gray-400">marufsheikh802@gmail.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-6 p-5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] transition">
                            <div className="bg-red-500 p-3 rounded-full inline-flex items-center justify-center">
                                <LuMapPin className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Contact Address</h3>
                                <p className="text-gray-400">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex-1 flex flex-col gap-5 bg-[#1c1c1c] p-8 rounded-xl shadow-xl"
                >
                    <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>

                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2"
                            {...register("name", { required: "Name is required" })}
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2"
                            {...register("email", { required: "Email is required" })}
                        />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Message subject"
                            className="w-full bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2"
                            {...register("subject")}
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            className="w-full bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2 h-32 resize-none"
                            {...register("message")}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
