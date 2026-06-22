interface HeroButton {
  label: string;
  variant: "primary" | "secondary";
  href?: string;
}

interface HeroSectionProps {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  buttons?: HeroButton[];
  objectFit?: "cover" | "contain";
}

export default function HeroSection({
  image,
  alt,
  title,
  subtitle,
  buttons = [],
  objectFit = "cover",
}: HeroSectionProps) {
  return (
    <section className="relative h-[400px] md:h-[600px] overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-6 rounded-3xl">
      <div className="absolute inset-0 bg-black">
        <img
          src={image}
          alt={alt}
          className={`w-full h-full opacity-100 ${
            objectFit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/90 text-lg mb-8 max-w-2xl">{subtitle}</p>
        )}

        {buttons.length > 0 && (
          <div className="flex gap-4 flex-wrap">
            {buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href ?? "#"}
                className={
                  btn.variant === "primary"
                    ? "bg-neon-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition duration-300 transform hover:scale-105"
                    : "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300"
                }
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
