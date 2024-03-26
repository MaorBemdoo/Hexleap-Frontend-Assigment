import CollectionSpotlight from "@/components/CollectionSpotlight";
import Sports from "@/components/Sports";
import Theme from "@/components/Theme";

export default function Home() {
  return (
    <main className="container w-fit mx-auto p-2">
      <Theme />
      <Sports />
      <CollectionSpotlight />
    </main>
  );
}
