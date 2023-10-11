import { Calculator } from "@/components/calculator";
import { InfoContainer } from "@/components/infocontainer";

export default function Home() {
  return (
    <main className="h-full flex justify-center md:pt-16 ">
      <div className="w-full max-w-3xl">
        <InfoContainer>
          <h1 className="font-sans font-medium text-center mb-8 md:mb-10 text-4xl">
            <span className="text-[#AB2328]">Vi</span>
            <span className="text-[#425563]">vo</span> Kalkulator
          </h1>
          <Calculator />
          <p className="pt-6 text-center text-sm">
            Aleksander tar ingen ansvar for feil i utregningene.
          </p>
        </InfoContainer>
      </div>
    </main>
  );
}
