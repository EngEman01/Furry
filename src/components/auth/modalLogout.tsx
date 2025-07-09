'use client'

import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation"
import { IoLogOut } from "react-icons/io5"
import { toast } from 'react-toastify';


const modalLogout = () => {

    const router = useRouter();
    const LodoutHandlar = async () => {

        try {
            await axios.get(`${DOMAIN}/api/users/logout`)
            router.replace('/')
            router.refresh()

        } catch (error: any) {
            toast.warning(error?.response?.data.message)
        }

    }

    return (
        <>
            <IoLogOut className='text-red-600 text-5xl cursor-pointer' onClick={LodoutHandlar} />
        </>
    )
}

export default modalLogout