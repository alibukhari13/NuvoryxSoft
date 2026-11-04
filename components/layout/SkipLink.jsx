const markup =
  '<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:font-bold">Skip to content</a>';

export default function SkipLink() {
  return (
    <div
      className="source-fragment"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
