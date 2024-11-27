'use client'
import { ParallaxProvider as PProvider } from "react-scroll-parallax"

const ParallaxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <PProvider>
            {children}
        </PProvider>
    )
}

export default ParallaxProvider