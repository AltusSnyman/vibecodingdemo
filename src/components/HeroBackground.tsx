'use client';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 h-full w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/assets/videos/hero.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
}
