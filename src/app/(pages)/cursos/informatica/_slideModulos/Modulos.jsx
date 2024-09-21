'use client'
const OPTIONS = { dragFree: true, loop: true }


import EmblaCarousel from './EmblaCarousel'


export default function Modulo({ slideObj }) {
    return (


        <EmblaCarousel slides={slideObj} options={OPTIONS} />

    )


}