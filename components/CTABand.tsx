import Button from "./Button";

export default function CTABand({
  heading,
  buttonLabel,
  buttonHref,
}: {
  heading: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="bg-navy text-ivory py-16">
      <div className="container-wrap flex flex-wrap justify-between items-center gap-8">
        <h2 className="font-serif text-[1.8rem] md:text-[2.1rem] max-w-[18ch]">{heading}</h2>
        <Button href={buttonHref} variant="solid">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
