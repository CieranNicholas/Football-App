import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  console.log(process.env.API_TOKEN);
  return (
    <main className='p-24'>
      <section className='py-12 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>Shadcn Test</h1>
        <p className='text-2xl text-muted-foreground'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sint
          dignissimos cumque, voluptatibus totam quas.
        </p>
        <div className='flex gap-6 items-center justify-center'>
          <Button>Learn More</Button>
          <Button>Enroll Now</Button>
        </div>
      </section>
    </main>
  );
}
