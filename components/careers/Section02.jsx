export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Culture &amp; benefits
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                We take care of the people who take care of our clients.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart-pulse h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">Health, fully covered</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              Premium medical, dental and vision for you and your family.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-graduation-cap h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">$3,000 learning budget</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              Courses, certifications and conferences every year.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-laptop h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
                <path d="M20.054 15.987H3.946"></path>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">Hybrid &amp; remote</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              Work where you do your best work, with home-office stipend.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-tree-palm lucide-palmtree h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path>
                <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path>
                <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path>
                <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">28 days off</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              Plus your birthday and a winter shutdown week.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wallet h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">Profit sharing</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              Everyone shares in the company’s success.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plane h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">Global mobility</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              Work from any of our seven hubs for up to 8 weeks a year.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles lucide-stars h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">10% innovation time</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              For open source, research and side projects.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-coffee h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M10 2v2"></path>
                <path d="M14 2v2"></path>
                <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
                <path d="M6 2v2"></path>
              </svg>
            </span>
            <h3 className="mt-5 text-[18px]">Wellbeing</h3>
            <p className="mt-2 text-[14.5px] text-muted">
              Mental-health support, gym stipends and team retreats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
