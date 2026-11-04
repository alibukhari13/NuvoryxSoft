export default function Section04() {
  return (
    <section className="bg-paper text-ink py-16 md:py-20 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="flex items-center gap-4 rounded-[20px] bg-white p-6 shadow-soft">
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
              className="lucide lucide-graduation-cap h-8 w-8 text-forest"
              aria-hidden="true"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
            <div>
              <div className="font-display text-[26px] font-bold">8%</div>
              <div className="text-[13.5px] text-muted">
                of revenue invested in learning
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-[20px] bg-white p-6 shadow-soft">
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
              className="lucide lucide-recycle h-8 w-8 text-forest"
              aria-hidden="true"
            >
              <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
              <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
              <path d="m14 16-3 3 3 3"></path>
              <path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path>
              <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path>
              <path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path>
            </svg>
            <div>
              <div className="font-display text-[26px] font-bold">92%</div>
              <div className="text-[13.5px] text-muted">
                office waste diverted from landfill
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-[20px] bg-white p-6 shadow-soft">
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
              className="lucide lucide-heart-handshake h-8 w-8 text-forest"
              aria-hidden="true"
            >
              <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
            </svg>
            <div>
              <div className="font-display text-[26px] font-bold">12k</div>
              <div className="text-[13.5px] text-muted">
                volunteer hours in 2024
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-[20px] bg-white p-6 shadow-soft">
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
              className="lucide lucide-earth lucide-globe-2 h-8 w-8 text-forest"
              aria-hidden="true"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <div>
              <div className="font-display text-[26px] font-bold">30+</div>
              <div className="text-[13.5px] text-muted">nationalities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
