import React, { useState } from 'react'
import TitleSection from '../components/TitleSection'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames'
import Link from 'next/link';
import { MdKeyboardArrowDown, MdOutlinePlayArrow } from 'react-icons/md'


const lists = [
    {
        question: 'Bagaimana alur pendaftaran kelas karyawan Universitas Mercu Buana Secara Online',
        answers: [
            'Pengisian awal data diri calon mahasiswa / i',
            'Dalam 1x24 jam tim UMB akan menghubungi calon mahasiswa / i',
            'Melengkapi data diri calon mahasiswa / i di halaman pendaftaran',
            'Tim UMB akan mengarahkan pada administrasi dan proses pembayaran',
            'Calon mahasiswa / i melakukan pembayaran',
            'Selamat, Anda telah terdaftar menjadi mahasiswa / i UMB',
        ]
    },
    {
        question: 'Dimana Lokasi Kampus Universitas Mercu Buana',
        answers: [
            'Kampus Meruya Jakarta Barat',
            'Kampus Menteng Jakarta Pusat',
            'Kampus Pejaten Jakarta Selatan'
        ]
    },
    // {
    //     q: 'Berapa biaya kuliah kelas karyawan Universitas Mercu Buana',
    //     a: [
    //         'ss'
    //     ]
    // },
    {
        question: 'Bagaimana jadwal kuliah kelas karyawan Universitas Mercu Buana',
        answers: [
            'Jadwal kuliah kelas karyawan UMB fleksibel dan dapat dipilih oleh Mahasiswa',
        ]
    },
    {
        question: 'Apakah biaya studi dapat diangsur',
        answers: [
            'Biaya studi kelas karyawan dapat diangsur. Untuk info selengkapnya Anda dapat menghubungi hotline kami di +62 815-1311-3331',
        ]
    }
]

const experiences = [
    {
        name: "Tektik Group",
        role: "Web Developer",
        url: "https://www.tektik.id",
        start: "January 2023",
        end: "Present",
        shortDescription: [
            "Created a website for showing the dashboard for client data",
            "Maintaining and Editing client website that already exist.",
            "I've also experience managed a small team that includes Frontend Developers, Designer, and Content Writer in Creative Team."
        ],
    },
    {
        name: "Instagram",
        role: "Content Creator",
        url: "https://www.mxindonesia.com",
        start: "May 2023",
        end: "Present",
        shortDescription: [
            "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
            "Over time, I have developed and shared over 50 projects using React on my channel.",
            "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
        ],
    },
    {
        name: "PT Max Solution Indonesia",
        role: "Web Developer [Intern]",
        url: "https://www.mxindonesia.com",
        start: "April 2022",
        end: "Desember 2022",
        shortDescription: [
            "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
            "Over time, I have developed and shared over 50 projects using React on my channel.",
            "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
        ],
    },
    {
        name: "Perpustakaan UMB",
        role: "Data Entry [Intern]",
        url: "https://lib.mercubuana.ac.id/id",
        start: "January 2022",
        end: "June 2022",
        shortDescription: [
            "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
            "Additionally, I secured sponsorships from reputable brands to support our events.",
            "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
        ],
    },
    {
        name: "Jakarta Creative Hub",
        role: "Web Developer [Intern]",
        url: "https://jakartacreativehub.jakarta.go.id/",
        start: "November 2019",
        end: "November 2020",
        shortDescription: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    }
];

const FAQ = () => {
    const [selected, setSelected] = useState(0)


    const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Item
            className={classNames(
                'mt-px overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 text-left',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    ));

    const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="flex text-base py-4 px-4 xl:px-5 font-medium bg-white-secondary border-[2px] shadow-md rounded-md data-[state=open]:text-primary-blue data-[state=open]:border-primary-blue data-[state=open]:font-semibold">
            <Accordion.Trigger
                className={classNames(
                    'group grid grid-cols-[10fr_1fr] text-left items-center w-full',
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <div className='flex justify-end'>
                <ChevronDownIcon
                    className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] scale-150 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden
                />
                </div>
            </Accordion.Trigger>
        </Accordion.Header>
    ));

    const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames(
                'data-[state=open]:animate-slideDown data-[state=open]:mb-[5rem] data-[state=closed]:animate-slideUp overflow-hidden',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className="py-[15px] px-3">{children}</div>
        </Accordion.Content>
    ));


    return (
        <div name='faq' className='primary-padding my-[10rem]'>
            <TitleSection
                title='FAQ'
            />

            <Accordion.Root type="single" defaultValue="item-1" collapsible className='mt-[5rem] xl:max-w-[70%] mx-auto flex flex-col gap-3'>
                {
                    lists.map((list, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`}>
                            <AccordionTrigger onClick={() => setSelected(i)} >
                                <span>{list.question}</span>
                            </AccordionTrigger>

                            <AccordionContent>
                                <ol className='text-base'>
                                    {
                                        lists[selected].answers.map((answer, i) => (
                                            <li key={i} className={`${lists[selected].answers.length > 2 ? 'list-decimal' : 'list-none'}  list-inside`}>{answer}</li>
                                        ))
                                    }
                                </ol>
                            </AccordionContent>

                        </AccordionItem>
                    ))
                }

                <AccordionItem value='5'>
                    <AccordionTrigger >
                        <span>Berapa biaya kuliah kelas karyawan Universitas Mercu Buana</span>
                    </AccordionTrigger>

                    <AccordionContent>
                        <div className='flex flex-col gap-6'>
                            <p>Besar biaya pendidikan tergantung kepada Jenjang Pendidikan dan Pendidikan terakhir Mahasiswa </p>
                            <div className='ml-8 flex flex-col gap-2'>
                                <p className='font-semibold text-lg -ml-8'>Program Sarjana (S1)</p>
                                <ul className='list-outside list-disc flex flex-col gap-4'>
                                    <li>Lulusan SMA / K <br />
                                        Uang pangkal: Rp 18.500.000-, <br />
                                        Uang kuliah per semester: Rp 9.360.000-,
                                    </li>
                                    <li>
                                        Lulusan D3/Politeknik/Akademi/Sederajat <br />
                                        Uang pangkal: Rp 18.500.000-, <br />
                                        Uang kuliah per semester: Rp 9.360.000-,
                                    </li>
                                </ul>
                            </div>

                            <div className='ml-8 flex flex-col gap-2'>
                                <p className='font-semibold text-lg -ml-8'>Program Pasca Sarjana (S2)</p>
                                <ul className='list-outside list-disc flex flex-col gap-4'>
                                    <li>Uang Pangkal: Rp 17.500.000-, </li>
                                    <li>Spp per semester: Rp 10.000.000-, </li>
                                    <li>Program magister akuntansi, magister teknik industri, magister teknik elektro, magister ilmu komunikasi <br />
                                        Uang pangkal: Rp 16.500.000-, <br />
                                        Spp per semester: Rp 8.200.000-,
                                    </li>
                                    <li>
                                        Program magister teknik sipil, magister teknik mesin <br />
                                        Uang pangkal: Rp 15.000.000-, <br />
                                        Spp per semester: Rp 8.500.000-,
                                    </li>
                                </ul>
                            </div>

                            <div className='ml-8 flex flex-col gap-2'>
                                <p className='font-semibold text-lg -ml-8'>Program Doktor (S3) Manajemen </p>
                                <ul className='list-outside list-disc flex flex-col gap-4'>
                                    <li>Semester 1: Rp. 26.000.000,- </li>
                                    <li>Semester 2: Rp. 23.000.000,- </li>
                                    <li>Semester 3: Rp. 23.000.000,- </li>
                                    <li>Semester 4: Rp. 23.000.000,- </li>
                                    <li>Semester 5: Rp. 23.000.000,- </li>
                                    <li>Semester 6: Rp. 23.000.000,- </li>
                                </ul>
                            </div>

                            <p>Informasi detail biaya kuliah kelas karyawan Anda dapat menghubungi tim UMB <span className='font-semibold text-primary-blue'>+62 815-1311-3331</span></p>
                        </div>
                    </AccordionContent>

                </AccordionItem>
            </Accordion.Root>
        </div>
    )
}

export default FAQ