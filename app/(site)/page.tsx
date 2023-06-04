import Header from "@/components/Header";

export const revalidate = 0;

export default async function Home() {
  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>Header</Header>
    </div>
  );
}
