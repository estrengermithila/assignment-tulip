import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-[url(./src/assets/funding.png)] w-full h-screen bg-no-repeat bg-cover bg-center absolute top-0 left-0 -z-10'>
            <div className='bg-black/50 w-full min-h-screen'>
                <div className='w-full min-h-screen flex items-center justify-center'>
                    <div className='w-[400px] min-h-[250px] bg-white p-8'>
                        <form className='w-full'>
                            <div className='space-y-5'>
                                <div className='w-full'>
                                    <input type="email" placeholder='Email' className='w-full border border-slate-400 pl-4 py-2'/>
                                </div>
                                <div className='w-full'>
                                    <input type="password" placeholder='Password' className='w-full border border-slate-400 pl-4 py-2'/>
                                </div>
                            </div>
                            <div className='w-full mt-4 text-right'>
                                <Link className='text-sm underline'>Forget Password</Link>
                            </div>
                            <div className='w-full mt-5'>
                                <button className='w-full bg-blue-600 text-white font-semibold py-2'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;