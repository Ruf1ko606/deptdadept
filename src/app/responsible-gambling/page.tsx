import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Responsible Gambling | DEPT DADEPT',
  description: 'Responsible Gambling information',
};

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-oswald uppercase">Responsible Gambling</h1>
        
        <div className="space-y-6 text-gray-300">
          <section className="bg-white/5 p-6 rounded-lg border border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Educational Notice</h2>
            <p>
              While DEPT DADEPT is an educational simulation and does not involve real money, we take responsible gambling seriously. If you or someone you know chooses to gamble on real-money platforms, please consider the following guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Principles of Responsible Gambling</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gambling should be viewed as a form of entertainment, not a way to make money.</li>
              <li>Only gamble with money you can afford to lose.</li>
              <li>Never chase your losses.</li>
              <li>Set time and money limits before you play.</li>
              <li>Don't gamble when you are upset, angry, or depressed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Recognizing the Signs</h2>
            <p>Problem gambling can happen to anyone. Signs may include:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Spending more time or money on gambling than intended.</li>
              <li>Borrowing money to gamble.</li>
              <li>Neglecting work, family, or personal responsibilities.</li>
              <li>Lying about the extent of your gambling.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Getting Help</h2>
            <p>
              If you are concerned about your gambling habits, free and confidential help is available from the following organizations:
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <a 
                href="https://www.gamcare.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 hover:bg-white/10 transition rounded border border-white/10"
              >
                <span className="block font-bold text-white">GamCare</span>
                <span className="text-sm">Leading provider of information, advice and support.</span>
              </a>
              <a 
                href="https://www.gamblingtherapy.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 hover:bg-white/10 transition rounded border border-white/10"
              >
                <span className="block font-bold text-white">Gambling Therapy</span>
                <span className="text-sm">Global service offering free practical advice and emotional support.</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

