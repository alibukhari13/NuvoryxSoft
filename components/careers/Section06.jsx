export default function Section06() {
  return (
    <section
      id="life"
      className="bg-white text-ink py-20 md:py-28 lg:py-32 relative"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Life at Nuvoryx
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Moments that make us.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          <div className="group overflow-hidden rounded-[22px] md:col-span-2 md:row-span-2">
            <img
              alt="Nuvoryx team moments"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/a65934e26383a6b352ca50a370e0bcc68e39a5130ac12ec12871a39d1b7ddf6b.jpg"
            />
          </div>
          <div className="group overflow-hidden rounded-[22px]">
            <img
              alt="Nuvoryx team moments"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/eb4e60b1c7a564112d3e8a2d57eae053b8f64841085a4c2a91e736790bed5781.jpg"
            />
          </div>
          <div className="group overflow-hidden rounded-[22px]">
            <img
              alt="Nuvoryx team moments"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/1c779ce8de1ee75565dee7aa908e931b94c0d1f3f89ded1ceb1a5f78a0b9f745.jpg"
            />
          </div>
          <div className="group overflow-hidden rounded-[22px] md:row-span-2">
            <img
              alt="Nuvoryx team moments"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/0a01c34d15def8cac5dbc804480ffc98afc43fb2987a38e3b4a0db71dd324583.jpg"
            />
          </div>
          <div className="group overflow-hidden rounded-[22px]">
            <img
              alt="Nuvoryx team moments"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/533ed5199e62fda4057bb5b179673bd29bfc34d7527a96435d00de0b035ea9e7.jpg"
            />
          </div>
          <div className="group overflow-hidden rounded-[22px] col-span-2 md:col-span-1">
            <img
              alt="Nuvoryx team moments"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/d8608e0361380437e6f941efd22f8b6ac5b932f5376e0165d2af82946e66801c.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
