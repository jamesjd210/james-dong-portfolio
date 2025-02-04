import Image from "next/image"
export default function About() {
    return (
        <section className="bg-background py-16 px-8 lg:px-24 text-foreground">
        {/* Hero Section */}
            <div className="mx-auto text-center max-w-5xl">
                <h1 className="text-4xl font-bold mb-6 lg:text-5xl">
                About Me
                </h1>
                <p className="text-lg lg:text-xl text-brown-500 leading-relaxed">
                Hi! I&apos;m James Dong, a passionate developer specializing in building custom apps to tackle the slow parts of life. I love building out ideas pop in my mind and helping others build out theirs. Let me tell you a little more about my journey!
                </p>
            </div>

            {/* Image and Bio */}
            <div className="mt-12 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2">
                <Image
                    src="/static/pictures/JamesDong.webp"
                    alt="James Dong"
                    width={300}
                    height={600}
                    className="rounded-3xl mx-auto"
                    priority
                />
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
                <h2 className="text-3xl font-semibold mb-4 text-brown-700">A Little About Me</h2>
                <p className="text-lg text-brown-500 leading-relaxed">
                    I&apos;ve always been fascinated with technology and solving problems through code. With a background in computer science and a strong desire to constantly build and learn, I&apos;ve developed a deep expertise Python and JavaScipt. Outside of work, I enjoy 3D Printing, Off Roading, and Running.
                </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-semibold text-center text-brown-700 mb-8">Check Out Some of my Skills!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div className="bg-tan-500 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2 text-deepBlue-500">Custom App Building</h3>
                        <p className="text-brown-500">Python, Java, React, Angular</p>
                    </div>
                    <div className="bg-tan-500 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2 text-deepBlue-500">Entrepreneurship</h3>
                        <p className="text-brown-500">Oldboy Sim Racing, Dropshipping</p>
                    </div>
                    <div className="bg-tan-500 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2 text-deepBlue-500">Hands on Hardware</h3>
                        <p className="text-brown-500">Arduino, 3D Printing, CAD Modeling</p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-semibold text-brown-700 mb-4">Let&apos;s Connect</h2>
                <p className="text-lg text-brown-500 mb-6">
                I&apos;m always excited to work on new projects and collaborate with other developers. Feel free to reach out!
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-deepBlue-500 text-white px-6 py-3 rounded-md font-semibold transition hover:bg-deepBlue-600"
                    >
                    Contact Me
                </a>
            </div>
        </section>
    );
}