const markup =
  '<div class="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3"><div class="flex items-center gap-3"><button aria-label="Back to top" class="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink shadow-lift transition-all hover:-translate-y-0.5 translate-y-0 opacity-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up h-5 w-5" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button><button data-chat-trigger aria-label="Open chat" aria-expanded="false" class="relative grid h-14 w-14 place-items-center rounded-full bg-brand text-ink shadow-glow transition-transform hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-6 w-6" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg><span class="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-brand bg-ink"></span></button></div></div>';

export default function FloatingActions() {
  return (
    <div
      className="source-fragment"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
