import React from 'react';
import './UsefulLinks.css';

import {
  CreditCard,
  ArrowLeftRight,
  BadgePercent,
  Smartphone,
  PiggyBank,
} from 'lucide-react';

export default function UsefulLinks() {
  return (
    <section className="useful-links">
      <h2 className="useful-links__title">Օգտակար հղումներ</h2>

      <div className="useful-links__grid">
        <a href="#cards" className="useful-links__card">
          <div className="useful-links__icon">
            <CreditCard size={32} color="#7ec04f" strokeWidth={1.5} />
          </div>
          <span className="useful-links__card-title">Քարտեր</span>
        </a>

        <a href="#transfers" className="useful-links__card">
          <div className="useful-links__icon">
            <ArrowLeftRight size={32} color="#7ec04f" strokeWidth={1.5} />
          </div>
          <span className="useful-links__card-title">Փոխանցումներ</span>
        </a>
         <a href="#loans" className="useful-links__card">
          <div className="useful-links__icon">
            <BadgePercent size={32} color="#7ec04f" strokeWidth={1.5} />
          </div>
          <span className="useful-links__card-title">Օնլայն վարկեր</span>
        </a>

        <a href="#remote-banking" className="useful-links__card">
          <div className="useful-links__icon">
            <Smartphone size={32} color="#7ec04f" strokeWidth={1.5} />
          </div>
          <span className="useful-links__card-title">Հեռավար բանկինգ</span>
        </a>


        {/*<a href="#savings" className="useful-links__card">
          <div className="useful-links__icon">
            <PiggyBank size={32} color="#7ec04f" strokeWidth={1.5} />
          </div>
          <span className="useful-links__card-title">Խնայողություններ</span>
        </a> */}
      </div>
    </section>
  );
}