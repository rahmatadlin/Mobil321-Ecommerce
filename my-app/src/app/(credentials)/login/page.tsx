import Link from "next/link";
import ClientFlashComponent from "@/components/ClientFlashComponent";
import { doLogin } from "./action";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-red-800">
      <ClientFlashComponent />

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 ">
            Selamat datang di platform ecommerce eksklusif kami, tempat di mana
            keinginan Anda untuk memiliki mobil impian dapat menjadi kenyataan!
            Dengan bangga mempersembahkan layanan jual beli mobil online
            terbaik, kami menghadirkan pengalaman berbelanja yang mulus dan
            memuaskan bagi para pecinta otomotif.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form action={doLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <Link href="/register">
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
