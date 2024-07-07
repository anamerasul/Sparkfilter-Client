"use client"
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Project from "@/components/Project";
import Review from "@/components/Review";
import Service from "@/components/Service";
import Team from "@/components/Team";


export default function Home() {
  return (
    <main>
    <Banner></Banner>
    <Banner2></Banner2>
    <Service></Service>
    <Project></Project>
    <Team></Team>
    <Review></Review>
    </main>
  );
}
