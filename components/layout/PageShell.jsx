import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import MobileMenu from "@/components/layout/MobileMenu";
import SiteFooter from "@/components/layout/SiteFooter";
import FloatingActions from "@/components/layout/FloatingActions";
import LandingInteractions from "@/components/layout/LandingInteractions";

export default function PageShell({ children }) {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <MobileMenu />
      <main id="main" tabIndex={-1} className="outline-none">
        <div className="animate-page">{children}</div>
      </main>
      <SiteFooter />
      <FloatingActions />
      <LandingInteractions />
    </>
  );
}
