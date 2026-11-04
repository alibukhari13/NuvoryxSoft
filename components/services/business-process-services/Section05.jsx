export default function Section05() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 items-center text-center">
          <div className="max-w-3xl mx-auto">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Tech stack
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Tools we trust.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="group/mq relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div
            className="flex w-max animate-marquee will-change-transform group-hover/mq:[animation-play-state:paused]"
            style={{ animationDuration: "50s" }}
          >
            <div
              className="flex shrink-0 items-center"
              style={{ gap: "14px", paddingRight: "14px" }}
            >
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#0052CC" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Jira"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"></path>
                  </svg>
                </span>
                Jira
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#5E6AD2" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Linear"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"></path>
                  </svg>
                </span>
                Linear
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <span
                    role="img"
                    aria-label="Slack"
                    className="inline-flex shrink-0 items-center justify-center [&amp;>svg]:h-full [&amp;>svg]:w-full h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    style={{ filter: "brightness(0)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#e01e5a"
                        d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z"
                      ></path>
                      <path
                        fill="#36c5f0"
                        d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z"
                      ></path>
                      <path
                        fill="#2eb67d"
                        d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z"
                      ></path>
                      <path
                        fill="#ecb22e"
                        d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z"
                      ></path>
                    </svg>
                  </span>
                </span>
                Slack
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Confluence"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"></path>
                  </svg>
                </span>
                Confluence
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="GitHub"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </span>
                GitHub
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Notion"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                  </svg>
                </span>
                Notion
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Zendesk"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"></path>
                  </svg>
                </span>
                Zendesk
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#24A47F" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Greenhouse"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M16.279 7.13c0 1.16-.49 2.185-1.293 2.987-.891.891-2.184 1.114-2.184 1.872 0 1.025 1.65.713 3.231 2.295 1.048 1.047 1.694 2.43 1.694 4.034C17.727 21.482 15.187 24 12 24c-3.187 0-5.727-2.518-5.727-5.68 0-1.607.646-2.989 1.694-4.036 1.582-1.582 3.23-1.27 3.23-2.295 0-.758-1.292-.98-2.183-1.872-.802-.802-1.293-1.827-1.293-3.03 0-2.318 1.895-4.19 4.212-4.19.446 0 .847.067 1.181.067.602 0 .914-.268.914-.691 0-.245-.112-.557-.112-.891 0-.758.647-1.382 1.427-1.382s1.404.646 1.404 1.426c0 .825-.647 1.204-1.137 1.382-.401.134-.713.312-.713.713 0 .758 1.382 1.493 1.382 3.61zm-.446 11.19c0-2.206-1.627-3.99-3.833-3.99-2.206 0-3.833 1.784-3.833 3.99 0 2.184 1.627 3.989 3.833 3.989 2.206 0 3.833-1.808 3.833-3.99zM14.518 7.086c0-1.404-1.136-2.562-2.518-2.562S9.482 5.682 9.482 7.086 10.618 9.65 12 9.65s2.518-1.159 2.518-2.563z"></path>
                  </svg>
                </span>
                Greenhouse
              </span>
            </div>
            <div
              className="flex shrink-0 items-center"
              aria-hidden="true"
              style={{ gap: "14px", paddingRight: "14px" }}
            >
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#0052CC" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Jira"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"></path>
                  </svg>
                </span>
                Jira
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#5E6AD2" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Linear"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"></path>
                  </svg>
                </span>
                Linear
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <span
                    role="img"
                    aria-label="Slack"
                    className="inline-flex shrink-0 items-center justify-center [&amp;>svg]:h-full [&amp;>svg]:w-full h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    style={{ filter: "brightness(0)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#e01e5a"
                        d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z"
                      ></path>
                      <path
                        fill="#36c5f0"
                        d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z"
                      ></path>
                      <path
                        fill="#2eb67d"
                        d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z"
                      ></path>
                      <path
                        fill="#ecb22e"
                        d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z"
                      ></path>
                    </svg>
                  </span>
                </span>
                Slack
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Confluence"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"></path>
                  </svg>
                </span>
                Confluence
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="GitHub"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </span>
                GitHub
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Notion"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                  </svg>
                </span>
                Notion
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Zendesk"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"></path>
                  </svg>
                </span>
                Zendesk
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#24A47F" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Greenhouse"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M16.279 7.13c0 1.16-.49 2.185-1.293 2.987-.891.891-2.184 1.114-2.184 1.872 0 1.025 1.65.713 3.231 2.295 1.048 1.047 1.694 2.43 1.694 4.034C17.727 21.482 15.187 24 12 24c-3.187 0-5.727-2.518-5.727-5.68 0-1.607.646-2.989 1.694-4.036 1.582-1.582 3.23-1.27 3.23-2.295 0-.758-1.292-.98-2.183-1.872-.802-.802-1.293-1.827-1.293-3.03 0-2.318 1.895-4.19 4.212-4.19.446 0 .847.067 1.181.067.602 0 .914-.268.914-.691 0-.245-.112-.557-.112-.891 0-.758.647-1.382 1.427-1.382s1.404.646 1.404 1.426c0 .825-.647 1.204-1.137 1.382-.401.134-.713.312-.713.713 0 .758 1.382 1.493 1.382 3.61zm-.446 11.19c0-2.206-1.627-3.99-3.833-3.99-2.206 0-3.833 1.784-3.833 3.99 0 2.184 1.627 3.989 3.833 3.989 2.206 0 3.833-1.808 3.833-3.99zM14.518 7.086c0-1.404-1.136-2.562-2.518-2.562S9.482 5.682 9.482 7.086 10.618 9.65 12 9.65s2.518-1.159 2.518-2.563z"></path>
                  </svg>
                </span>
                Greenhouse
              </span>
            </div>
          </div>
        </div>
        <div className="group/mq relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div
            className="flex w-max animate-marquee will-change-transform group-hover/mq:[animation-play-state:paused]"
            style={{ animationDirection: "reverse", animationDuration: "50s" }}
          >
            <div
              className="flex shrink-0 items-center"
              style={{ gap: "14px", paddingRight: "14px" }}
            >
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#24A47F" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Greenhouse"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M16.279 7.13c0 1.16-.49 2.185-1.293 2.987-.891.891-2.184 1.114-2.184 1.872 0 1.025 1.65.713 3.231 2.295 1.048 1.047 1.694 2.43 1.694 4.034C17.727 21.482 15.187 24 12 24c-3.187 0-5.727-2.518-5.727-5.68 0-1.607.646-2.989 1.694-4.036 1.582-1.582 3.23-1.27 3.23-2.295 0-.758-1.292-.98-2.183-1.872-.802-.802-1.293-1.827-1.293-3.03 0-2.318 1.895-4.19 4.212-4.19.446 0 .847.067 1.181.067.602 0 .914-.268.914-.691 0-.245-.112-.557-.112-.891 0-.758.647-1.382 1.427-1.382s1.404.646 1.404 1.426c0 .825-.647 1.204-1.137 1.382-.401.134-.713.312-.713.713 0 .758 1.382 1.493 1.382 3.61zm-.446 11.19c0-2.206-1.627-3.99-3.833-3.99-2.206 0-3.833 1.784-3.833 3.99 0 2.184 1.627 3.989 3.833 3.989 2.206 0 3.833-1.808 3.833-3.99zM14.518 7.086c0-1.404-1.136-2.562-2.518-2.562S9.482 5.682 9.482 7.086 10.618 9.65 12 9.65s2.518-1.159 2.518-2.563z"></path>
                  </svg>
                </span>
                Greenhouse
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Zendesk"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"></path>
                  </svg>
                </span>
                Zendesk
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Notion"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                  </svg>
                </span>
                Notion
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="GitHub"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </span>
                GitHub
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Confluence"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"></path>
                  </svg>
                </span>
                Confluence
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <span
                    role="img"
                    aria-label="Slack"
                    className="inline-flex shrink-0 items-center justify-center [&amp;>svg]:h-full [&amp;>svg]:w-full h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    style={{ filter: "brightness(0)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#e01e5a"
                        d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z"
                      ></path>
                      <path
                        fill="#36c5f0"
                        d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z"
                      ></path>
                      <path
                        fill="#2eb67d"
                        d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z"
                      ></path>
                      <path
                        fill="#ecb22e"
                        d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z"
                      ></path>
                    </svg>
                  </span>
                </span>
                Slack
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#5E6AD2" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Linear"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"></path>
                  </svg>
                </span>
                Linear
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#0052CC" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Jira"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"></path>
                  </svg>
                </span>
                Jira
              </span>
            </div>
            <div
              className="flex shrink-0 items-center"
              aria-hidden="true"
              style={{ gap: "14px", paddingRight: "14px" }}
            >
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#24A47F" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Greenhouse"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M16.279 7.13c0 1.16-.49 2.185-1.293 2.987-.891.891-2.184 1.114-2.184 1.872 0 1.025 1.65.713 3.231 2.295 1.048 1.047 1.694 2.43 1.694 4.034C17.727 21.482 15.187 24 12 24c-3.187 0-5.727-2.518-5.727-5.68 0-1.607.646-2.989 1.694-4.036 1.582-1.582 3.23-1.27 3.23-2.295 0-.758-1.292-.98-2.183-1.872-.802-.802-1.293-1.827-1.293-3.03 0-2.318 1.895-4.19 4.212-4.19.446 0 .847.067 1.181.067.602 0 .914-.268.914-.691 0-.245-.112-.557-.112-.891 0-.758.647-1.382 1.427-1.382s1.404.646 1.404 1.426c0 .825-.647 1.204-1.137 1.382-.401.134-.713.312-.713.713 0 .758 1.382 1.493 1.382 3.61zm-.446 11.19c0-2.206-1.627-3.99-3.833-3.99-2.206 0-3.833 1.784-3.833 3.99 0 2.184 1.627 3.989 3.833 3.989 2.206 0 3.833-1.808 3.833-3.99zM14.518 7.086c0-1.404-1.136-2.562-2.518-2.562S9.482 5.682 9.482 7.086 10.618 9.65 12 9.65s2.518-1.159 2.518-2.563z"></path>
                  </svg>
                </span>
                Greenhouse
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Zendesk"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"></path>
                  </svg>
                </span>
                Zendesk
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Notion"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                  </svg>
                </span>
                Notion
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="GitHub"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </span>
                GitHub
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Confluence"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"></path>
                  </svg>
                </span>
                Confluence
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#05CF45" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <span
                    role="img"
                    aria-label="Slack"
                    className="inline-flex shrink-0 items-center justify-center [&amp;>svg]:h-full [&amp;>svg]:w-full h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    style={{ filter: "brightness(0)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#e01e5a"
                        d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z"
                      ></path>
                      <path
                        fill="#36c5f0"
                        d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z"
                      ></path>
                      <path
                        fill="#2eb67d"
                        d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z"
                      ></path>
                      <path
                        fill="#ecb22e"
                        d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z"
                      ></path>
                    </svg>
                  </span>
                </span>
                Slack
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#5E6AD2" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Linear"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"></path>
                  </svg>
                </span>
                Linear
              </span>
              <span
                className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
                style={{ "--brand-c": "#0052CC" }}
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Jira"
                    className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                    fill="currentColor"
                  >
                    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"></path>
                  </svg>
                </span>
                Jira
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
