import React from 'react';
import FooterSection from '@/components/footer';
import { HeroHeader } from '@/components/hero5-header';

export const metadata = {
    title: 'Impressum - Social Dynamics Social Media Marketing Agentur in Salzburg',
    description: 'Impressum von Social Dynamics, Ihrer Social Media Marketing Agentur in Salzburg.',
};

export default function ImpressumPage() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <HeroHeader />
      <main className="container mx-auto px-4 py-16 md:py-24 pt-24 md:pt-32 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Impressum</h1>
        
        <div className="max-w-3xl mx-auto text-white/80">
          <section className="mb-8 p-6 bg-white/5 border border-white/10 rounded-lg space-y-6">
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Social Dynamics</h3>
              <p>Markus Wallner</p>
              <p>Scheierlweg 14</p>
              <p>5303 Thalgau</p>
              <p className="mt-2">Unternehmensgegenstand: Werbeagentur</p>
              <p>UID-Nummer: ATU78676112</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Kontakt</h3>
              <p>Tel.: <a href="tel:+436604252271" className="hover:text-white">+43 660 425 2271</a></p>
              <p>E-Mail: <a href="mailto:office@socialdynamics.agency" className="hover:text-white">office@socialdynamics.agency</a></p>
              <p className="mt-3">Mitglied bei: WKO, Landesinnung, etc.</p>
              <p>Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">www.ris.bka.gv.at</a></p>
              <p>Aufsichtsbehörde/Gewerbebehörde: Bezirkshauptmannschaft Salzburg</p>
              <p>Verleihungsstaat: Österreich</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Kontaktdaten des Verantwortlichen für Datenschutz</h3>
              <p>Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:</p>
              <p className="mt-3 font-medium">Social Dynamics</p>
              <p>Markus Wallner</p>
              <p>Scheierlweg 14</p>
              <p>5303 Thalgau</p>
              <p className="mt-3">Tel.: <a href="tel:+436604252271" className="hover:text-white">+43 660 425 2271</a></p>
              <p>E-Mail: <a href="mailto:office@socialdynamics.agency" className="hover:text-white">office@socialdynamics.agency</a></p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">EU-Streitschlichtung</h3>
              <p>Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.</p>
              <p>Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der Europäischen Kommission unter <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.</p>
              <p className="mt-3">Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Haftung für Inhalte dieser Website</h3>
              <p>Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns, korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p className="mt-3">Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.</p>
              <p className="mt-3">Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie, uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Haftung für Links auf dieser Website</h3>
              <p>Unsere Website enthält Links zu anderen Websites, für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
              <p className="mt-3">Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Urheberrechtshinweis</h3>
              <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie uns, bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten, wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
              <p className="mt-3">Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie, uns zu kontaktieren.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Bildernachweis</h3>
              <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt. Die Bilderrechte liegen bei:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Unsplash</li>
                <li>Behance</li>
                <li>Pexels</li>
              </ul>
              <p className="mt-3">Alle Texte sind urheberrechtlich geschützt.</p>
            </div>

          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 