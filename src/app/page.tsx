import CollectionSpotlight from "@/components/CollectionSpotlight";
import Sports from "@/components/Sports";

export default function Home() {
  return (
    <main className="container mx-auto p-2">
      <Sports />
      <CollectionSpotlight />
    </main>
  );
}
