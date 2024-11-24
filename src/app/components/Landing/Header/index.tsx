import { headerListItems } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <section className='min-w-full flex p-1 pl-3 pr-3 items-center justify-between'>
            <div className='w-auto flex gap-2'>
                {
                    headerListItems.map((item, index) => (
                        <Link className='p-2 bg-[#FFFFFF0D] backdrop:blur-lg rounded-full border-2 pl-4 pr-4 border-[#FFFFFF0D]' href={item.link} key={index}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>

            <div>
                <Image
                    src={`/logo.svg`}
                    width={100}
                    height={100}
                    alt='Conexus Logo'
                />
            </div>
        </section>
    )
}

export default Header