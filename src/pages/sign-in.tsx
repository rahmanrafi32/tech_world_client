import {BsGithub} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";

const SignIn = () => {
    const router = useRouter();
    const {callbackUrl} = router.query
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered"/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-4'}>
                            <p>Or</p>
                            <p>Sign in with</p>
                            <div className={'flex justify-center gap-7'}>
                                <BsGithub className={'text-5xl cursor-pointer'} onClick={() => signIn("github", {
                                    callbackUrl: callbackUrl as string || 'https://tech-world-client.vercel.app'
                                })}/>
                                <FcGoogle className={'text-5xl cursor-pointer'} onClick={() => signIn("google", {
                                    callbackUrl: callbackUrl as string || 'https://tech-world-client.vercel.app'
                                })}/>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
