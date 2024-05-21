"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const messages = [
    {
      tittle: "Anonymous Messaging",
      content:
        "Enable users to send anonymous messages to anyone using a unique link.",
    },
    {
      tittle: "Privacy Protection",
      content: "Ensure user privacy by not disclosing sender identities.",
    },
    {
      tittle: "Message Management",
      content:
        "Give user flexibility whether they want anonymous messages or not.",
    },
    {
      tittle: "User Friendly",
      content: "Easy to use and have Minimal UI.",
    },
    {
      tittle: "Device Compatibility",
      content: "Support all devices, with flexible UI.",
    },
  ];
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
      <section className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">
          Dive into the world of Anonymous feeds
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg">
          Explore Freely - Here your identity remains a secret.
        </p>
      </section>
      <Carousel
        className="w-full max-w-screen-md "
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent className="-ml-1">
          {messages.map((message, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardHeader>{message.tittle}</CardHeader>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">
                      {message.content}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
