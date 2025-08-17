import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { poppins } from '../ui/fonts';


const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2 mr-3 md:mr-0'>
        <Image src={'/camhieplong.svg'} width={40} height={40} alt='brand'/>
        <p className='text-xl lg:font-black md:font-bold md:text-3xl font-poppins dark:text-slate-100'>CamHiepLong</p>
    </Link>
  )
}

export default Logo 