import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { VscInfo } from "react-icons/vsc";


type FormProps = {
    isRequest: boolean;
}

export default function Field({isRequest}: FormProps){

    return(
        <>  
            {!isRequest ? 
            <div>
                <p className="text-black text-xl font-bold">Welcome back!</p>
                <p className="text-slate-500 font-normal text-md">Sign in to your account</p>
             </div>
            :
            <div className="flex items-center rounded-sm p-1 bg-amber-50 border-1 border-solid border-amber-200 gap-2">
                <VscInfo color="#b45309" size={40}/>
                <p className="text-xs text-amber-800">New accounts require approval from an IT Administrator before signing and submission access is enabled in SignDesk.</p>
            </div>
            }
            <form className="flex flex-col h-full gap-10 w-full">
                <div className="flex flex-col gap-3">
                    {isRequest && 
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col ">
                            <label className="text-sm" htmlFor="fullname">Full Name</label>
                            <input className="w-full border-1 border-solid border-slate-300 outline-none rounded-md p-2 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" id="fullname" type="text" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm" htmlFor="fullname">Employee ID</label>
                            <input className="w-full border-1 border-solid border-slate-300 outline-none rounded-md p-2 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" type="text" />
                        </div>
                    </div>}
                    {isRequest  &&
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col ">
                            <label className="text-sm" htmlFor="fullname">Job Title</label>
                            <input className="w-full border-1 border-solid border-slate-300 outline-none rounded-md p-2 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" id="fullname" type="text" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm" htmlFor="fullname">Department</label>
                            <input className="w-full border-1 border-solid border-slate-300 outline-none rounded-md p-2 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" type="text" />
                        </div>
                    </div>
                    }
                    <div className="flex flex-col gap-2">
                        <label className="text-sm" htmlFor="username">Email</label>
                        <div className="flex items-center gap-2 border-1 border-solid border-slate-300 rounded-md p-2 bg-slate-50 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                            <HiOutlineMail color="#94a3b8" size={20} />
                            <input className="outline-none bg-transparent flex-1 placeholder:text-slate-400" type="text" id="username" placeholder="name@example.com"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm" htmlFor="password">Password</label>
                        <div className="flex items-center gap-2 border-1 border-solid border-slate-300 rounded-md p-2 bg-slate-50 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                            <FiLock color="#94a3b8" size={20} />
                            <input className="outline-none bg-transparent flex-1 placeholder:text-slate-400" type='password' id="password" placeholder="Enter your password"></input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center gap-2">
                    <button className="bg-blue-500 rounded-md py-2 text-white">
                        <p>Sign In</p>
                    </button>
                    <p className="text-sm">Don't have an account? <a>Request new account</a></p>
                </div>
                
            </form>
        </>
    )
}