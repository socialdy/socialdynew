import React from 'react';
import FooterSection from '@/components/footer';
import { HeroHeader } from '@/components/hero5-header';

export const metadata = {
    title: 'Datenschutz - Social Dynamics Social Media Marketing Agentur in Salzburg',
    description: 'Datenschutzerklärung von Social Dynamics, Ihrer Social Media Marketing Agentur in Salzburg.',
};

export default function DatenschutzPage() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <HeroHeader />
      <main className="container mx-auto px-4 py-16 md:py-24 pt-24 md:pt-32 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Datenschutz</h1>
        
        <div className="max-w-3xl mx-auto text-white/80">
          <section className="mb-8 p-6 bg-white/5 border border-white/10 rounded-lg space-y-6">
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">1. Inhalt des Onlineangebotes:</h3>
              <p>Der Autor übernimmt keinerlei Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen auf unserer Website. Haftungsansprüche gegen den Autor, die sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2. Verweise und Links:</h3>
              <p>Bei direkten oder indirekten Verweisen auf fremde Webseiten (“Hyperlinks”), die außerhalb des Verantwortungsbereiches des Autors liegen, tritt eine Haftungsverpflichtung nur in Kraft, wenn der Autor Kenntnis von den Inhalten der verlinkten Seite hat und es ihm technisch möglich und zumutbar gewesen wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung, Inhalte oder Urheberschaft der verlinkten Seiten. Eine Haftung für illegale, fehlerhafte oder unvollständige Inhalte wird ausdrücklich ausgeschlossen.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3. Urheber- und Kennzeichenrecht:</h3>
              <p>Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten. Alle innerhalb des Internetangebotes genannten Marken und Warenzeichen unterliegen den Bestimmungen des Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt beim Autor. Eine Vervielfältigung oder Verwendung dieser Inhalte ohne ausdrückliche Zustimmung des Autors ist nicht gestattet.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4. Datenschutz:</h3>
              <p>Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (wie E-Mail-Adressen, Namen, Anschriften) besteht, erfolgt die Preisgabe dieser Daten auf freiwilliger Basis. Die Inanspruchnahme aller angebotenen Dienste ist, soweit technisch möglich, auch ohne Angabe solcher Daten oder unter Angabe anonymisierter Daten gestattet. Die Nutzung der veröffentlichten Kontaktdaten zur Übersendung von unaufgeforderter Werbung ist nicht gestattet.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">5. Datenschutzerklärung für die Nutzung von Google Analytics:</h3>
              <p>Diese Website verwendet Google Analytics, einen Webanalysedienst von Google. Google Analytics verwendet Cookies, die auf Ihrem Computer gespeichert werden, um die Nutzung der Website zu analysieren. Die durch das Cookie erzeugten Informationen werden an Server von Google übertragen und dort gespeichert. Die IP-Adresse wird in der Regel innerhalb der EU gekürzt, nur in Ausnahmefällen wird die vollständige IP-Adresse übertragen und dort gekürzt. Weitere Informationen zur Datenschutzerklärung von Google Analytics finden Sie unter: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Google Analytics Datenschutzübersicht</a>. Sie können die Erfassung durch Google Analytics verhindern, indem Sie auf folgenden Link klicken: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Google Analytics Opt-Out Browser Add-On</a></p>
            </div>

          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 