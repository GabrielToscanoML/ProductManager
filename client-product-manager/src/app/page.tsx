import Image from "next/image";
import logo from "../../public/pm-logo.png";

export default function Login() {
  return (
    <main className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-8">
          <Image
            src={logo}
            alt="Product Manager Logo"
            className="w-full h-32"
          />
        </div>
        <section className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 h-12 rounded px-4 w-full focus:outline-none focus:border-brand-secondary"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 h-12 rounded px-4 w-full focus:outline-none focus:border-brand-secondary"
          />
          <button
            type="submit"
            className="w-full h-12 text-lg rounded bg-brand-secondary text-white hover:bg-brand-secondary-dark transition duration-200"
          >
            Log in
          </button>
        </section>
        <div className="my-6 text-center text-gray-500">Or</div>
        <section className="flex flex-col gap-4">
          <button
            type="button"
            className="w-full h-12 text-lg rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200"
          >
            Create new account
          </button>
        </section>
      </div>
    </main>
  );
}
