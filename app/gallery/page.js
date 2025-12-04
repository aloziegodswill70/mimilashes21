import GalleryGrid from "../../components/GalleryGrid";

export const metadata = {
  title: "Lash Gallery | MIMIlashes Kigali",
  description: "A showcase of eyelash extensions done professionally by MIMIlashes Kigali.",
};

export default function GalleryPage() {
  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto">
      <GalleryGrid />
    </main>
  );
}
