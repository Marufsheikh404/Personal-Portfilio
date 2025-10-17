import { useForm } from "react-hook-form";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import Swal from "sweetalert2";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Mail Has Been Send Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <section className="bg-[#000000d4]">
            <div className="flex flex-col lg:flex-row justify-center min-h-screen w-full bg-black text-white px-6 lg:px-20 py-12 gap-12">
                {/* Contact Info Section */}
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">Contact Information</h2>
                    <p className="text-gray-400 leading-relaxed">
                        We’d love to hear from you! Whether it’s a question, feedback, or just saying hi, feel free to contact us anytime.

                    </p>

                    <div className="flex flex-col gap-4">
                        {/* Phone Card */}
                        <div className="flex items-center gap-6 bg-gray-900 p-6 rounded-xl shadow-lg">
                            <div className="bg-red-500 p-3 rounded-full inline-flex items-center justify-center text-white">
                                <FiPhoneCall className="text-2xl" />
                            </div>
                            <div className="leading-7">
                                <h3 className="font-bold text-xl">Contact On Phone</h3>
                                <p>01719199642</p>
                            </div>
                        </div>

                        {/* Mail Card */}
                        <div className="flex items-center gap-6 bg-gray-900 p-6 rounded-xl shadow-lg">
                            <div className="bg-red-500 p-3 rounded-full inline-flex items-center justify-center text-white">
                                <IoMailOpenOutline className="text-2xl" />
                            </div>
                            <div className="leading-7">
                                <h3 className="font-bold text-xl">Contact On Mail</h3>
                                <p>www.marufsheikh802@gmail.com</p>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="flex items-center gap-6 bg-gray-900 p-6 rounded-xl shadow-lg">
                            <div className="bg-red-500 p-3 rounded-full inline-flex items-center justify-center text-white">
                                <LuMapPin className="text-2xl" />
                            </div>
                            <div className="leading-7">
                                <h3 className="font-bold text-xl">Contact Address</h3>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="flex-1 flex flex-col gap-4 bg-gray-900 p-8 rounded-xl shadow-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2"
                            {...register("Name", {required:"name is reqire"})}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-bold mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2"
                            {...register("email")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-bold mb-1">Subject</label>
                        <input
                            type="text"
                            className="w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2"
                            {...register("subject")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-bold mb-1">Message</label>
                        <textarea
                            placeholder="Your message..."
                            className="w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2 h-32 resize-none"
                            {...register("message")}
                        />
                    </div>

                    <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-3 rounded-md transition-all">
                        Send Mail
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;